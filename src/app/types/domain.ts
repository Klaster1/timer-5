export interface Task {
  id: string;
  name: string;
  indexes?: TaskIndexes;
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
  TO_DO = 'to-do',
}

export type User = null | {
  id: string;
  photoURL?: string;
  email?: string;
};

export type Theme = 'light' | 'dark';

export type TimeSpanIndex = string[];

export type TaskIndexes = {
  year: TimeSpanIndex;
  yearMonth: TimeSpanIndex;
  yearMonthDate: TimeSpanIndex;
};

export type TasksFilterParams = { from?: Date; to?: Date; search?: string };
