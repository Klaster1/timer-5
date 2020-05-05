import { sessionDurationPure, taskDurationPure, tasksDurationPure } from '@app/domain/no-dom';
import { Session, Stats, StatsParams, Task } from '../types/domain';
import { closestHourEnd, closestHourStart, dateDayStart, toDateEnd, toYesterday } from './date';
import { filter } from './filter';

const clampSession = (session: Session, start: number, end: number, now: number): Session => ({
  ...session,
  start: Math.max(start, session.start),
  end: Math.min(end, session.end ?? now),
});

type DateRange = [Date, Date];

type RangeWidth = 'hour' | 'day' | 'month' | 'year';

const generateHourRanges = (start: Date, end: Date): DateRange[] => {
  let rangeStart: Date = start;
  const result: DateRange[] = [];
  while (rangeStart.valueOf() < end.valueOf()) {
    const range: DateRange = [closestHourStart(rangeStart), closestHourEnd(rangeStart)];
    result.push(range);
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
  if (earliestStart === undefined) return new Map();
  const result: Stats['timeline']['bars'] = new Map(
    generateHourRanges(new Date(earliestStart), now).map(([s, e]) => [
      s.valueOf(),
      {
        start: s,
        end: e,
        tasks: new Set(),
        duration: 0,
      },
    ])
  );
  return tasks.reduce((bars: Stats['timeline']['bars'], task: Task) => {
    task.sessions.forEach((s) => {
      let duration = sessionDurationPure(s);
      while (duration >= 10) {
        const bar = bars.get(getSessionRangeId(s, closestHourStart));
        if (!bar) break;
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

export const barsToChartjsData = (bars: Stats['timeline']['bars']): any => {
  return {
    labels: [...bars.values()].slice(-24 * 60).map((b) => b.start.toISOString()),
    datasets: [
      {
        label: 'Per hour tasks',
        data: [...bars.values()].slice(-24 * 60).map((b) => ({ y: b.duration, x: b.start })),
        backgroundColor: '#f00',
        borderColor: '#f50',
      },
    ],
  };
};

export const barsTouPlotData = (bars: Stats['timeline']['bars']): number[][] => {
  return [[...bars.values()].map((b) => b.start.valueOf() / 1000), [...bars.values()].map((b) => b.duration)];
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

  console.time('bars');
  const bars = tasksToHourBars(tasks);
  console.timeEnd('bars');
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
      chartjsData: barsToChartjsData(bars),
      uPlotData: barsTouPlotData(bars),
    },
  };
};
