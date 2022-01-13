import { StoreState } from '@app/domain/storage';
import { Session, SessionId, TaskId, TaskState } from '@app/domain/task';
import { createAction, props } from '@ngrx/store';

// Task
export const loadTasks = createAction('[Tasks] Load', props<{ data: StoreState['tasks'] }>());
export const createTaskIntent = createAction('[Task] Create intent');
export const createTask = createAction('[Task] Create task', props<{ taskId: string; name: string }>());
export const renameTaskIntent = createAction('[Task] Rename intent', props<{ taskId: string }>());
export const renameTask = createAction('[Task] Rename', props<{ taskId: string; name: string }>());
export const updateTaskState = createAction('[Task] Update state', props<{ taskId: string; state: TaskState }>());
export const startTask = createAction('[Task] Start', props<{ taskId: string; timestamp: number }>());
export const stopTask = createAction('[Task] Stop', props<{ taskId: string; timestamp: number }>());
export const deleteTask = createAction('[Task] Delete', props<{ taskId: string }>());

// Session
export const updateSessionIntent = createAction(
  '[Session] Update intent',
  props<{ taskId: string; sessionId: SessionId }>()
);
export const updateSession = createAction(
  '[Session] Update',
  props<{
    taskId: string;
    sessionId: SessionId;
    start: number;
    end: Session['end'];
  }>()
);
export const deleteSession = createAction('[Session] Delete', props<{ taskId: string; sessionId: SessionId }>());
export const moveSessionToTask = createAction(
  '[Session] Move session to task',
  props<{ taskIdFrom: TaskId; taskIdTo: TaskId; session: Session }>()
);

// App
export const toggleTheme = createAction('[Theme] Update');
