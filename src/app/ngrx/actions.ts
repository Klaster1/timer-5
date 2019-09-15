import {createAction,props} from '@ngrx/store'
import {TaskWithId, User, TaskState} from '@app/types'

export const createTask = createAction('[Task] Create task', props<{name: string}>())
export const task = createAction('[Task] Task', props<{task: TaskWithId}>())
export const user = createAction('[Auth] User', props<{user: User}>())
export const logout = createAction('[Auth] Logout')
export const tasks = createAction('[Task] Tasks', props<{tasks: TaskWithId[]}>())
export const renameTask = createAction('[Task] Rename', props<{taskId: string, name: string}>())
export const deleteTask = createAction('[Task] Delete', props<{taskId: string}>())
export const changeTaskState = createAction('[Task] Change state', props<{taskId: string, state: TaskState}>())