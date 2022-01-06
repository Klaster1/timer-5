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
    on(actions.loadTasks, (store, action) => action.data),
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
    on(actions.renameTask, (state, action) => {
      const task = state.values[action.taskId];
      return task ? { ...state, values: { ...state.values, [action.taskId]: { ...task, name: action.name } } } : state;
    }),
    on(actions.updateTaskState, (state, action) => {
      const task = state.values[action.taskId];
      return task
        ? { ...state, values: { ...state.values, [action.taskId]: { ...task, state: action.state } } }
        : state;
    }),
    on(actions.deleteTask, (s, a) => ({
      ids: s.ids.filter((id) => id !== a.taskId),
      values: fromEntries(Object.entries(s.values).filter(([id]) => id !== a.taskId)),
    })),
    on(actions.startTask, actions.stopTask, actions.updateSession, actions.deleteSession, (s, a) => {
      const task = s.values[a.taskId];
      if (!task) return s;
      const updatedTask = {
        ...task,
        sessions: sessions(task.sessions, a),
      };
      return {
        ...s,
        values: {
          ...s.values,
          [a.taskId]: updatedTask,
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
