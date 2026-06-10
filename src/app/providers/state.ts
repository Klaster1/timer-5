import { computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { fromStoredTasks, toStoredTasks } from '@app/domain/storage';
import {
  Session,
  SessionId,
  Task,
  TaskState,
  isSessionWithId,
  isTaskRunning,
  makeTaskId,
} from '@app/domain/task';
import { RoutedDialogs } from '@app/providers/routed-dialogs';
import { deepEquals } from '@app/utils/assert';
import {
  WritableStateSource,
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

const updateState = <State extends object>(store: WritableStateSource<State>, recipe: (draft: Draft<State>) => any) => {
  patchState(store, (state) => produce(state, recipe));
};

export type ThemeMode = 'auto' | 'manual';
export type ThemeVariant = 'light' | 'dark';
export type Theme = {
  mode: ThemeMode;
  variant: ThemeVariant;
};

const withTheme = () => {
  type ThemeState = {
    theme: Theme | undefined;
  };
  const initialState: ThemeState = {
    theme: { mode: 'auto', variant: 'light' },
  };
  const prefersDarkMode = () => window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const destroySignal = new AbortController();
  return signalStoreFeature(
    withState<ThemeState>(initialState),
    withMethods((store) => {
      return {
        setTheme(theme: Theme) {
          updateState(store, (draft) => {
            draft.theme = {
              mode: theme.mode,
              variant: theme.mode === 'auto' ? (prefersDarkMode() ? 'dark' : 'light') : theme.variant,
            };
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
        for (const theme of ['light', 'dark'] as const) {
          const mediaQuery = window.matchMedia(`(prefers-color-scheme: ${theme})`);
          if (mediaQuery.matches && store.theme()?.mode === 'auto') store.setTheme({ mode: 'auto', variant: theme });
          mediaQuery.addEventListener(
            'change',
            (event) => {
              const currentTheme = store.theme();
              if (!currentTheme || currentTheme.mode !== 'auto' || !event.matches) return;
              store.setTheme({ mode: 'auto', variant: theme });
            },
            { signal: destroySignal.signal },
          );
        }
        effect(() => {
          const theme = store.theme();
          if (theme) document.body.classList.toggle('theme-dark', theme.variant === 'dark');
        });
      },
      onDestroy() {
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
  { providedIn: 'root', protectedState: false },
  withTheme(),
  withState<TasksState>(initialState),
  withComputed((store) => {
    const allTasks = computed(() => Object.values(store.tasks()));
    const isAnyTaskActive = computed(() => allTasks().some(isTaskRunning));
    return { allTasks, isAnyTaskActive };
  }),
  withMethods((store) => {
    const router = inject(Router);
    const routedDialogs = inject(RoutedDialogs);
    const taskById = (taskId: string) => computed(() => store.tasks()[taskId]);
    const getSessionAtIndex = (taskId: string, sessionIndex: number) =>
      computed(() => {
        const task = store.tasks()[taskId];
        return task?.sessions[sessionIndex];
      });
    const renameTask = (taskId: string, name: string) => {
      updateState(store, (draft) => {
        const task = draft.tasks[taskId];
        if (task) task.name = name;
      });
      routedDialogs.close();
    };
    const deleteTask = (taskIdToRemove: string) => {
      updateState(store, (draft) => {
        delete draft.tasks[taskIdToRemove];
      });
      // Re-run guards on the current URL; taskExistsGuard closes the detail pane if its task is gone
      router.navigateByUrl(router.url, { onSameUrlNavigation: 'reload' });
    };
    const editSession = (taskId: string, sessionIndex: number, updatedSession: Session) => {
      updateState(store, (draft) => {
        const task = draft.tasks[taskId];
        if (!task) return;
        task.sessions.splice(sessionIndex, 1, updatedSession);
      });
      routedDialogs.close();
    };
    const splitSession = (taskId: string, sessionIndex: number, updatedSessions: Session[]) => {
      updateState(store, (draft) => {
        const task = draft.tasks[taskId];
        if (!task) return;
        task.sessions.splice(sessionIndex, 1, ...updatedSessions);
      });
      routedDialogs.close();
    };
    const createTask = (name: string): void => {
      const taskId = makeTaskId();
      updateState(store, (draft) => {
        draft.tasks[taskId] = { id: taskId, name, sessions: [], state: TaskState.active };
      });
      router.navigate(['/', { outlets: { dialog: null, primary: ['active', taskId] } }]);
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
