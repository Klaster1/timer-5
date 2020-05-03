import { Session, Task } from '@app/types';
import { combineLatest, Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { completeTaskDuration, getTaskRunningSession, sessionIsOver } from './no-dom';

export const sessionDuration = (session?: Session): Observable<number> => {
  if (!session) {
    return of(0);
  }
  return sessionIsOver(session)
    ? of(session.end - session.start)
    : timer(0, 1000).pipe(map(() => Date.now() - session.start));
};
export const taskDuration = (task?: Task, interval = 1000): Observable<number> => {
  const completeDuration = completeTaskDuration(task);
  const lastSession = getTaskRunningSession(task);
  return lastSession
    ? sessionIsOver(lastSession)
      ? of(completeDuration)
      : timer(0, interval).pipe(map(() => completeDuration + Date.now() - lastSession.start))
    : of(completeDuration);
};
export const tasksDuration = (tasks: Task[], interval = 1000): Observable<number> =>
  combineLatest(tasks.map((t) => taskDuration(t, interval))).pipe(
    map((durations) => durations.reduce((acc, d) => acc + d, 0))
  );
