import { chartSeries } from '@app/domain/chart';
import { decodeFilterMatrixParams, decodeRouteParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { filterTasks, filterTaskSessions, isTaskRunning, sortTaskSessions } from '@app/domain/task';
import { isTruthy } from '@app/utils/assert';
import { getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const router = createFeatureSelector<StoreState['router']>('router');

// Params
export const { selectRouteParams, selectQueryParams } = getRouterSelectors(router);
export const selectDecodedFilterParams = createSelector(selectQueryParams, (params) =>
  decodeFilterMatrixParams(params ?? {})
);
export const selectDecodedRouteParams = createSelector(selectRouteParams, (params) => decodeRouteParams(params ?? {}));
export const selectFilterFrom = createSelector(selectDecodedFilterParams, (params) => params.from);
export const selectFilterTo = createSelector(selectDecodedFilterParams, (params) => params.to);
export const selectCurrentTaskId = createSelector(selectDecodedRouteParams, (params) => params.taskId);
export const selectCurrentTaskState = createSelector(selectDecodedRouteParams, (params) => params.state);

// Tasks
export const selectTasks = createFeatureSelector<StoreState['tasks']>('tasks');
export const selectAllTasks = createSelector(selectTasks, (tasks) => Object.values(tasks));
export const selectCurrentTasks = createSelector(
  selectAllTasks,
  selectDecodedFilterParams,
  selectCurrentTaskState,
  (tasks, filterParams, state) => filterTasks({ ...filterParams, state }, tasks)
);
export const selectCurrentTask = createSelector(
  selectTasks,
  selectCurrentTaskId,
  selectFilterFrom,
  selectFilterTo,
  (tasks, taskId, from, to) => {
    if (!taskId) return;
    const maybeTask = tasks[taskId];
    if (!maybeTask) return;
    return sortTaskSessions(filterTaskSessions(maybeTask, { from, to }));
  }
);
export const selectFilterChartData = createSelector(selectAllTasks, (tasks) => chartSeries(tasks));
export const selectCurrentTaskIndex = createSelector(
  selectCurrentTasks,
  selectCurrentTask,
  (tasks, task) => tasks.findIndex(({ id }) => id === task?.id) ?? -1
);
export const selectNextTaskId = createSelector(selectCurrentTasks, selectCurrentTaskIndex, (tasks, currentIndex) => {
  if (!tasks.length) return;
  const nextTaskIndex = currentIndex >= tasks.length - 1 ? 0 : currentIndex + 1;
  return tasks[nextTaskIndex]?.id;
});
export const selectPrevTaskId = createSelector(selectCurrentTasks, selectCurrentTaskIndex, (tasks, currentIndex) => {
  if (!tasks.length) return;
  const prevTaskIndex = currentIndex <= 0 ? tasks.length - 1 : currentIndex - 1;
  return tasks[prevTaskIndex]?.id;
});
export const selectIsCurrentTaskOpened = createSelector(selectCurrentTask, isTruthy);
export const selectTaskById = (taskId: string) => createSelector(selectTasks, (tasks) => tasks[taskId]);
export const selectTheme = createFeatureSelector<StoreState['theme']>('theme');
export const isAnyTaskActive = createSelector(selectAllTasks, (tasks) => tasks.some(isTaskRunning));

// Filter
export const selectFilterRange = createSelector(
  selectFilterFrom,
  selectFilterTo,
  (from, to) => [from ?? null, to ?? null] as const
);
