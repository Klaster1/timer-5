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

export type StatsParams = {
  timelineStep: 'year' | 'month' | 'week' | 'day' | 'hour';
};
export type Stats = {
  top10: { name: string; id: string; duration: number }[];
  today: {
    duration: number;
    diff: number;
  };
  thisWeek: {
    duration: number;
    diff: number;
  };
  thisYear: {
    duration: number;
    diff: number;
  };
  timeline: {
    barWidthInMs: number;
    bars: Map<number, { start: Date; end: Date; tasks: Set<Task['id']>; duration: number }>;
    chartjsData: any;
    uPlotData: number[][];
  };
};
