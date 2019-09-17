import {createAction,props} from '@ngrx/store'
import {TaskWithId, User, TaskState, SessionWithId} from '@app/types'

export const createTask = createAction('[Task] Create task', props<{name: string}>())
export const task = createAction('[Task] Task', props<{task: TaskWithId}>())
export const user = createAction('[Auth] User', props<{user: User}>())
export const logout = createAction('[Auth] Logout')
export const tasks = createAction('[Task] Tasks', props<{tasks: TaskWithId[]}>())
export const renameTask = createAction('[Task] Rename', props<{taskId: string, name: string}>())
export const deleteTask = createAction('[Task] Delete', props<{taskId: string}>())
export const changeTaskState = createAction('[Task] Change state', props<{taskId: string, state: TaskState}>())
export const startTask = createAction('[Task] Start', props<{taskId: string}>())
export const stopTask = createAction('[Task] Stop', props<{taskId: string}>())
export const sessionStart = createAction('[Session] Start', props<{userId: string, sessionId: string, taskId: string, timestamp: number}>())
export const sessionStop = createAction('[Session] Stop', props<{userId: string, sessionId: string, taskId: string, timestamp: number}>())
export const deleteSession = createAction('[Session] Delete', props<{taskId: string, sessionId: string}>())
export const editSession = createAction('[Session]', props<{taskId: string, sessionId: string, start?: number, end?: number}>())
export const moveSessionToTask = createAction('[Session]', props<{fromTaskId: string, toTaskId: string, sessionId: string}>())