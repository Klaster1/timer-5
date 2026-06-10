# Plan: Replace `withRouter` with Angular 22 route input binding

**Branch:** `route-params`  
**Motivation:** Angular 22's `withComponentInputBinding()` binds path params, matrix params, and query params directly to component `input()` signals. This makes the `withRouter` subscription in `AppStore` and all route-derived computeds redundant — route state belongs in the components that are activated by those routes, not in a global singleton store.

**End state of `AppStore`:** task/theme domain store with **no route _reading_** — no `withRouter` subscription, no `ActivatedRouteSnapshot`, no `NavigationEnd`, no route-derived computed. `Router` is still injected, used only to **perform** navigation that intrinsically follows a domain mutation (`createTask` → open the new task; `deleteTask` → close the detail pane if the deleted task is the open one). These read `router.routerState.snapshot` at call time instead of subscribing.

---

## Background: how `withComponentInputBinding` works

```typescript
// main.ts
provideRouter(routes, withComponentInputBinding())
```

With this flag the router, on every navigation, sets `input()` properties on the activated component whose names match:
- **path parameters** (e.g. `:taskId`)
- **matrix parameters** (e.g. `/:state;foo=bar` → `state` and `foo`)
- **query parameters** (global, bound to every component in the tree)
- **static/resolved route data**

Child routes **inherit** parent params (`paramsInheritanceStrategy: 'always'` is the default in v22), so `ScreenTaskComponent` at `/:state/:taskId` automatically receives both `state` (from parent) and `taskId` (own segment).

Dialogs are opened via `MatDialog`, not via `<router-outlet>`, so Angular's built-in `withComponentInputBinding` does not cover them. However, `provideDialogRoutes` already has the `ActivatedRouteSnapshot` at the point it calls `matDialog.open()`. We extend it to also call `setInput()` on the opened component for each route param and query param — giving dialog components the same `input()` API as screen components.

---

## Affected files

| File | Change type |
|---|---|
| `src/main.ts` | add `withComponentInputBinding()` |
| `src/app/providers/state.ts` | remove `withRouter`, strip route-derived computeds/methods, update method signatures |
| `src/app/screen-tasks/screen-tasks.ts` | add route inputs, build local computeds |
| `src/app/screen-tasks/tasks-filter/tasks-filter.ts` | receive chart/range as inputs; inject `ActivatedRoute` for query-param form sync |
| `src/app/screen-task/screen-task.ts` | add route inputs, build local computeds |
| `src/app/providers/routed-dialogs.ts` | add input binding after `matDialog.open()` via `componentRef.setInput()` |
| `src/app/dialog-create-task/dialog-create-task.ts` | inject Router; navigate after create |
| `src/app/dialog-rename-task/dialog-rename-task.ts` | replace `store.dialogTask()` with `taskId = input<string>()` |
| `src/app/dialog-edit-session/dialog-edit-session.ts` | replace `store.dialogSession()` with `taskId`/`sessionIndex` inputs |
| `src/app/dialog-split-session/dialog-split-session.ts` | replace `store.dialogSession()` with `taskId`/`sessionIndex` inputs |

---

## Step 1 — Enable `withComponentInputBinding` in `main.ts`

In `src/main.ts`, import `withComponentInputBinding` from `@angular/router` and add it to `provideRouter`:

```typescript
provideRouter(
  [...routes],
  withComponentInputBinding(),
),
```

No other changes in this step. Verify the app still boots.

---

## Step 2 — Update `AppStore` method signatures

Remove the implicit route-param reads from store mutation methods. Change to explicit params so callers are responsible for supplying context.

### `renameTask`
```typescript
// before
renameTask(name: string): Promise<void>
// store internally read store.dialogTaskId()

// after
renameTask(taskId: string, name: string): void
// no routing side-effect — caller closes dialog
```

### `editSession`
```typescript
// before
editSession(updatedSession: Session): Promise<void>
// internally read store.dialogTaskId() / store.dialogSessionIndex()

// after
editSession(taskId: string, sessionIndex: number, updatedSession: Session): void
```

### `splitSession`
```typescript
// before
splitSession(updatedSessions: Session[]): void

// after
splitSession(taskId: string, sessionIndex: number, updatedSessions: Session[]): void
```

### `createTask`
```typescript
// before
createTask(name: string): Promise<void>
// internally navigated using store.currentTaskState() (from withRouter)

// after — navigation stays in the store; read route state from router.routerState.snapshot at call time
createTask(name: string): string   // also returns new taskId for callers that need it
```

Navigation is intrinsically tied to task creation and always happens — moving it to every call site would duplicate logic. The fix is to replace the stale `store.currentTaskState()` read (which depended on `withRouter`) with a direct `router.routerState.snapshot` read at call time. `inject(Router)` stays in `withMethods`; `RoutedDialogs` is removed.

`DialogCreateTaskComponent` is **unchanged** — it just calls `this.state.createTask(value)` as before.

### `deleteTask`
```typescript
// before
deleteTask(taskId: string): void
// internally navigated away if taskId === currentTaskId (required withRouter-derived currentTaskId)

// after — still owns its navigation, but reads the snapshot instead of a store computed
deleteTask(taskId: string): void
```

Navigation stays in the store. The only change is **how** it learns whether the deleted task is the open one: read `router.routerState.snapshot` (primary outlet's `firstChild.params['taskId']`) at call time instead of the removed `withRouter`-derived `currentTaskId`. Every call site (task-list menu, detail toolbar menu, detail hotkey) just calls `store.deleteTask(id)` and stays unchanged — no component-level navigation.

At this step, also **remove** from `withMethods`:
- `inject(RoutedDialogs)` (no longer needed)

`inject(Router)` **stays** — `createTask` still uses it for post-create navigation, now reading `router.routerState.snapshot` instead of the removed `store.currentTaskState()` signal.

Remove the now-unused store computeds that were only feeding those methods:
- `dialogTaskId`, `dialogSessionIndex`, `dialogTask`, `dialogSession`
- `currentTaskId`, `currentTaskState`

Remove from imports: `Router`, `RoutedDialogs`.

> **Note**: `allTasks` and `isAnyTaskActive` stay — they are pure domain computeds. Everything else in `withComputed` is route-derived and gets removed in Step 3.

---

## Step 3 — Strip route-derived computeds and `withRouter` from `AppStore`

Remove the entire `withRouter()` feature factory (≈55 lines).

Remove from `AppStore.withComputed` all route-derived computeds:
- `decodedFilterParams`, `decodedRouteParams`
- `filterFrom`, `filterTo`
- `currentTaskId`, `currentSessionIndex`, `currentTaskState`
- `taskFilterParams`, `currentTasks`, `currentTask`
- `filterChartData`, `currentTaskIndex`, `nextTaskId`, `prevTaskId`
- `isCurrentTaskOpened`, `filterRange`
- `dialogTaskId`, `dialogSessionIndex`, `dialogTask`, `dialogSession`

Keep in `withComputed`:
- `allTasks`
- `isAnyTaskActive`

Remove unused imports at the top of `state.ts`:
- `DestroyRef`, `takeUntilDestroyed`, `ActivatedRouteSnapshot`, `NavigationEnd`
- `signalStoreFeature`, `WritableStateSource` (if no longer used after cleanup)
- `chartSeries`, `decodeFilterMatrixParams`, `decodeRouteParams`
- `filterTaskSessions`, `filterTasks`
- `RoutedDialogs`
- `Router`

---

## Step 4 — Refactor `ScreenTasksComponent`

`ScreenTasksComponent` is activated at `/:state`. It receives:
- `state` — matrix/path param → decoded to `RouteTaskState`
- `search`, `from`, `to`, `durationSort` — query params (raw strings)

Add inputs and local computeds:

```typescript
// Route inputs (all raw strings from router)
state = input<string>();
search = input<string>();
from = input<string>();
to = input<string>();
durationSort = input<string>();

// Local decoded state
currentTaskState = computed(() => decodeRouteParams({ state: this.state() }).state);
decodedFilterParams = computed(() =>
  decodeFilterMatrixParams({
    search: this.search(),
    from: this.from(),
    to: this.to(),
    durationSort: this.durationSort(),
  }),
);
private taskFilterParams = computed(
  () => ({ ...this.decodedFilterParams(), state: this.currentTaskState() }),
  { equal: deepEquals },
);
currentTasks = computed(() => filterTasks(this.taskFilterParams(), this.store.allTasks()));

filterChartData = computed(() => chartSeries(this.store.allTasks(), this.currentTasks()));
filterRange = computed(() => [this.decodedFilterParams().from ?? null, this.decodedFilterParams().to ?? null] as const);

private filterPresent = computed(() => !!Object.keys(this.decodedFilterParams()).length);

// next/prev — need currentTaskId for position; read from child route snapshot in callback
private currentTaskIndex(taskId: string | undefined) {
  return this.currentTasks().findIndex(t => t.id === taskId);
}
```

Update hotkey for next/prev to read `taskId` from `ActivatedRoute` snapshot at call time:

```typescript
private route = inject(ActivatedRoute);

// inside hotkey callback:
const taskId = this.route.snapshot.firstChild?.params['taskId'];
const tasks = this.currentTasks();
const currentIndex = tasks.findIndex(t => t.id === taskId);
const nextTaskId = KEYS_NEXT.includes(e.key)
  ? tasks[currentIndex >= tasks.length - 1 ? 0 : currentIndex + 1]?.id
  : tasks[currentIndex <= 0 ? tasks.length - 1 : currentIndex - 1]?.id;
if (this.currentTaskState() && nextTaskId) {
  this.router.navigate([this.currentTaskState(), nextTaskId], { queryParamsHandling: 'merge' });
}
```

Pass `filterChartData` and `filterRange` to `<tasks-filter>` as inputs (see Step 5).

Remove all `this.store.currentTasks()`, `this.store.currentTaskState()`, `this.store.nextTaskId()`, `this.store.prevTaskId()`, `this.store.decodedFilterParams()` references.

---

## Step 5 — Refactor `TasksFilterComponent`

`TasksFilterComponent` is a **child component** (not a routed component), so route input binding doesn't apply. It currently reads `filterChartData`, `filterRange`, `allTasks`, and `decodedFilterParams` from the store.

Changes:
- Add `@Input` `chartData` and `filterRange` received from `screen-tasks`:
  ```typescript
  chartData = input<...>();
  filterRange = input<...>();
  ```
- `allTasks` stays in the store — keep `store.allTasks()` access.
- `decodedFilterParams`: inject `ActivatedRoute` and derive locally for the initial form sync (already using `Router` for writes, consistent to use `ActivatedRoute` for reads):
  ```typescript
  private route = inject(ActivatedRoute);
  // replace the effect that reads store.decodedFilterParams():
  effect(() => {
    const params = decodeFilterMatrixParams(toSignal(this.route.queryParams)() ?? {});
    this.filterModel.set({ ... });
  });
  ```
  Alternatively, receive `decodedFilterParams` as an additional input from `screen-tasks` to keep decoding in one place.

Update `screen-tasks.html` to pass the new inputs:
```html
<tasks-filter [chartData]="filterChartData()" [filterRange]="filterRange()" />
```

---

## Step 6 — Refactor `ScreenTaskComponent`

`ScreenTaskComponent` is activated at `/:state/:taskId`. With `paramsInheritanceStrategy: 'always'` (default) it inherits `state` from parent and gets `taskId` from its own segment. Query params are also inherited.

Add inputs:

```typescript
taskId = input<string>();
from = input<string>();   // inherited query param
to = input<string>();     // inherited query param
```

Add local computeds:

```typescript
private filterFrom = computed(() =>
  this.from() ? parseISO(decodeURIComponent(this.from()!)) : undefined
);
private filterTo = computed(() => ...same pattern...);

currentTask = computed(() => {
  const taskId = this.taskId();
  if (!taskId) return undefined;
  const task = this.store.tasks()[taskId];
  if (!task) return undefined;
  return filterTaskSessions(task, { from: this.filterFrom(), to: this.filterTo() });
});
taskIsInProgress = computed(() => isTaskRunning(this.currentTask()));
```

Update all hotkeys and methods to use `this.currentTask()` / `this.taskId()` from local computeds (not `this.store.currentTask()`).

Update `deleteTask` hotkey to also navigate away:
```typescript
hotkey(KEYS_DELETE_TASK, 'Delete task', () => {
  const task = this.currentTask();
  if (!task) return;
  this.store.deleteTask(task.id);
  // navigate away — read state from parent route param
  const state = this.route.parent?.snapshot.params['state'];
  if (state) this.router.navigate([state], { queryParamsHandling: 'merge' });
}),
```

Inject `ActivatedRoute` and `Router` in `ScreenTaskComponent`.

The scroll effect currently tracks `store.currentTaskId()` — replace with `this.taskId()`:
```typescript
effect(() => {
  this.taskId();
  this.viewport()?.scrollToIndex(0);
});
```

---

## Step 7 — Extend `provideDialogRoutes` to do input binding

`MatDialogRef.componentRef` is a public `ComponentRef<T>`. After `matDialog.open()`, iterate the snapshot's merged params + queryParams and call `setInput()` — exactly what Angular's `withComponentInputBinding` does internally for routed components.

```typescript
// in provideDialogRoutes, after matDialog.open(...):
const allParams = { ...event.snapshot.queryParams, ...event.snapshot.params };
for (const [key, value] of Object.entries(allParams)) {
  dialogRef.componentRef?.setInput(key, value);
}
```

After this, dialog components declare inputs exactly like screen components — no `ActivatedRouteSnapshot` injection needed.

### `DialogRenameTaskComponent`

```typescript
taskId = input<string>();

private syncFromStore = effect(() => {
  const task = this.state.tasks()[this.taskId()!];
  this.taskModel.set({ value: task?.name ?? '' });
});

onSubmit() {
  const taskId = this.taskId();
  if (this.form.value().valid() && taskId) {
    this.state.renameTask(taskId, this.taskModel().value);
    inject(RoutedDialogs).close();
  }
}
```

### `DialogEditSessionComponent`

```typescript
taskId = input<string>();
sessionIndex = input<string>();  // raw string from router

private session = computed(() => {
  const taskId = this.taskId();
  const idx = Number(this.sessionIndex());
  if (!taskId || isNaN(idx)) return undefined;
  return this.state.tasks()[taskId]?.sessions[idx];
});

private syncFromStore = effect(() => {
  const session = this.session();
  this.sessionModel.set({ start: ..., end: ... });
});

onSubmit() {
  const taskId = this.taskId();
  const idx = Number(this.sessionIndex());
  if (this.form.start().valid() && start instanceof Date && taskId) {
    this.state.editSession(taskId, idx, { start, end });
    inject(RoutedDialogs).close();
  }
}
```

### `DialogSplitSessionComponent`

Same pattern — `taskId = input<string>()` and `sessionIndex = input<string>()`. Replace all `this.state.dialogSession()` reads with a local `session` computed from `state.tasks()[taskId]?.sessions[Number(sessionIndex)]`. Call `this.state.splitSession(taskId, idx, result)` and `routedDialogs.close()`.

### `DialogCreateTaskComponent`

**No changes.** The dialog just calls `this.state.createTask(value)` — the store owns the navigation.

---

## Step 8 — Update `ButtonTaskActionsComponent`

`deleteTask()` in `button-task-actions` calls `this.store.deleteTask(task.id)`. After the refactor, `deleteTask` is pure (no navigation). This component is used in two contexts:

1. **Inside `screen-tasks` list rows** — deleting a non-selected task; no navigation needed.
2. **Inside `screen-task` toolbar** — deleting the current task; navigation is handled by the `screen-task` hotkey, not this button.

So `button-task-actions.deleteTask()` stays as-is — pure `store.deleteTask(task.id)`. No navigation side-effect was visible here anyway (the task list re-renders reactively).

---

## Step 9 — Verify and clean up

1. Run `ng build` — fix all TypeScript errors from changed method signatures and removed store properties.
2. Run existing Playwright tests: `npx playwright test`.
3. Verify the store no longer imports anything from `@angular/router`.
4. Remove `signalStoreFeature` import if unused after removing `withRouter`.
5. Check that `NormalizedTasks` export is retained (used externally).

---

## Non-goals / out of scope

- Refactoring the `RoutedDialogs` service or `DialogLinkDirective` — only `provideDialogRoutes` gets the `setInput()` addition.
- Changing the URL structure.
- Migrating `withTheme` — it has no router dependency and is unaffected.
- Unit tests for store methods — their signatures change but the logic is identical.
