import { Task, Stats, StatsParams, Session } from '../types/domain';
import { taskDurationPure, tasksDurationPure, sessionDurationPure } from '@app/domain/no-dom';
import { filter } from './filter';
import { dateDayStart, toDateEnd, toYesterday, closestHourStart, closestHourEnd } from './date';

const clampSession = (session: Session, start: number, end: number, now: number): Session => ({
  ...session,
  start: Math.max(start, session.start),
  end: Math.min(end, session.end ?? now),
});

type DateRange = [Date, Date];
type DateRanges = Map<number, DateRange>;

type RangeWidth = 'hour' | 'day' | 'month' | 'year';

const generateHourRanges = (start: Date, end: Date): Map<number, DateRange> => {
  let rangeStart: Date = start;
  const result = new Map();
  while (rangeStart.valueOf() < end.valueOf()) {
    const range = [closestHourStart(rangeStart), closestHourEnd(rangeStart)];
    result.set(range[0].valueOf(), range);
    rangeStart = new Date(range[1].valueOf() + 1);
  }
  return result;
};

const getSessionRangeId = (session: Session, getStartFn: (d: Date) => Date): number => {
  return getStartFn(new Date(session.start)).valueOf();
};

const getEraliestSessionStart = (tasks: Task[]): number | undefined => {
  return tasks
    .map((t) => t.sessions)
    .reduce((a, b) => [...a, ...b], [])
    .sort((a, b) => b.start - a.start)
    .pop()?.start;
};

const tasksToHourBars = (tasks: Task[]): Stats['timeline']['bars'] => {
  const now = new Date();
  const earliestStart = getEraliestSessionStart(tasks);
  const result: Stats['timeline']['bars'] = new Map();
  if (earliestStart === undefined) return result;
  const ranges = generateHourRanges(new Date(earliestStart), now);
  return tasks.reduce((bars: Stats['timeline']['bars'], task: Task) => {
    task.sessions.forEach((s) => {
      let duration = sessionDurationPure(s);
      while (duration >= 10) {
        const range = ranges.get(getSessionRangeId(s, closestHourStart));
        if (!range) break;
        const sessionSlice = clampSession(s, range[0].valueOf(), range[1].valueOf(), now.valueOf());
        const sliceDuration = sessionDurationPure(sessionSlice);
        let bar = bars.get(range[0].valueOf());
        if (!bar) {
          bars.set(range[0].valueOf(), (bar = { start: range[0], tasks: new Set(), duration: 0 }));
        }
        if (bar) {
          bar.tasks.add(task.id);
          bar.duration += sliceDuration;
        }
        duration = duration - sliceDuration;
        s = { ...s, start: range[1].valueOf() + 1 };
      }
    });
    return bars;
  }, result);
};

export const stats = (params: StatsParams, tasks: Task[]): Stats => {
  const todayTasksDuration = tasksDurationPure(
    filter(
      {
        from: dateDayStart(new Date()),
        to: new Date(),
      },
      tasks
    )
  );
  const yesterdayTaskDuration = tasksDurationPure(
    filter(
      {
        from: toYesterday(dateDayStart(new Date())),
        to: toYesterday(toDateEnd(new Date())),
      },
      tasks
    )
  );

  const bars = tasksToHourBars(tasks);
  console.log(bars);

  return {
    top10: tasks
      .map((t) => ({ name: t.name, id: t.id, duration: taskDurationPure(t, Date.now()) }))
      .sort((a, b) => b.duration - a.duration)
      .slice(0, 10),
    today: { duration: todayTasksDuration, diff: todayTasksDuration - yesterdayTaskDuration },
    thisWeek: { duration: 0, diff: 0 },
    thisYear: { duration: 0, diff: 0 },
    timeline: {
      barWidthInMs: 36_000,
      bars: bars,
    },
  };
};
