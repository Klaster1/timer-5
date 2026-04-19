# Issue #35 Yesterday Filter Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix issue #35 so tasks started today are not shown when filtering by yesterday.

**Architecture:** Keep filtering behavior centralized in `filterTasks` by correcting the running-session `to` predicate in `src/app/domain/task.ts`. Add a deterministic Playwright regression test in `e2e/fixtures/filters.ts` that seeds app storage and applies a yesterday query range to reproduce the bug before code changes.

**Tech Stack:** Angular 21, TypeScript, Playwright E2E

---

## Preconditions

- Working branch (no worktree): `fix/issue-35-yesterday-filter` (already created).
- Reproduction confirmed on current branch: with yesterday `from/to` query params, a task with a running session started today is displayed.

---

### Task 1: Reproduce and Lock the Bug in a Failing Test (RED)

**Files:**

- Modify: `e2e/fixtures/filters.ts`
- Read-only reference: `src/app/domain/storage.ts`

- [ ] **Step 1: Add a deterministic failing regression test**

```ts
// e2e/fixtures/filters.ts

test('Date range: yesterday excludes running tasks started today', async ({ page }) => {
  const now = new Date();

  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const yesterdayStart = new Date(startOfToday);
  yesterdayStart.setDate(yesterdayStart.getDate() - 1);

  const yesterdayEnd = new Date(yesterdayStart);
  yesterdayEnd.setHours(23, 59, 59, 999);

  const yesterdaySessionStart = new Date(yesterdayStart);
  yesterdaySessionStart.setHours(10, 0, 0, 0);

  const yesterdaySessionEnd = new Date(yesterdayStart);
  yesterdaySessionEnd.setHours(11, 0, 0, 0);

  let todayRunningStart = new Date(now.getTime() - 60 * 1000);
  if (todayRunningStart < startOfToday) {
    todayRunningStart = new Date(startOfToday.getTime() + 1000);
  }
  if (todayRunningStart > now) {
    todayRunningStart = new Date(now.getTime() - 1000);
  }

  const toSec = (ms: number) => Math.floor(ms / 1000);

  await page.evaluate(
    (payload) => {
      localStorage.setItem('tasks', JSON.stringify(payload));
    },
    {
      version: 1,
      value: [
        {
          id: 'y1',
          name: 'YESTERDAY TASK',
          state: 1,
          sessions: [[toSec(yesterdaySessionStart.valueOf()), toSec(yesterdaySessionEnd.valueOf())]],
        },
        {
          id: 't1',
          name: 'TODAY RUNNING TASK',
          state: 0,
          sessions: [[toSec(todayRunningStart.valueOf()), null]],
        },
      ],
    },
  );

  const from = encodeURIComponent(yesterdayStart.toISOString());
  const to = encodeURIComponent(yesterdayEnd.toISOString());

  await page.goto(`/active?from=${from}&to=${to}`);

  await expect(screenTasks.taskItemByText('TODAY RUNNING TASK')).toHaveCount(0);
  await expect(screenTasks.taskItemByText('YESTERDAY TASK')).toHaveCount(1);
});
```

- [ ] **Step 2: Run only the new test and verify it fails for the right reason**

Run:

```bash
npx playwright test e2e/fixtures/filters.ts --grep "Date range: yesterday excludes running tasks started today"
```

Expected RED result:

- FAIL at assertion that `TODAY RUNNING TASK` count is `0`.
- Actual count is `1` (current bug behavior).

- [ ] **Step 3: Commit the RED test**

```bash
git add e2e/fixtures/filters.ts
git commit -m "test(e2e): reproduce issue #35 with yesterday date range"
```

---

### Task 2: Implement Minimal Fix in Filter Predicate (GREEN)

**Files:**

- Modify: `src/app/domain/task.ts`
- Test: `e2e/fixtures/filters.ts`

- [ ] **Step 1: Change `filterByTo` for running sessions**

Current logic lets all running sessions pass `to` unconditionally:

```ts
const sessions = t.sessions.filter((s) => (isNumber(s.end) ? s.end <= to.valueOf() : true));
```

Replace with bounded running-session logic:

```ts
const sessions = t.sessions.filter((s) => (isNumber(s.end) ? s.end <= to.valueOf() : s.start <= to.valueOf()));
```

- [ ] **Step 2: Re-run the targeted regression test**

Run:

```bash
npx playwright test e2e/fixtures/filters.ts --grep "Date range: yesterday excludes running tasks started today"
```

Expected GREEN result:

- PASS
- `TODAY RUNNING TASK` is not visible in yesterday range.

- [ ] **Step 3: Commit the minimal fix**

```bash
git add src/app/domain/task.ts
git commit -m "fix(filter): respect upper date bound for running sessions"
```

---

### Task 3: Verify No Regressions in Filter Behavior

**Files:**

- Test: `e2e/fixtures/filters.ts`

- [ ] **Step 1: Run full filters fixture**

```bash
npx playwright test e2e/fixtures/filters.ts
```

Expected:

- All tests in `filters.ts` pass.

- [ ] **Step 2: Run the full Playwright suite (optional but recommended before PR)**

```bash
npm run e2e
```

Expected:

- No new failures introduced by the fix.

- [ ] **Step 3: Commit verification notes (if needed) and prepare PR**

```bash
git status
git log --oneline -n 3
```

PR summary checklist:

- Includes RED reproduction test.
- Includes minimal GREEN fix in `filterByTo`.
- Mentions issue link: `https://github.com/Klaster1/timer-5/issues/35`.

---

## Root Cause Hypothesis to Validate During RED->GREEN

The `to` filter currently treats running sessions (`end` missing) as always in-range. Combined with `from`, this allows sessions started after the selected end date to leak into older ranges.

Fix acceptance condition:

- For `to` filtering, running sessions are included only when `start <= to`.
