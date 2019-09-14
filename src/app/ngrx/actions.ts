import {createAction,props} from '@ngrx/store'
import {TaskWithId} from '@app/types'

export const createTask = createAction('[Task] Create task', props<{name: string}>())
export const task = createAction('[Task] Task', props<{task: TaskWithId}>())