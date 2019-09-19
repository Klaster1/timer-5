import {RouterReducerState} from '@ngrx/router-store'

export interface Task {
    id: string
    name: string
    state: TaskState
    sessions: Session[]
}

export interface Session {
    id: string
    start: number
    end?: number
}

export type TaskState = 'active' | 'done' | 'dropped' | 'on-hold' | 'to-do'

export type User = null | {
    id: string,
    photoURL?: string,
    email?: string
}

export interface StoreState {
    user: User,
    tasks: {
        ids: string[],
        values: {[id: string]: Task}
    },
    router: RouterReducerState
}