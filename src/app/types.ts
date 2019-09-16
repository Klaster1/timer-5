import {RouterReducerState} from '@ngrx/router-store'

export interface Task {
    name: string
    state: TaskState
    completeSessionsDuration: number
    lastSession?: Omit<SessionWithId, 'userId'|'taskId'>
    userId: string
}

export interface Session {
    userId: string
    taskId: string
    start: number
    end?: number
}

export type TaskState = 'active' | 'done' | 'dropped' | 'on-hold' | 'to-do'

export type User = null | {
    id: string,
    photoURL?: string,
    email?: string
}

export type WithId<T> = T & {
    id: string
}

export type TaskWithId = WithId<Task>
export type SessionWithId = WithId<Session>

export interface StoreState {
    user: User | null,
    tasks: {[taskId: string]: TaskWithId},
    sessions: {[sessionId: string]: SessionWithId},
    router: RouterReducerState
}