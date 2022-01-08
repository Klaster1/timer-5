import { makeTaskId, Session, Task, TaskState } from '@app/domain/task';
import { assertNever, isNumber, isTruthy } from '@app/utils/assert';
import { RouterReducerState } from '@ngrx/router-store';
import millisecondsToSeconds from 'date-fns/millisecondsToSeconds';
import secondsToMilliseconds from 'date-fns/secondsToMilliseconds';
import { Seconds } from './date-time';

export interface StoreState {
  tasks: NormalizedTasks;
  router: RouterReducerState;
  theme: Theme;
}

export type Theme = 'light' | 'dark';
export type NormalizedTasks = { [id: string]: Task };

type AppTasks = StoreState['tasks'];
type StoredTasks = LegacyGames | StoredTasksV1;
type LatestStoredTasks = StoredTasksV1;

// Legacy
type LegacyGame = {
  id: string;
  state: 'active' | 'finished' | 'dropped' | 'hold' | 'wish';
  title: string;
  sessions: { start: number; stop: number }[];
};
type LegacyGames = LegacyGame[];
const fromLegacyGames = (data: LegacyGames): AppTasks => {
  const game = data[0];
  if (
    game &&
    (typeof game.id !== 'string' ||
      !['active', 'finished', 'dropped', 'hold', 'wish'].includes(game.state) ||
      typeof game.title !== 'string')
  ) {
    throw new Error('Invalid legacy format');
  } else {
    const tasks: Task[] = data.map((game) => ({
      id: makeTaskId(),
      name: game.title,
      state: (
        {
          active: TaskState.active,
          finished: TaskState.finished,
          dropped: TaskState.dropped,
          hold: TaskState.active,
          wish: TaskState.active,
        } as const
      )[game.state],
      sessions: game.sessions.map(
        (session): Session => ({
          start: session.start,
          end: isNumber(session.stop) ? session.stop : undefined,
        })
      ),
    }));
    return Object.fromEntries(tasks.map((task) => [task.id, task] as const));
  }
};

// V1
type StoredSessionV1 = [Seconds, Seconds] | [Seconds, null];
enum StoredTaskStateV1 {
  active,
  finished,
  dropped,
}
type StoredTaskV1 = {
  id: string;
  name: string;
  state: StoredTaskStateV1;
  sessions: StoredSessionV1[];
};
export type StoredTasksV1 = {
  version: 1;
  value: StoredTaskV1[];
};
const appTaskStateToStoredTaskStateV1 = (state: TaskState): StoredTaskStateV1 => {
  switch (state) {
    case TaskState.active:
      return StoredTaskStateV1.active;
    case TaskState.dropped:
      return StoredTaskStateV1.dropped;
    case TaskState.finished:
      return StoredTaskStateV1.finished;
    default:
      return assertNever(state);
  }
};
const storedTaskStateToAppTaskStateV1 = (state: StoredTaskStateV1): TaskState => {
  switch (state) {
    case StoredTaskStateV1.active:
      return TaskState.active;
    case StoredTaskStateV1.dropped:
      return TaskState.dropped;
    case StoredTaskStateV1.finished:
      return TaskState.finished;
    default:
      return assertNever(state);
  }
};

const appSessionToStoredSession = (session: Session): StoredSessionV1 => [
  millisecondsToSeconds(session.start),
  isNumber(session.end) ? millisecondsToSeconds(session.end) : null,
];
const storedSessionToAppSession = (storedSession: StoredSessionV1): Session =>
  storedSession[1] === null
    ? { start: secondsToMilliseconds(storedSession[0]) }
    : { start: secondsToMilliseconds(storedSession[0]), end: secondsToMilliseconds(storedSession[1]) };

export const toStoredTasks = (appTasks: AppTasks): LatestStoredTasks => ({
  version: 1,
  value: Object.keys(appTasks)
    .map((id) => {
      const task = appTasks[id];
      if (!task) return null;
      return {
        id,
        name: task.name,
        state: appTaskStateToStoredTaskStateV1(task.state),
        sessions: task.sessions.map(appSessionToStoredSession),
      };
    })
    .filter(isTruthy),
});

const fromStoredTasksV1 = (storedTasks: StoredTasksV1): AppTasks => {
  const tasks: Task[] = storedTasks.value.map((task) => ({
    id: task.id,
    name: task.name,
    state: storedTaskStateToAppTaskStateV1(task.state),
    sessions: task.sessions.map(storedSessionToAppSession),
  }));
  return Object.fromEntries(tasks.map((task) => [task.id, task] as const));
};

// Public

export const fromStoredTasks = (storedTasks: StoredTasks): AppTasks => {
  if (Array.isArray(storedTasks)) {
    return fromLegacyGames(storedTasks);
  }
  switch (storedTasks.version) {
    case 1:
      return fromStoredTasksV1(storedTasks);
    default:
      return assertNever(storedTasks.version);
  }
};
