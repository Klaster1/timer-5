# Esc Should Not Close Left Navigation Drawer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prevent Esc from closing the left navigation drawer while preserving intended Esc behavior for dialogs and overlays.

**Architecture:** Add a Playwright regression that checks user-visible left-nav controls remain visible after Esc, then apply a minimal drawer config fix in the app shell.

**Tech Stack:** Angular 21, Angular Material, Playwright E2E

---

### Task 1: RED - Capture The Bug With A Failing Test

**Files:**

- Modify: `e2e/page-objects/app.ts`
- Modify: `e2e/fixtures/general.ts`

- [ ] **Step 1: Add app page-object locator for the logo link in the drawer**

```ts
public logoAllTasks(): Locator {
  return this.page.locator('mat-drawer .link-all');
}
```

- [ ] **Step 2: Add failing regression test with user-visible assertion**

```ts
test('Esc does not close left navigation drawer', async ({ page }) => {
  await expect(app.buttonActiveTasks()).toBeVisible();

  await app.logoAllTasks().focus();
  await page.keyboard.press('Escape');

  await expect(app.buttonActiveTasks()).toBeVisible();
});
```

- [ ] **Step 3: Run focused test and confirm RED**

```bash
npm run e2e -- --grep "Esc does not close left navigation drawer"
```

Expected RED result:

- Fails with a visibility assertion because Esc hides the left-nav controls.

- [ ] **Step 4: Commit RED test changes**

```bash
git add e2e/page-objects/app.ts e2e/fixtures/general.ts
git commit -m "test(e2e): add regression for Esc closing left nav drawer"
```

### Task 2: GREEN - Minimal Fix

**Files:**

- Modify: `src/app/app.html`

- [ ] **Step 1: Disable drawer closing on Escape**

```html
<!-- before -->
<mat-drawer mode="side" [opened]="true">
  <!-- after -->
  <mat-drawer mode="side" [opened]="true" [disableClose]="true"></mat-drawer
></mat-drawer>
```

- [ ] **Step 2: Re-run focused regression and confirm GREEN**

```bash
npm run e2e -- --grep "Esc does not close left navigation drawer"
```

Expected GREEN result:

- The test passes and left nav remains visible after Esc.

- [ ] **Step 3: Commit fix**

```bash
git add src/app/app.html
git commit -m "fix(nav): prevent Escape from closing left drawer"
```

### Task 3: Safety Regression Checks

**Files:**

- Verify: `e2e/fixtures/general.ts`
- Verify: `e2e/fixtures/tasks.ts`

- [ ] **Step 1: Verify General fixture**

```bash
npm run e2e -- e2e/fixtures/general.ts
```

- [ ] **Step 2: Verify tasks fixture**

```bash
npm run e2e -- e2e/fixtures/tasks.ts
```

- [ ] **Step 3: Verify clean tree**

```bash
git status -sb
```
