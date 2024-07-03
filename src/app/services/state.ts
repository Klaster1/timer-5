import { DestroyRef, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Prompt } from '@app/dialog-prompt/dialog-prompt.service';
import { chartSeries } from '@app/domain/chart';
import { decodeFilterMatrixParams, decodeRouteParams } from '@app/domain/router';
import { fromStoredTasks, toStoredTasks } from '@app/domain/storage';
import {
  Session,
  SessionId,
  Task,
  TaskState,
  filterTaskSessions,
  filterTasks,
  isSessionWithId,
  isTaskRunning,
  makeTaskId,
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

export type NormalizedTasks = { [id: string]: Task };

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
              updateState(store, (draft) => {
                const route = router.routerState.snapshot.root;
                draft.router = {
                  url: route?.url,
                  params: route?.params,
                  queryParams: route?.queryParams,
                  firstChild: route?.children.at(0),
                };
              });
            }
          });
        },
      };
    }),
    withComputed((store) => {
      const currentRoute = computed(() => {
        const rootRoute = store.router();
        if (!rootRoute) return;
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

export type ThemeMode = 'auto' | 'manual';
export type ThemeVariant = 'light' | 'dark';
export type Theme = {
  selectedMode: ThemeMode;
  currentVariant: ThemeVariant;
};
const withTheme = () => {
  type ThemeState = {
    theme: Theme | undefined;
  };
  const initialState: ThemeState = {
    theme: { selectedMode: 'auto', currentVariant: 'light' },
  };
  const destroySignal = new AbortController();
  return signalStoreFeature(
    withState<ThemeState>(initialState),
    withMethods((store) => {
      return {
        setTheme(theme: Theme) {
          updateState(store, (draft) => {
            draft.theme = theme;
          });
        },
      };
    }),
    withHooks({
      onInit(store) {
        {
          const storedTheme = localStorage.getItem('theme');
          try {
            const parsedTheme = storedTheme ? JSON.parse(storedTheme) : null;
            const theme = typeof parsedTheme === 'object' && parsedTheme ? parsedTheme : initialState.theme;
            store.setTheme(theme);
          } catch (e) {
            if (initialState.theme) store.setTheme(initialState.theme);
          }
        }
        effect(() => {
          const theme = store.theme();
          if (theme) localStorage.setItem('theme', JSON.stringify(store.theme()));
        });
        window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(
          'change',
          (event) => {
            const theme = store.theme();
            if (!theme || theme.selectedMode !== 'auto') return;
            store.setTheme({ selectedMode: 'auto', currentVariant: event.matches ? 'dark' : 'light' });
          },
          {
            signal: destroySignal.signal,
          },
        );
        effect(() => {
          const theme = store.theme();
          if (theme) document.body.classList.toggle('theme-dark', theme.currentVariant === 'dark');
        });
      },
      onDestroy(store) {
        destroySignal.abort();
      },
    }),
  );
};

type TasksState = {
  tasks: NormalizedTasks;
};
const initialState: TasksState = {
  tasks: {},
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withTheme(),
  withRouter(),
  withState<TasksState>(initialState),
  withComputed((store) => {
    // Params
    const decodedFilterParams = computed(() => decodeFilterMatrixParams(store.queryParams() ?? {}));
    const decodedRouteParams = computed(() => decodeRouteParams(store.routeParams() ?? {}));
    const filterFrom = computed(() => decodedFilterParams().from);
    const filterTo = computed(() => decodedFilterParams().to);
    const currentTaskId = computed(() => decodedRouteParams().taskId);
    const currentSessionIndex = computed(() => store.routeParams()?.sessionIndex);
    const currentTaskState = computed(() => decodedRouteParams().state);

    // Tasks
    const allTasks = computed(() => Object.values(store.tasks()));
    const taskFilterParams = computed(
      () => ({
        ...decodedFilterParams(),
        state: currentTaskState(),
      }),
      { equal: deepEquals },
    );
    const currentTasks = computed(() => {
      return filterTasks(taskFilterParams(), allTasks());
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
    const filterChartData = computed(() => chartSeries(allTasks(), currentTasks()));
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
    const sessionAtRoute = computed(() => {
      const task = currentTask();
      const sessionIndex = currentSessionIndex();
      if (!task || typeof sessionIndex !== 'string') return;
      return task.sessions[Number(sessionIndex)];
    });

    // Filter
    const filterRange = computed(() => [filterFrom() ?? null, filterTo() ?? null] as const);

    return {
      decodedFilterParams,
      decodedRouteParams,
      filterFrom,
      filterTo,
      currentTaskId,
      currentSessionIndex,
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
      sessionAtRoute,
    };
  }),
  withMethods((store) => {
    const prompt = inject(Prompt);
    const router = inject(Router);
    const dialog = inject(MatDialog);

    const taskById = (taskId: string) => computed(() => store.tasks()[taskId]);
    const renameTask = async (taskId: string, name: string) => {
      updateState(store, (draft) => {
        const task = draft.tasks[taskId];
        if (task) task.name = name;
      });
    };
    const getSessionAtIndex = (taskId: string, sessionIndex: number) =>
      computed(() => {
        const task = store.tasks()[taskId];
        return task?.sessions[sessionIndex];
      });
    const deleteTask = (taskIdToRemove: string) => {
      updateState(store, (draft) => {
        delete draft.tasks[taskIdToRemove];
      });
      const state = store.currentTaskState();
      const taskId = store.currentTaskId();
      if (taskIdToRemove === taskId && state) router.navigate([state], { queryParamsHandling: 'merge' });
    };
    const editSession = async (taskId: string, sessionIndex: number, updatedSession: Session) => {
      updateState(store, (draft) => {
        const task = draft.tasks[taskId];
        if (!task) return;
        task.sessions.splice(sessionIndex, 1, updatedSession);
      });
    };
    const splitSession = (taskId: string, sessionId: SessionId) => {};
    const createTask = async () => {
      const name = await prompt.prompt('Create task', '', 'Task name');
      if (!name) return;
      const taskId = makeTaskId();
      updateState(store, (draft) => {
        draft.tasks[taskId] = { id: taskId, name, sessions: [], state: TaskState.active };
      });
      router.navigate([store.currentTaskState() === 'all' ? 'all' : 'active', taskId]);
    };
    return {
      stopTask(taskId: string, timestamp: number) {
        updateState(store, (draft) => {
          const task = draft.tasks[taskId];
          const sessions = task?.sessions;
          const session = sessions?.find((session) => typeof session.end !== 'number');
          if (!task || !sessions || !session) return;
          task.sessions.splice(task.sessions.indexOf(session), 1, { start: session.start, end: timestamp });
        });
      },

      deleteSession(taskId: string, sessionId: SessionId) {
        updateState(store, (draft) => {
          const task = draft.tasks[taskId];
          const sessions = task?.sessions;
          const session = sessions?.find((session) => isSessionWithId(sessionId)(session));
          if (!task || !sessions || !session) return;
          task.sessions.splice(task.sessions.indexOf(session), 1);
        });
      },

      loadTasks(tasks: NormalizedTasks) {
        updateState(store, (draft) => {
          draft.tasks = tasks;
        });
      },

      updateTaskState(taskId: string, state: TaskState) {
        updateState(store, (draft) => {
          const task = draft.tasks[taskId];
          if (task) task.state = state;
        });
      },

      startTask(taskId: string, timestamp: number) {
        updateState(store, (draft) => {
          const task = draft.tasks[taskId];
          if (task) {
            task.state = TaskState.active;
            task.sessions.push({ start: timestamp, end: undefined });
          }
        });
      },

      moveSessionToTask(fromTaskId: string, toTaskId: string, session: Session) {
        updateState(store, (draft) => {
          const fromTask = draft.tasks[fromTaskId];
          const toTask = draft.tasks[toTaskId];
          if (fromTask && toTask) {
            const indexToRemove = fromTask.sessions.findIndex((s) => deepEquals(s, session));
            if (indexToRemove === -1) return;
            fromTask.sessions.splice(indexToRemove, 1);
            toTask.sessions.push(session);
            if (isTaskRunning(toTask)) toTask.state = TaskState.active;
          }
        });
      },
      taskById,
      deleteTask,
      renameTask,
      editSession,
      splitSession,
      createTask,
      getSessionAtIndex,
    };
  }),
  withHooks({
    onInit(store) {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        const tasksToLoad = fromStoredTasks(parsedTasks);
        store.loadTasks(tasksToLoad);
      }
      effect(() => {
        localStorage.setItem('tasks', JSON.stringify(toStoredTasks(store.tasks())));
      });
    },
  }),
);
