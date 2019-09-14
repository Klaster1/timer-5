import {createAction,props} from '@ngrx/store'
import {TaskWithId, User} from '@app/types'

export const createTask = createAction('[Task] Create task', props<{name: string}>())
export const task = createAction('[Task] Task', props<{task: TaskWithId}>())
export const user = createAction('[Auth] User', props<{user: User}>())