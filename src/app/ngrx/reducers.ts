import { StoreState, Task, TaskState } from '@app/types';
import { routerReducer } from '@ngrx/router-store';
import { Action, on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import {
  createTask,
  deleteSession,
  deleteTask,
  loadTasks,
  renameTask,
  startTask,
  stopTask,
  updateSession,
  updateTaskState,
  updateTheme,
} from './actions';

function tasks(state: StoreState['tasks'] | undefined, action: Action) {
  const sessions = createImmerReducer<Task['sessions']>(
    [],
    on(startTask, (state, action) => {
      state.push({ start: action.timestamp });
      return state;
    }),
    on(stopTask, (state, action) => {
      state.forEach((session) => {
        if (typeof session.end !== 'number') session.end = action.timestamp;
      });
      return state;
    }),
    on(updateSession, (state, action) => {
      const session = state[action.sessionIndex];
      if (session) {
        session.start = action.start;
        session.end = action.end;
      }
      return state;
    }),
    on(deleteSession, (state, action) => {
      state.splice(action.sessionIndex, 1);
      return state;
    })
  );

  const tasks = createImmerReducer<StoreState['tasks']>(
    { ids: [], values: {} },
    on(loadTasks, (store, action) => action.data),
    on(createTask, (state, action) => {
      state.ids.push(action.taskId);
      state.values[action.taskId] = { id: action.taskId, name: action.name, sessions: [], state: TaskState.active };
      return state;
    }),
    on(renameTask, (state, action) => {
      const task = state.values[action.taskId];
      if (task) task.name = action.name;
      return state;
    }),
    on(updateTaskState, (state, action) => {
      const task = state.values[action.taskId];
      if (task) task.state = action.state;
      return state;
    }),
    on(deleteTask, (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.taskId);
      delete state.values[action.taskId];
      return state;
    }),
    on(startTask, (state, action) => {
      const task = state.values[action.taskId];
      if (task) task.state = TaskState.active;
      return state;
    }),
    on(startTask, stopTask, updateSession, deleteSession, (state, action) => {
      const task = state.values[action.taskId];
      if (task) task.sessions = sessions(task.sessions, action);
      return state;
    })
  );

  return tasks(state, action);
}

const theme = createImmerReducer<StoreState['theme']>(
  'dark',
  on(updateTheme, (state, action) => action.theme)
);

export const combinedReducers = {
  tasks,
  router: routerReducer,
  theme,
};
