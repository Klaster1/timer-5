import {createAction,props} from '@ngrx/store'
import {Task, User, TaskState, Session} from '@app/types'

export const createTask = createAction('[Task] Create task', props<{taskId: string, name: string}>())
export const renameTask = createAction('[Task] Rename', props<{taskId: string, name: string}>())
export const updateTaskState = createAction('[Task] Update state', props<{taskId: string, state: TaskState}>())
export const startTask = createAction('[Task] Start', props<{taskId: string, sessionId: string, timestamp: number}>())
export const stopTask = createAction('[Task] Stop', props<{taskId: string, timestamp: number}>())
export const deleteTask = createAction('[Task] Delete', props<{taskId: string}>())

export const updateSession = createAction('[Session] Update', props<{taskId: string, sessionId: string, start: number, end: Session['end']}>())
export const moveSessionToTask = createAction('[Session] Move to task', props<{taskId: string, toTaskId: string, sessionId: string}>())
export const deleteSession = createAction('[Session] Delete', props<{taskId: string, sessionId: string}>())