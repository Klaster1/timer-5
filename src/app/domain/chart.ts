import { sessionDurationPure, Task, TaskId } from '@app/domain/task';
import { endOfDay } from 'date-fns/endOfDay';
import { millisecondsToSeconds } from 'date-fns/millisecondsToSeconds';
import { startOfDay } from 'date-fns/startOfDay';

export type ScaleRange = readonly [Date | null, Date | null];
type DateRange = [Date, Date];
export type ChartData = [number[], number[], number[]];

const generateRanges = (start: Date, end: Date): DateRange[] => {
  let rangeStart: Date = start;
  const result: DateRange[] = [];
  while (rangeStart.valueOf() < end.valueOf()) {
    const range: DateRange = [startOfDay(rangeStart), endOfDay(rangeStart)];
    result.push(range);
    rangeStart = new Date(range[1].valueOf() + 1);
  }
  return result;
};

const getEarliestSessionStart = (tasks: Task[]): number | undefined => {
  let earliest: number | undefined;
  for (const task of tasks) {
    for (const session of task.sessions) {
      if (earliest === undefined || session.start < earliest) earliest = session.start;
    }
  }
  return earliest;
};

type Bar = { start: Date; end: Date; tasks: Set<TaskId>; duration: number };
/** One bar per day, from the earliest session to today. Does not depend on the filter. */
export type ChartBars = readonly Bar[];

export const chartBars = (allTasks: Task[]): ChartBars => {
  const earliestStart = getEarliestSessionStart(allTasks);
  if (earliestStart === undefined) {
    return [];
  }
  const byDay = new Map(
    generateRanges(new Date(earliestStart), new Date()).map(([start, end]): [number, Bar] => [
      start.valueOf(),
      { start, end, tasks: new Set(), duration: 0 },
    ]),
  );
  for (const task of allTasks) {
    for (const session of task.sessions) {
      let start = session.start;
      let duration = sessionDurationPure(session);
      while (duration >= 10) {
        const bar = byDay.get(startOfDay(start).valueOf());
        if (!bar) {
          break;
        }
        const sliceDuration = Math.min(bar.end.valueOf(), session.end!) - Math.max(bar.start.valueOf(), start);
        bar.tasks.add(task.id);
        bar.duration += sliceDuration;
        duration -= sliceDuration;
        start = bar.end.valueOf() + 1;
      }
    }
  }
  return [...byDay.values()];
};

const includesAny = (ids: Set<TaskId>, wanted: Set<TaskId>): boolean => {
  for (const id of ids) {
    if (wanted.has(id)) return true;
  }
  return false;
};

/** Splits each bar's duration into the part with current tasks and the part without them. */
export const chartSeries = (bars: ChartBars, currentTasks: Task[]): ChartData => {
  const currentTaskIds = new Set(currentTasks.map((t) => t.id));
  const times: number[] = [];
  const current: number[] = [];
  const other: number[] = [];
  for (const bar of bars) {
    const duration = bar.duration;
    const isCurrent = includesAny(bar.tasks, currentTaskIds);
    times.push(millisecondsToSeconds(bar.start.valueOf()), millisecondsToSeconds(bar.end.valueOf()));
    current.push(isCurrent ? duration : 0, isCurrent ? duration : 0);
    other.push(isCurrent ? 0 : duration, isCurrent ? 0 : duration);
  }
  return [times, current, other];
};

export const hasChartData = (data: ChartData): boolean => !!data[0]?.length;
