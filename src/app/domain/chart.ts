import { Session, sessionDurationPure, Task } from '@app/domain/task';
import { endOfDay } from 'date-fns/endOfDay';
import { millisecondsToSeconds } from 'date-fns/millisecondsToSeconds';
import { startOfDay } from 'date-fns/startOfDay';

const clampSession = (session: Session, start: number, end: number, now: number): Session => ({
  ...session,
  start: Math.max(start, session.start),
  end: Math.min(end, session.end ?? now),
});

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

const getSessionRangeId = (session: Session): number => startOfDay(new Date(session.start)).valueOf();

const getEarliestSessionStart = (tasks: Task[]): number | undefined =>
  tasks.flatMap((t) => t.sessions.map((s) => s.start)).sort((a, b) => a - b)[0];

type Bar = { start: Date; end: Date; tasks: Set<Task['id']>; duration: number; includesCurrentTasks: boolean };
type Bars = Map<number, Bar>;

const tasksToBars = (allTasks: Task[], currentTasks: Task[]): Bars => {
  const currentTasksIds = new Set(currentTasks.map((t) => t.id));
  const now = new Date();
  const earliestStart = getEarliestSessionStart(allTasks);
  if (earliestStart === undefined) {
    return new Map();
  }
  const result: Bars = new Map(
    generateRanges(new Date(earliestStart), now).map(([s, e]): [number, Bar] => [
      s.valueOf(),
      {
        start: s,
        end: e,
        tasks: new Set(),
        duration: 0,
        includesCurrentTasks: false,
      },
    ]),
  );
  return allTasks.reduce((bars: Bars, task: Task) => {
    task.sessions.forEach((s) => {
      let duration = sessionDurationPure(s);
      while (duration >= 10) {
        const bar = bars.get(getSessionRangeId(s));
        if (!bar) {
          break;
        }
        const sessionSlice = clampSession(s, bar.start.valueOf(), bar.end.valueOf(), now.valueOf());
        const sliceDuration = sessionDurationPure(sessionSlice);
        if (!bar.includesCurrentTasks) bar.includesCurrentTasks = currentTasksIds.has(task.id);
        bar.tasks.add(task.id);
        bar.duration += sliceDuration;
        duration = duration - sliceDuration;
        s = { ...s, start: bar.end.valueOf() + 1 };
      }
    });
    return bars;
  }, result);
};

export const chartSeries = (allTasks: Task[], currentTasks: Task[]): ChartData => {
  const bars = tasksToBars(allTasks, currentTasks);
  const currentBars: Bars = new Map(
    [...bars.entries()].map(([key, bar]) => [key, bar.includesCurrentTasks ? bar : { ...bar, duration: 0 }]),
  );
  const otherBars: Bars = new Map(
    [...bars.entries()].map(([key, bar]) => [key, !bar.includesCurrentTasks ? bar : { ...bar, duration: 0 }]),
  );
  return [
    [...bars.values()].flatMap((b) => [
      millisecondsToSeconds(b.start.valueOf()),
      millisecondsToSeconds(b.end.valueOf()),
    ]),
    [...currentBars.values()].flatMap((b) => [b.duration, b.duration]),
    [...otherBars.values()].flatMap((b) => [b.duration, b.duration]),
  ];
};

export const hasChartData = (data: ChartData): boolean => !!data[0]?.length;
