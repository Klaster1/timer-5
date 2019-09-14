import {createReducer, Action, on} from '@ngrx/store'
import * as actions from './actions'
import {StoreState} from '@app/types'
import {fromEntries} from '@app/utils'

export function tasks(state: StoreState['tasks'], action: Action) {
    return createReducer<StoreState['tasks']>(
        {},
        on(actions.task, (state, action) => ({
            ...state,
            [action.task.id]: action.task
        })),
        on(actions.tasks, (state, action) => fromEntries(action.tasks.map(t => [t.id, t]))),
        on(actions.renameTask, (state, action) => ({
            ...state,
            [action.taskId]: {
                ...state[action.taskId],
                name: action.name
            }
        })),
        on(actions.deleteTask, (state, action) => fromEntries(Object.entries(state).filter(e => e[1].id !== action.taskId))),
        on(actions.changeTaskState, (state, action) => fromEntries(Object.entries(state).map(e => e[1].id === action.taskId ? [e[0], {...e[1], state: action.state}] : e)))
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