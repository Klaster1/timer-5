import { DestroyRef, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { chartSeries } from '@app/domain/chart';
import { decodeFilterMatrixParams, decodeRouteParams } from '@app/domain/router';
import { NormalizedTasks, Theme, fromStoredTasks } from '@app/domain/storage';
import {
  Session,
  SessionId,
  TaskState,
  filterTaskSessions,
  filterTasks,
  isSessionWithId,
  isTaskRunning,
  sortTaskSessions,
} from '@app/domain/task';
import { deepEquals } from '@app/utils/assert';
import {
  StateSignal,
  patchState,
  signalStore,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Draft, produce } from 'immer';

const updateState = <State extends object>(store: StateSignal<State>, recipe: (draft: Draft<State>) => any) => {
  patchState(store, (state) => produce(state, recipe));
};

const withRouter = () => {
  type RouterState = {
    router: {
      url: ActivatedRouteSnapshot['url'];
      params: ActivatedRouteSnapshot['params'];
      queryParams: ActivatedRouteSnapshot['queryParams'];
      firstChild?: ActivatedRouteSnapshot['firstChild'];
    } | null;
  };
  const initialState: RouterState = {
    router: null,
  };
  return signalStoreFeature(
    withState<RouterState>(initialState),
    withMethods((store) => {
      const router = inject(Router);
      const destroyRef = inject(DestroyRef);
      return {
        hookUpRouter() {
          router.events.pipe(takeUntilDestroyed(destroyRef)).subscribe((event) => {
            if (event instanceof NavigationEnd) {
              patchState(store, (state) =>
                produce(state, (draft) => {
                  const route = router.routerState.snapshot.root;
                  draft.router = {
                    url: route?.url,
                    params: route?.params,
                    queryParams: route?.queryParams,
                    firstChild: route?.children.at(0),
                  };
                }),
              );
            }
          });
        },
      };
    }),
    withComputed((store) => {
      const currentRoute = computed(() => {
        const rootRoute = store.router();
        if (!rootRoute) {
          return undefined;
        }
        let route = rootRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      });
      const routeParams = computed(() => currentRoute()?.params);
      const queryParams = computed(() => currentRoute()?.queryParams);
      return {
        currentRoute,
        routeParams,
        queryParams,
      };
    }),
    withHooks({
      onInit(store) {
        store.hookUpRouter();
      },
    }),
  );
};

const withTheme = () => {
  type ThemeState = {
    theme: Theme;
  };
  const initialState: ThemeState = {
    theme: 'dark',
  };
  return signalStoreFeature(
    withState<ThemeState>(initialState),
    withMethods((store) => {
      const router = inject(Router);
      return {
        toggleTheme(theme?: Theme) {
          updateState(store, (draft) => {
            if (theme) {
              draft.theme = theme;
            } else {
              draft.theme = draft.theme === 'dark' ? 'light' : 'dark';
            }
          });
        },
      };
    }),
    withHooks({
      onInit(store) {
        store.toggleTheme((localStorage.getItem('theme') as Theme | null) ?? initialState.theme);
        effect(() => {
          localStorage.setItem('theme', store.theme());
        });
      },
    }),
  );
};

const withTasks = () => {
  type TasksState = {
    tasks: NormalizedTasks;
  };
  const initialState: TasksState = {
    tasks: {},
  };
  return signalStoreFeature(
    withState<TasksState>(initialState),
    withMethods((store) => ({
      stopTask(taskId: string, timestamp: number) {
        updateState(store, (draft) => {
          store.tasks()[taskId]?.sessions.forEach((session) => {
            if (typeof session.end !== 'number') session.end = timestamp;
          });
        });
      },
      updateSession(taskId: string, sessionId: SessionId, start: number, end: number) {
        updateState(store, (draft) => {
          const session = store.tasks()[taskId]?.sessions.find(isSessionWithId(sessionId));
          if (session) {
            session.start = start;
            session.end = end;
          }
        });
      },
      deleteSession(taskId: string, sessionId: SessionId) {
        updateState(store, (draft) => {
          const task = store.tasks()[taskId];
          if (!task) return;
          const index = task?.sessions.findIndex(isSessionWithId(sessionId));
          if (index !== -1) task.sessions.splice(index, 1);
        });
      },
      loadTasks(tasks: NormalizedTasks) {
        updateState(store, (draft) => {
          draft.tasks = tasks;
        });
      },
      createTask(taskId: string, name: string) {
        updateState(store, (draft) => {
          draft.tasks[taskId] = { id: taskId, name, sessions: [], state: TaskState.active };
        });
      },
      renameTask(taskId: string, name: string) {
        updateState(store, (draft) => {
          const task = draft.tasks[taskId];
          if (task) task.name = name;
        });
      },
      updateTaskState(taskId: string, state: TaskState) {
        updateState(store, (draft) => {
          const task = draft.tasks[taskId];
          if (task) task.state = state;
        });
      },
      deleteTask(taskId: string) {
        updateState(store, (draft) => {
          delete draft.tasks[taskId];
        });
      },
      startTask(taskId: string, timestamp: number) {
        updateState(store, (draft) => {
          const task = draft.tasks[taskId];
          if (task) {
            task.state = TaskState.active;
            task.sessions.push({ start: timestamp });
          }
        });
      },
      moveSessionToTask(fromTaskId: string, toTaskId: string, session: Session) {
        updateState(store, (draft) => {
          const fromTask = draft.tasks[fromTaskId];
          const toTask = draft.tasks[toTaskId];
          if (fromTask && toTask) {
            fromTask.sessions = fromTask.sessions.filter((session) => !deepEquals(session, session));
            toTask.sessions.push(session);
            if (isTaskRunning(toTask)) toTask.state = TaskState.active;
          }
        });
      },
    })),
    withHooks({
      onInit(store) {
        const storedTasks = localStorage.getItem('tasks') ?? JSON.stringify(store.tasks());
        const parsedTasks = JSON.parse(storedTasks);
        const tasksToLoad = fromStoredTasks(parsedTasks);
        store.loadTasks(tasksToLoad);
        effect(() => {
          localStorage.setItem('tasks', JSON.stringify(store.tasks()));
        });
      },
    }),
  );
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withTheme(),
  withRouter(),
  withTasks(),
  withComputed((store) => {
    // Params
    const decodedFilterParams = computed(() => decodeFilterMatrixParams(store.queryParams() ?? {}));
    const decodedRouteParams = computed(() => decodeRouteParams(store.routeParams() ?? {}));
    const filterFrom = computed(() => decodedFilterParams().from);
    const filterTo = computed(() => decodedFilterParams().to);
    const currentTaskId = computed(() => decodedRouteParams().taskId);
    const currentTaskState = computed(() => decodedRouteParams().state);

    // Tasks
    const allTasks = computed(() => Object.values(store.tasks()));
    const currentTasks = computed(() => {
      const tasks = allTasks();
      const filterParams = {
        ...decodedFilterParams(),
        state: currentTaskState(),
      };
      return filterTasks(filterParams, tasks);
    });
    const currentTask = computed(() => {
      const taskId = currentTaskId();
      const from = filterFrom();
      const to = filterTo();
      if (!taskId) return;
      const maybeTask = store.tasks()[taskId];
      if (!maybeTask) return;
      return sortTaskSessions(filterTaskSessions(maybeTask, { from, to }));
    });
    const filterChartData = computed(() => chartSeries(allTasks()));
    const currentTaskIndex = computed(() => currentTasks().findIndex(({ id }) => id === currentTask()?.id) ?? -1);
    const nextTaskId = computed(() => {
      const tasks = currentTasks();
      const currentIndex = currentTaskIndex();
      if (!tasks.length) return;
      const nextTaskIndex = currentIndex >= tasks.length - 1 ? 0 : currentIndex + 1;
      return tasks[nextTaskIndex]?.id;
    });
    const prevTaskId = computed(() => {
      const tasks = currentTasks();
      const currentIndex = currentTaskIndex();
      if (!tasks.length) return;
      const prevTaskIndex = currentIndex <= 0 ? tasks.length - 1 : currentIndex - 1;
      return tasks[prevTaskIndex]?.id;
    });
    const isCurrentTaskOpened = computed(() => !!currentTask());
    const isAnyTaskActive = computed(() => allTasks().some(isTaskRunning));

    // Filter
    const filterRange = computed(() => [filterFrom() ?? null, filterTo() ?? null] as const);

    return {
      decodedFilterParams,
      decodedRouteParams,
      filterFrom,
      filterTo,
      currentTaskId,
      currentTaskState,
      allTasks,
      currentTasks,
      currentTask,
      filterChartData,
      currentTaskIndex,
      nextTaskId,
      prevTaskId,
      isCurrentTaskOpened,
      isAnyTaskActive,
      filterRange,
    };
  }),
  withMethods((store) => ({
    taskById: (taskId: string) => computed(() => store.tasks()[taskId]),
  })),
);
