export enum TaskState {
  active = 'active',
  finished = 'finished',
  dropped = 'dropped',
}

export type RouteTaskState = TaskState | 'all';

type TaskId = string;

export type Task = {
  id: TaskId;
  name: string;
  state: TaskState;
  sessions: Session[];
};

export type Session = {
  id: string;
  start: number;
  end?: number;
};

export type Theme = 'light' | 'dark';

export type TimeSpanIndex = string[];

export type TaskIndexes = {
  year: TimeSpanIndex;
  yearMonth: TimeSpanIndex;
  yearMonthDate: TimeSpanIndex;
};

export type TasksFilterParams = { from?: Date; to?: Date; search?: string; taskId?: TaskId };

export type RangeWidth = 'hour' | 'day' | 'month' | 'year';

export type StatsParams = {
  timelineStep: RangeWidth;
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
    uPlotData: number[][];
  };
};
