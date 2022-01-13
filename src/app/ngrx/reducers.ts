import { StoreState } from '@app/domain/storage';
import { isSessionWithId, isTaskRunning, Task, TaskState } from '@app/domain/task';
import { deepEquals } from '@app/utils/assert';
import { routerReducer } from '@ngrx/router-store';
import { Action, on } from '@ngrx/store';
import { createImmerReducer } from 'ngrx-immer/store';
import {
  createTask,
  deleteSession,
  deleteTask,
  loadTasks,
  moveSessionToTask,
  renameTask,
  startTask,
  stopTask,
  toggleTheme,
  updateSession,
  updateTaskState,
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
      const session = state.find(isSessionWithId(action.sessionId));
      if (session) {
        session.start = action.start;
        session.end = action.end;
      }
      return state;
    }),
    on(deleteSession, (state, action) => {
      const index = state.findIndex(isSessionWithId(action.sessionId));
      if (index !== -1) state.splice(index, 1);
      return state;
    })
  );

  const tasks = createImmerReducer<StoreState['tasks']>(
    {},
    on(loadTasks, (_store, action) => action.data),
    on(createTask, (state, action) => {
      state[action.taskId] = { id: action.taskId, name: action.name, sessions: [], state: TaskState.active };
      return state;
    }),
    on(renameTask, (state, action) => {
      const task = state[action.taskId];
      if (task) task.name = action.name;
      return state;
    }),
    on(updateTaskState, (state, action) => {
      const task = state[action.taskId];
      if (task) task.state = action.state;
      return state;
    }),
    on(deleteTask, (state, action) => {
      delete state[action.taskId];
      return state;
    }),
    on(startTask, (state, action) => {
      const task = state[action.taskId];
      if (task) task.state = TaskState.active;
      return state;
    }),
    on(moveSessionToTask, (state, action) => {
      const fromTask = state[action.taskIdFrom];
      const toTask = state[action.taskIdTo];
      if (fromTask && toTask) {
        fromTask.sessions = fromTask.sessions.filter((session) => !deepEquals(session, action.session));
        toTask.sessions.push(action.session);
        if (isTaskRunning(toTask)) toTask.state = TaskState.active;
      }
      return state;
    }),
    on(startTask, stopTask, updateSession, deleteSession, (state, action) => {
      const task = state[action.taskId];
      if (task) task.sessions = sessions(task.sessions, action);
      return state;
    })
  );

  return tasks(state, action);
}

const theme = createImmerReducer<StoreState['theme']>(
  'dark',
  on(toggleTheme, (state) => (state === 'dark' ? 'light' : 'dark'))
);

export const combinedReducers = {
  tasks,
  router: routerReducer,
  theme,
};
