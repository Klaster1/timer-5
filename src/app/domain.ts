import {Observable, timer, of, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {Task, Session, TaskIndexes} from '@app/types';
export const isTask = (v: any): v is Task => typeof v === 'object' && v.id && v.name && v.state && Array.isArray(v.sessions);
export const isTaskRunning = (t?: Task): boolean => !!t && !!t.sessions && t.sessions.some(s => !s.end);
export const getTaskRunningSession = (t?: Task) => t ? t.sessions[t.sessions.length - 1] : undefined;
export const compareSessions = (a: Session, b: Session) => b.start - a.start;
export const sortSessions = (sessions: Session[]): Session[] => [...sessions].sort(compareSessions);
export const compareTasks = (a: Task, b: Task): number => {
  const as = a.sessions && a.sessions[a.sessions.length - 1];
  const bs = b.sessions && b.sessions[b.sessions.length - 1];
  if (!as && bs) { return -1; }
  if (as && !bs) { return 1; }
  if (!as && !bs) { return 0; }
  if (as && bs) {
    if (!as.end && !bs.end) { return bs.start - as.start; }
    if (as.end && bs.end) { return bs.start - as.start; }
    if (!as.end && bs.end) { return -1; }
    if (as.end && !bs.end) { return 1; }
  }
  return 0;
};
export const sessionEndToString = (s: Session) => s && typeof s.end === 'number' ? s.end.toString() : '';
export const stringToSessionEnd = (end: any): Session['end'] => typeof end === 'string' ? Number.parseInt(end) : undefined;
export const sessionIsOver = (s?: Session): s is Session & {end: number} => !!s && typeof s.end === 'number';
export const sessionDuration = (session?: Session): Observable<number> => {
    if (!session) { return of(0); }
    return sessionIsOver(session)
        ? of(session.end - session.start)
        : timer(0, 1000).pipe(map(() => Date.now() - session.start));

};
export const completeTaskDuration = (task?: Task): number => task
    ? task.sessions.reduce((t, s) => t + (s.end ? s.end - s.start : 0), 0)
    : 0;

export const taskDuration = (task?: Task, interval = 1000): Observable<number> => {
    const completeDuration = completeTaskDuration(task);
    const lastSession = getTaskRunningSession(task);
    return lastSession
        ? (sessionIsOver(lastSession))
            ? of(completeDuration)
            : timer(0, interval).pipe(map((() => completeDuration + Date.now() - lastSession.start)))
        : of(completeDuration);
};
export const tasksDuration = (tasks: Task[], interval = 1000): Observable<number> => combineLatest(tasks.map(t => taskDuration(t, interval))).pipe(
  map((durations) => durations.reduce((acc, d) => acc + d, 0))
);
export const getTaskSession = (task: Task, sessionId: string) => task.sessions.find(s => s.id === sessionId);
export const taskIndexes = (task: Task): TaskIndexes => task.sessions
    .flatMap(s => [new Date(s.start), !!s.end ? new Date(s.end) : undefined], 2)
    .filter(<T>(v?: T): v is T => !!v)
    .reduce((acc, d) => {
        const year = `${d.getFullYear()}`;
        if (!acc.year.includes(year)) acc.year.push(year)
        const yearMonth = `${year}.${d.getMonth()+1}`;
        if (!acc.yearMonth.includes(yearMonth)) acc.yearMonth.push(yearMonth)
        const yearMonthDate = `${yearMonth}.${d.getDate()}`;
        if (!acc.yearMonthDate.includes(yearMonthDate)) acc.yearMonthDate.push(yearMonthDate)
        return acc
    }, {year: [], yearMonth: [], yearMonthDate: []} as TaskIndexes)

// export const addTasksToStats = (stats: TimelineStats, tasks: Task[]): TimelineStats => tasks.reduce((acc, t) => {
//     const i = taskIndexes(t)
//     const reduceSpan = (acc: SpanStats, span: string): SpanStats => ({
//         ...acc,
//         [span]: {
//             tasks: acc[span]
//                 ? acc[span].tasks.includes(t.id)
//                     ? acc[span].tasks
//                     : [...acc[span].tasks, t.id]
//                 : [t.id],
//             duration: acc[span]
//                 ? acc[span].duration + completeTaskDuration(t)
//                 : completeTaskDuration(t)
//         }
//     })
//     return {
//         year: i.year.reduce(reduceSpan, {...acc.year}),
//         yearMonth: i.year.reduce(reduceSpan, {...acc.yearMonth}),
//         yearMonthDate: i.year.reduce(reduceSpan, {...acc.yearMonthDate})
//     }
// }, stats)

// export const removeTasksFromStats = (stats: TimelineStats, tasks: Task[]): TimelineStats => 

// export const allStats = (tasks: Task[]) => addTasksToStats({year: {}, yearMonth: {}, yearMonthDate: {}}, tasks)