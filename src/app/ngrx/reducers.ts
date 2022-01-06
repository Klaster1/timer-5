import { StoreState, Task, TaskState } from '@app/types';
import { routerReducer } from '@ngrx/router-store';
import { Action, on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import * as actions from './actions';

function tasks(state: StoreState['tasks'] | undefined, action: Action) {
  const sessions = createImmerReducer<Task['sessions']>(
    [],
    on(actions.startTask, (state, action) => {
      state.push({ id: action.sessionId, start: action.timestamp });
      return state;
    }),
    on(actions.stopTask, (state, action) => {
      state.forEach((session) => {
        if (typeof session.end !== 'number') session.end = action.timestamp;
      });
      return state;
    }),
    on(actions.updateSession, (state, action) => {
      state.forEach((session) => {
        if (session.id === action.sessionId) {
          session.start = action.start;
          session.end = action.end;
        }
      });
      return state;
    }),
    on(actions.deleteSession, (state, action) => {
      return state.filter((session) => session.id !== action.sessionId);
    })
  );

  const tasks = createImmerReducer<StoreState['tasks']>(
    { ids: [], values: {} },
    on(actions.loadTasks, (store, action) => action.data),
    on(actions.createTask, (state, action) => {
      state.ids.push(action.taskId);
      state.values[action.taskId] = { id: action.taskId, name: action.name, sessions: [], state: TaskState.active };
      return state;
    }),
    on(actions.renameTask, (state, action) => {
      const task = state.values[action.taskId];
      if (task) task.name = action.name;
      return state;
    }),
    on(actions.updateTaskState, (state, action) => {
      const task = state.values[action.taskId];
      if (task) task.state = action.state;
      return state;
    }),
    on(actions.deleteTask, (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.taskId);
      delete state.values[action.taskId];
      return state;
    }),
    on(actions.startTask, actions.stopTask, actions.updateSession, actions.deleteSession, (state, action) => {
      const task = state.values[action.taskId];
      if (task) task.sessions = sessions(task.sessions, action);
      return state;
    })
  );

  return tasks(state, action);
}

const theme = createImmerReducer<StoreState['theme']>(
  'dark',
  on(actions.updateTheme, (state, action) => action.theme)
);

export const combinedReducers = {
  tasks,
  router: routerReducer,
  theme,
};
