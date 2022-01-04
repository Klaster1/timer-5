import { StoreState, Task, TaskState } from '@app/types';
import { fromEntries } from '@app/utils/from-entries';
import { routerReducer } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './actions';

function tasks(state: StoreState['tasks'] | undefined, action: Action) {
  const sessions = createReducer<Task['sessions']>(
    [],
    on(actions.startTask, (s, a) => [...s, { id: a.sessionId, start: a.timestamp }]),
    on(actions.stopTask, (s, a) => s.map((s) => (!s.end ? { ...s, end: a.timestamp } : s))),
    on(actions.updateSession, (s, a) =>
      s.map((s) => (s.id === a.sessionId ? { ...s, start: a.start, end: a.end } : s))
    ),
    on(actions.deleteSession, (s, a) => s.filter((s) => s.id !== a.sessionId))
  );

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
          state: TaskState.active,
        },
      },
    })),
    on(actions.renameTask, (s, a) => {
      const task = s.values[a.taskId];
      return task ? { ...s, [a.taskId]: { ...task, name: a.name } } : s;
    }),
    on(actions.updateTaskState, (s, a) => {
      const task = s.values[a.taskId];
      return task ? { ...s, [a.taskId]: { ...task, name: a.state } } : s;
    }),
    on(actions.deleteTask, (s, a) => ({
      ids: s.ids.filter((id) => id !== a.taskId),
      values: fromEntries(Object.entries(s.values).filter(([id]) => id !== a.taskId)),
    })),
    on(actions.startTask, actions.stopTask, actions.updateSession, actions.deleteSession, (s, a) => {
      const task = s.values[a.taskId];
      if (!task) return s;
      const updatedTask = {
        ...s.values[a.taskId],
        sessions: sessions(task.sessions, a),
      };
      return {
        ...s,
        values: {
          ...s.values,
          [a.taskId]: { ...task },
        },
      };
    }),
    on(actions.moveSessionToTask, (s, a) => {
      const toTask = s.values[a.toTaskId];
      const fromTask = s.values[a.taskId];
      if (!toTask || !fromTask) return s;
      const toTaskUpdated = {
        ...toTask,
        sessions: [...toTask.sessions, ...fromTask.sessions.filter((s) => s.id === a.sessionId)],
      };
      const fromTaskUpdated = {
        ...fromTask,
        sessions: fromTask.sessions.filter((s) => s.id !== a.sessionId),
      };
      return {
        ...s,
        values: {
          ...s.values,
          [a.toTaskId]: toTaskUpdated,
          [a.taskId]: fromTaskUpdated,
        },
      };
    })
  );

  return tasks(state, action);
}

const theme = createReducer<StoreState['theme']>(
  'dark',
  on(actions.updateTheme, (_s, a) => a.theme)
);

export const combinedReducers = {
  tasks,
  router: routerReducer,
  theme,
};
