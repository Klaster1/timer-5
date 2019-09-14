import {createReducer, Action, on} from '@ngrx/store'
import * as actions from './actions'
import {StoreState} from '@app/types'

export function tasks(state: StoreState['tasks'], action: Action) {
    return createReducer<StoreState['tasks']>(
        {},
        on(actions.task, (state, action) => ({
            ...state,
            [action.task.id]: action.task
        })),
    )(state, action)
}

export function user(state: StoreState['user'], action: Action) {
    return createReducer<StoreState['user']>(
        null,
        on(actions.user, (state, action) => action.user),
    )(state, action)
}

export const combinedReducers = {
    user,
    tasks
}