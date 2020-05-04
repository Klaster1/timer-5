import { Task, Stats, StatsParams } from '../types/domain';
import { taskDurationPure, tasksDurationPure } from '@app/domain/no-dom';
import { filter } from './filter';
import { dateDayStart, toDateEnd, toYesterday } from './date';

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
  const earliestSession = tasks
    .map((t) => t.sessions)
    .reduce((a, b) => [...a, ...b], [])
    .sort((a, b) => b.start - a.start)
    .pop();
  console.log(earliestSession?.start ? new Date(earliestSession.start) : earliestSession?.start);

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
      bars: [],
    },
  };
};
