import { Session, sessionDurationPure, Task } from '@app/domain/task';
import millisecondsToSeconds from 'date-fns/millisecondsToSeconds';
import { DateFn, startEndFns } from './date-time';

const clampSession = (session: Session, start: number, end: number, now: number): Session => ({
  ...session,
  start: Math.max(start, session.start),
  end: Math.min(end, session.end ?? now),
});

export type ScaleRange = readonly [Date | null, Date | null];
type DateRange = [Date, Date];
export type ChartData = [number[], number[]];

const generateRanges = (start: Date, end: Date, startFn: DateFn, endFn: DateFn): DateRange[] => {
  let rangeStart: Date = start;
  const result: DateRange[] = [];
  while (rangeStart.valueOf() < end.valueOf()) {
    const range: DateRange = [startFn(rangeStart), endFn(rangeStart)];
    result.push(range);
    rangeStart = new Date(range[1].valueOf() + 1);
  }
  return result;
};

const getSessionRangeId = (session: Session, getStartFn: DateFn): number =>
  getStartFn(new Date(session.start)).valueOf();

const getEraliestSessionStart = (tasks: Task[]): number | undefined =>
  tasks.flatMap((t) => t.sessions.map((s) => s.start)).sort((a, b) => a - b)[0];

const tasksToBars = (tasks: Task[], startFn: DateFn, endFn: DateFn): Bars => {
  const now = new Date();
  const earliestStart = getEraliestSessionStart(tasks);
  if (earliestStart === undefined) {
    return new Map();
  }
  const result: Bars = new Map(
    generateRanges(new Date(earliestStart), now, startFn, endFn).map(([s, e]) => [
      s.valueOf(),
      {
        start: s,
        end: e,
        tasks: new Set(),
        duration: 0,
      },
    ])
  );
  return tasks.reduce((bars: Bars, task: Task) => {
    task.sessions.forEach((s) => {
      let duration = sessionDurationPure(s);
      while (duration >= 10) {
        const bar = bars.get(getSessionRangeId(s, startFn));
        if (!bar) {
          break;
        }
        const sessionSlice = clampSession(s, bar.start.valueOf(), bar.end.valueOf(), now.valueOf());
        const sliceDuration = sessionDurationPure(sessionSlice);
        bar.tasks.add(task.id);
        bar.duration += sliceDuration;
        duration = duration - sliceDuration;
        s = { ...s, start: bar.end.valueOf() + 1 };
      }
    });
    return bars;
  }, result);
};

const barsTouPlotData = (bars: Bars): ChartData => [
  [...bars.values()].flatMap((b) => [millisecondsToSeconds(b.start.valueOf()), millisecondsToSeconds(b.end.valueOf())]),
  [...bars.values()].flatMap((b) => [b.duration, b.duration]),
];

type Bars = Map<number, { start: Date; end: Date; tasks: Set<Task['id']>; duration: number }>;

export const chartSeries = (tasks: Task[]) => barsTouPlotData(tasksToBars(tasks, ...startEndFns.day));

export const hasChartData = (data: ChartData): boolean => !!data[0]?.length;
