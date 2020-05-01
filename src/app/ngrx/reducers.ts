import { routerReducer } from '@ngrx/router-store';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from './actions';
import { StoreState, Task, Session, TaskState } from '@app/types';
import { fromEntries } from '@app/utils/from-entries';
import { taskIndexes } from '@app/domain';

function tasks(state: StoreState['tasks'], action: Action) {
  const tasks = createReducer<StoreState['tasks']>(
    { ids: [], values: {} },
    on(actions.createTask, (s, a) => ({
      ids: [...s.ids, a.taskId],
      values: {
        ...s.values,
        [a.taskId]: {
          id: a.taskId,
          name: a.name,
          sessions: [],
          state: TaskState.ACTIVE,
        },
      },
    })),
    on(actions.renameTask, (s, a) => ({
      ...s,
      values: {
        ...s.values,
        [a.taskId]: { ...s.values[a.taskId], name: a.name },
      },
    })),
    on(actions.updateTaskState, (s, a) => ({
      ...s,
      values: {
        ...s.values,
        [a.taskId]: { ...s.values[a.taskId], state: a.state },
      },
    })),
    on(actions.deleteTask, (s, a) => ({
      ids: s.ids.filter((id) => id !== a.taskId),
      values: fromEntries(Object.entries(s.values).filter(([id]) => id !== a.taskId)),
    })),
    on(actions.startTask, actions.stopTask, actions.updateSession, actions.deleteSession, (s, a) => {
      const task = {
        ...s.values[a.taskId],
        sessions: sessions(s.values[a.taskId].sessions, a),
      };
      const indexes = taskIndexes(task);
      return {
        ...s,
        values: {
          ...s.values,
          [a.taskId]: { ...task, indexes },
        },
      };
    }),
    on(actions.moveSessionToTask, (s, a) => {
      const toTask = {
        ...s.values[a.toTaskId],
        sessions: [...s.values[a.toTaskId].sessions, s.values[a.taskId].sessions.find((s) => s.id === a.sessionId)!],
      };
      toTask.indexes = taskIndexes(toTask);
      const fromTask = {
        ...s.values[a.taskId],
        sessions: s.values[a.taskId].sessions.filter((s) => s.id !== a.sessionId),
      };
      fromTask.indexes = taskIndexes(fromTask);
      return {
        ...s,
        values: {
          ...s.values,
          [a.toTaskId]: toTask,
          [a.taskId]: fromTask,
        },
      };
    })
  );
  const sessions = createReducer<Task['sessions']>(
    [],
    on(actions.startTask, (s, a) => [...s, { id: a.sessionId, start: a.timestamp }]),
    on(actions.stopTask, (s, a) => s.map((s) => (!s.end ? { ...s, end: a.timestamp } : s))),
    on(actions.updateSession, (s, a) =>
      s.map((s) => (s.id === a.sessionId ? { ...s, start: a.start, end: a.end } : s))
    ),
    on(actions.deleteSession, (s, a) => s.filter((s) => s.id !== a.sessionId))
  );

  return tasks(state, action);
}

const theme = createReducer<StoreState['theme']>(
  'dark',
  on(actions.updateTheme, (s, a) => a.theme)
);

export const combinedReducers = {
  tasks,
  router: routerReducer,
  theme,
};
