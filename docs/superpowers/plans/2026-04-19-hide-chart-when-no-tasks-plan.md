# Hide Chart When No Tasks Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hide the filter timeline chart when there are no tasks at all, while keeping filter controls and empty-state messaging unchanged.

**Architecture:** Add a small guard in `TasksFilterComponent` that checks whether any tasks exist globally (`AppStore.allTasks`). Render the chart block only when that guard is true. Lock behavior with a Playwright regression test that reproduces no-tasks + filter-in-URL state.

**Tech Stack:** Angular 21, TypeScript, Playwright E2E

---

## Preconditions

- Working branch: `fix/hide-chart-when-no-tasks`.
- Reproduction confirmed: no tasks in storage + URL `from/to` filters can show filter controls and an empty chart block.

---

### Task 1: Add Failing Regression Test (RED)

**Files:**

- Modify: `e2e/page-objects/screen-tasks.ts`
- Modify: `e2e/fixtures/filters.ts`

- [ ] **Step 1: Extend page model and add regression test for no tasks + filter URL**

```ts
// e2e/page-objects/screen-tasks.ts

// OLD
public readonly filter = {
  name: {
    input: () => this.page.locator('tasks-filter .name input'),
    buttonClear: () => this.page.locator('tasks-filter .name button-reset-input-control button'),
  },
};

// NEW
public readonly filter = {
  chart: () => this.page.locator('tasks-filter timeline-chart-uplot'),
  name: {
    input: () => this.page.locator('tasks-filter .name input'),
    buttonClear: () => this.page.locator('tasks-filter .name button-reset-input-control button'),
  },
};
```

```ts
// e2e/fixtures/filters.ts

// NEW (add this test)
test('No tasks + filters: chart is hidden', async ({ page }) => {
  await page.evaluate(() => {
    localStorage.setItem('tasks', JSON.stringify({ version: 1, value: [] }));
  });

  const from = encodeURIComponent('2024-06-01T00:00:00.000Z');
  const to = encodeURIComponent('2024-06-30T23:59:59.999Z');

  await page.goto(`/all?from=${from}&to=${to}`);

  await expect(screenTasks.filter.name.input()).toBeVisible();
  await expect(screenTasks.filter.chart()).toHaveCount(0);
});
```

- [ ] **Step 2: Run only the new test and verify it fails for the right reason**

Run:

```bash
npx playwright test e2e/fixtures/filters.ts --grep "No tasks + filters: chart is hidden"
```

Expected RED result:

- FAIL at `screenTasks.filter.chart()` count assertion.
- Actual count is `1` before the fix.

- [ ] **Step 3: Commit failing test**

```bash
git add e2e/page-objects/screen-tasks.ts e2e/fixtures/filters.ts
git commit -m "test(filters): reproduce no-tasks filtered chart visibility"
```

---

### Task 2: Implement Minimal UI Guard (GREEN)

**Files:**

- Modify: `src/app/screen-tasks/tasks-filter/tasks-filter.ts`
- Modify: `src/app/screen-tasks/tasks-filter/tasks-filter.html`
- Test: `e2e/fixtures/filters.ts`

- [ ] **Step 1: Add a computed flag for global task presence**

```ts
// src/app/screen-tasks/tasks-filter/tasks-filter.ts

// NEW (add this property on the component class)
public hasAnyTasks = computed(() => this.store.allTasks().length > 0);
```

Place it on the class near `dataRange`/other public signals.

- [ ] **Step 2: Gate chart rendering in template**

Replace the existing chart block (OLD) with the new guarded block (NEW):

```html
<!-- OLD -->
@if (dataRange(); as dataRange) { @defer {
<timeline-chart-uplot
  [@inOutAnimation]
  [chartData]="dataRange.data"
  barWidth="day"
  [range]="dataRange.range"
  (rangeChange)="onChartRangeChange($event)"
></timeline-chart-uplot>
} } @else {
<timeline-chart-uplot [chartData]="[[], []]" barWidth="day"></timeline-chart-uplot>
}
```

```html
<!-- NEW -->
@if (hasAnyTasks()) { @if (dataRange(); as dataRange) { @defer {
<timeline-chart-uplot
  [@inOutAnimation]
  [chartData]="dataRange.data"
  barWidth="day"
  [range]="dataRange.range"
  (rangeChange)="onChartRangeChange($event)"
></timeline-chart-uplot>
} } @else {
<timeline-chart-uplot [chartData]="[[], []]" barWidth="day"></timeline-chart-uplot>
} }
```

This preserves existing behavior when tasks exist, and hides chart entirely when there are no tasks.

- [ ] **Step 3: Run the targeted regression test**

```bash
npx playwright test e2e/fixtures/filters.ts --grep "No tasks + filters: chart is hidden"
```

Expected GREEN result:

- PASS.
- `tasks-filter` remains visible.
- `timeline-chart-uplot` is absent when task list is globally empty.

- [ ] **Step 4: Commit minimal fix**

```bash
git add src/app/screen-tasks/tasks-filter/tasks-filter.ts src/app/screen-tasks/tasks-filter/tasks-filter.html
git commit -m "fix(filters): hide timeline chart when there are no tasks"
```

---

### Task 3: Regression Verification

**Files:**

- Test: `e2e/fixtures/filters.ts`

- [ ] **Step 1: Run full filters fixture**

```bash
npx playwright test e2e/fixtures/filters.ts
```

Expected:

- All tests in `filters.ts` pass.

- [ ] **Step 2: Optional broader UI verification**

```bash
npm run e2e
```

Expected:

- No additional failures introduced by the chart visibility guard.

- [ ] **Step 3: Final status check**

```bash
git status -sb
git log --oneline -n 5
```

Expected:

- Branch contains test and fix commits only.

---

## Acceptance Criteria

- With no tasks in storage and URL filters present, filter controls remain visible but chart is hidden.
- With at least one task in storage, chart behavior remains unchanged.
- Playwright regression test covers the no-tasks filtered state and passes.
