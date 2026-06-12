import { computed, DestroyRef, effect, inject, Service, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { fromStoredTasks, toStoredTasks } from '@app/domain/storage';
import {
  isSessionWithId,
  isTaskRunning,
  makeTaskId,
  Session,
  SessionId,
  Task,
  TaskState,
} from '@app/domain/task';
import { RoutedDialogs } from '@app/providers/routed-dialogs';
import { deepEquals } from '@app/utils/assert';
import { Draft, produce } from 'immer';

export type NormalizedTasks = { [id: string]: Task };

export type ThemeMode = 'auto' | 'manual';
export type ThemeVariant = 'light' | 'dark';
export type Theme = {
  mode: ThemeMode;
  variant: ThemeVariant;
};

type AppState = {
  tasks: NormalizedTasks;
  theme: Theme | undefined;
};

const initialState: AppState = {
  tasks: {},
  theme: { mode: 'auto', variant: 'light' },
};

const prefersDarkMode = () => window.matchMedia(`(prefers-color-scheme: dark)`).matches;

@Service()
export class AppStore {
  private readonly router = inject(Router);
  private readonly routedDialogs = inject(RoutedDialogs);
  private readonly destroy = new AbortController();

  private readonly state = signal<AppState>(initialState);

  readonly tasks = computed(() => this.state().tasks);
  readonly theme = computed(() => this.state().theme);
  readonly allTasks = computed(() => Object.values(this.tasks()));
  readonly isAnyTaskActive = computed(() => this.allTasks().some(isTaskRunning));

  constructor() {
    inject(DestroyRef).onDestroy(() => this.destroy.abort());
    this.initTheme();
    this.initTasks();
  }

  private update(recipe: (draft: Draft<AppState>) => void): void {
    this.state.update((state) => produce(state, recipe));
  }

  private initTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    try {
      const parsedTheme = storedTheme ? JSON.parse(storedTheme) : null;
      const theme = typeof parsedTheme === 'object' && parsedTheme ? parsedTheme : initialState.theme;
      this.setTheme(theme);
    } catch (e) {
      if (initialState.theme) this.setTheme(initialState.theme);
    }
    effect(() => {
      const theme = this.theme();
      if (theme) localStorage.setItem('theme', JSON.stringify(theme));
    });
    for (const variant of ['light', 'dark'] as const) {
      const mediaQuery = window.matchMedia(`(prefers-color-scheme: ${variant})`);
      if (mediaQuery.matches && this.theme()?.mode === 'auto') this.setTheme({ mode: 'auto', variant });
      mediaQuery.addEventListener(
        'change',
        (event) => {
          const currentTheme = this.theme();
          if (!currentTheme || currentTheme.mode !== 'auto' || !event.matches) return;
          this.setTheme({ mode: 'auto', variant });
        },
        { signal: this.destroy.signal },
      );
    }
    effect(() => {
      const theme = this.theme();
      if (theme) document.body.classList.toggle('theme-dark', theme.variant === 'dark');
    });
  }

  private initTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      const tasksToLoad = fromStoredTasks(parsedTasks);
      this.loadTasks(tasksToLoad);
    }
    effect(() => {
      localStorage.setItem('tasks', JSON.stringify(toStoredTasks(this.tasks())));
    });
  }

  setTheme(theme: Theme): void {
    this.update((draft) => {
      draft.theme = {
        mode: theme.mode,
        variant: theme.mode === 'auto' ? (prefersDarkMode() ? 'dark' : 'light') : theme.variant,
      };
    });
  }

  taskById(taskId: string): Signal<Task | undefined> {
    return computed(() => this.tasks()[taskId]);
  }

  getSessionAtIndex(taskId: string, sessionIndex: number): Signal<Session | undefined> {
    return computed(() => this.tasks()[taskId]?.sessions[sessionIndex]);
  }

  renameTask(taskId: string, name: string): void {
    this.update((draft) => {
      const task = draft.tasks[taskId];
      if (task) task.name = name;
    });
    this.routedDialogs.close();
  }

  deleteTask(taskIdToRemove: string): void {
    this.update((draft) => {
      delete draft.tasks[taskIdToRemove];
    });
    // Re-run guards on the current URL; taskExistsGuard closes the detail pane if its task is gone
    this.router.navigateByUrl(this.router.url, { onSameUrlNavigation: 'reload' });
  }

  editSession(taskId: string, sessionIndex: number, updatedSession: Session): void {
    this.update((draft) => {
      const task = draft.tasks[taskId];
      if (!task) return;
      task.sessions.splice(sessionIndex, 1, updatedSession);
    });
    this.routedDialogs.close();
  }

  splitSession(taskId: string, sessionIndex: number, updatedSessions: Session[]): void {
    this.update((draft) => {
      const task = draft.tasks[taskId];
      if (!task) return;
      task.sessions.splice(sessionIndex, 1, ...updatedSessions);
    });
    this.routedDialogs.close();
  }

  createTask(name: string): void {
    const taskId = makeTaskId();
    this.update((draft) => {
      draft.tasks[taskId] = { id: taskId, name, sessions: [], state: TaskState.active };
    });
    this.router.navigate(['/', { outlets: { dialog: null, primary: ['active', taskId] } }]);
  }

  stopTask(taskId: string, timestamp: number): void {
    this.update((draft) => {
      const task = draft.tasks[taskId];
      const sessions = task?.sessions;
      const session = sessions?.find((session) => typeof session.end !== 'number');
      if (!task || !sessions || !session) return;
      task.sessions.splice(task.sessions.indexOf(session), 1, { start: session.start, end: timestamp });
    });
  }

  deleteSession(taskId: string, sessionId: SessionId): void {
    this.update((draft) => {
      const task = draft.tasks[taskId];
      const sessions = task?.sessions;
      const session = sessions?.find((session) => isSessionWithId(sessionId)(session));
      if (!task || !sessions || !session) return;
      task.sessions.splice(task.sessions.indexOf(session), 1);
    });
  }

  loadTasks(tasks: NormalizedTasks): void {
    this.update((draft) => {
      draft.tasks = tasks;
    });
  }

  updateTaskState(taskId: string, state: TaskState): void {
    this.update((draft) => {
      const task = draft.tasks[taskId];
      if (task) task.state = state;
    });
  }

  startTask(taskId: string, timestamp: number): void {
    this.update((draft) => {
      const task = draft.tasks[taskId];
      if (task) {
        task.state = TaskState.active;
        task.sessions.push({ start: timestamp, end: undefined });
      }
    });
  }

  moveSessionToTask(fromTaskId: string, toTaskId: string, session: Session): void {
    this.update((draft) => {
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
  }
}
