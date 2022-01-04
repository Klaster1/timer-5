import { isTruthy } from '@app/utils/assert';
import { Session, Task, TaskState } from '.';
import { assertNever } from './assert-never';
import { StoreState } from './store';

type AppTasks = StoreState['tasks'];
type StoredSession = Session;
enum StoredTaskState {
  active,
  finished,
  dropped,
}
type StoredTask = {
  id: string;
  name: string;
  state: StoredTaskState;
  sessions: StoredSession[];
};
type StoredTasks = {
  version: 1;
  value: StoredTask[];
};
const appTaskStateToStoredTaskState = (state: TaskState): StoredTaskState => {
  switch (state) {
    case TaskState.active:
      return StoredTaskState.active;
    case TaskState.dropped:
      return StoredTaskState.dropped;
    case TaskState.finished:
      return StoredTaskState.finished;
    default:
      return assertNever(state);
  }
};
const storedTaskStateToAppTaskState = (state: StoredTaskState): TaskState => {
  switch (state) {
    case StoredTaskState.active:
      return TaskState.active;
    case StoredTaskState.dropped:
      return TaskState.dropped;
    case StoredTaskState.finished:
      return TaskState.finished;
    default:
      return assertNever(state);
  }
};
// TODO: remopve id from sessions
const appSessionToStoredSession = (session: Session): StoredSession => session;
const storedSessionToAppSession = (storedSession: StoredSession): Session => storedSession;

export const toStoredTasks = (appTasks: AppTasks): StoredTasks => ({
  version: 1,
  value: appTasks.ids
    .map((id) => {
      const task = appTasks.values[id];
      if (!task) return null;
      return {
        id,
        name: task.name,
        state: appTaskStateToStoredTaskState(task.state),
        sessions: task.sessions.map(appSessionToStoredSession),
      };
    })
    .filter(isTruthy),
});

export const fromStoredTasks = (storedTasks: StoredTasks): AppTasks => {
  switch (storedTasks.version) {
    case 1: {
      const tasks: Task[] = storedTasks.value.map((task) => ({
        id: task.id,
        name: task.name,
        state: storedTaskStateToAppTaskState(task.state),
        sessions: task.sessions,
      }));
      return {
        ids: tasks.map(({ id }) => id),
        values: Object.fromEntries(tasks.map((task) => [task.id, task] as const)),
      };
    }
    default:
      return assertNever(storedTasks.version);
  }
};
