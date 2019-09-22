import {RouterReducerState} from '@ngrx/router-store';

export interface Task {
    id: string;
    name: string;
    state: TaskState;
    sessions: Session[];
}

export interface Session {
    id: string;
    start: number;
    end?: number;
}

export enum TaskState {
    ACTIVE = 'active',
    DONE = 'done',
    DROPPED = 'dropped',
    ON_HOLD = 'on-hold',
    TO_DO = 'to-do'
}

export type User = null | {
    id: string,
    photoURL?: string,
    email?: string
};

export type Theme = 'light' | 'dark';

export interface StoreState {
    user: User;
    tasks: {
        ids: string[],
        values: {[id: string]: Task}
    };
    router: RouterReducerState;
    theme: Theme;
}
