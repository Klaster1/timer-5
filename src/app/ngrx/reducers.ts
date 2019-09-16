import {routerReducer} from '@ngrx/router-store'
import {createReducer, Action, on} from '@ngrx/store'
import * as actions from './actions'
import {StoreState, TaskWithId} from '@app/types'
import {fromEntries} from '@app/utils/from-entries'

export function tasks(state: StoreState['tasks'], action: Action) {
    return createReducer<StoreState['tasks']>(
        {},
        on(actions.logout, (state, action) => ({})),
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
        on(actions.changeTaskState, (state, action) => fromEntries(Object.entries(state).map(e => e[1].id === action.taskId ? [e[0], {...e[1], state: action.state}] : e))),
        on(actions.sessionStart, (state, action) => fromEntries(Object.entries(state).map(([id, task]) => [id, action.taskId === id ? {
            ...task,
            lastSession: {id: action.sessionId, start: action.timestamp}
        } : task]))),
        on(actions.sessionStop, (state, action) => fromEntries(Object.entries(state).map(([id, task]) => [id, action.taskId === id ? {
            ...task,
            completeSessionsDuration: task.completeSessionsDuration + (action.timestamp - task.lastSession.start),
            lastSession: {...task.lastSession, end: action.timestamp}
        } : task])))
    )(state, action)
}

export function sessions(state: StoreState['sessions'], action: Action) {
    return createReducer<typeof state>(
        {},
        on(actions.sessionStart, (state, action) => ({
            ...state, 
            [action.sessionId]: {
                userId: action.userId,
                taskId: action.taskId,
                id: action.sessionId,
                start: action.timestamp
            }
        })),
        on(actions.sessionStop, (state, action) => ({
            ...state,
            [action.sessionId]: {
                ...state[action.sessionId],
                end: action.timestamp
            }
        }))
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
    tasks,
    sessions,
    router: routerReducer
}