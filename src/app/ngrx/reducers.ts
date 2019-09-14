import {createReducer, Action, on} from '@ngrx/store'
import {task, createTask} from './actions'
import {StoreState} from '@app/types'

export function tasks(state: StoreState['tasks'], action: Action) {
    return createReducer<StoreState['tasks']>(
        {},
        on(task, (state, action) => ({
            ...state,
            [action.task.id]: action.task
        })),
    )(state, action)
}