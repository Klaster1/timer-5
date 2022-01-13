import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { last } from '@app/utils/array';
import { deepEquals, isNumber } from '@app/utils/assert';
import { nanoid } from 'nanoid';
import { combineLatest, Observable, of, timer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Milliseconds } from './date-time';
import { FilterMatrixParams, RouteFragmentParams } from './router';

export enum TaskState {
  active = 'active',
  finished = 'finished',
  dropped = 'dropped',
}

export type RouteTaskState = TaskState | 'all';

export type TaskId = string;

export type Task = {
  id: TaskId;
  name: string;
  state: TaskState;
  sessions: Session[];
};

export type Session = {
  start: Milliseconds;
  end?: Milliseconds;
};

export const isTask = (v: any) => {
  return typeof v === 'object' && v.id && v.name && v.state && Array.isArray(v.sessions) ? (v as Task) : null;
};
export const isTaskRunning = (t?: Task): boolean => !!t && !!t.sessions && t.sessions.some((s) => !s.end);
export const isValidTaskState = (state: string): boolean =>
  (new Set([TaskState.active, TaskState.finished, TaskState.dropped]) as Set<string>).has(state);
export const getTaskRunningSession = (t?: Task) => t?.sessions.find((s) => !isNumber(s.end));
const compareSessions = (a: Session, b: Session) => b.start - a.start;
export const sortTaskSessions = (task: Task): Task => ({ ...task, sessions: [...task.sessions].sort(compareSessions) });
export const compareTasks = (a: Task, b: Task): number => {
  const as = last(a.sessions);
  const bs = last(b.sessions);
  if (!as && bs) {
    return -1;
  }
  if (as && !bs) {
    return 1;
  }
  if (!as && !bs) {
    return 0;
  }
  if (as && bs) {
    if (!as.end && !bs.end) {
      return bs.start - as.start;
    }
    if (as.end && bs.end) {
      return bs.start - as.start;
    }
    if (!as.end && bs.end) {
      return -1;
    }
    if (as.end && !bs.end) {
      return 1;
    }
  }
  return 0;
};
export const sessionIsOver = (s?: Session): s is Session & { end: number } => !!s && isNumber(s.end);
export const sessionDurationPure = (s: Session): number => (s.end ? s.end - s.start : 0);
export const completeTaskDuration = (task?: Task): number =>
  task ? task.sessions.reduce((t, s) => t + sessionDurationPure(s), 0) : 0;

export type SessionId = [Session['start'], Session['end']];
export const getSessionId = (session: Session): SessionId => [session.start, session.end];
export const isSessionWithId = (id: SessionId) => (session: Session) => deepEquals(getSessionId(session), id);
export const getTaskSession = (task: Task, id: SessionId) => task.sessions.find(isSessionWithId(id));

export const taskDurationPure = (task: Task, now: number): number => {
  const completeDuration = completeTaskDuration(task);
  const lastSession = getTaskRunningSession(task);
  return lastSession
    ? sessionIsOver(lastSession)
      ? completeDuration
      : completeDuration + now - lastSession.start
    : completeDuration;
};

export const makeTaskId = (): TaskId => nanoid(4);

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
      : timer(0, interval).pipe(
          startWith(0),
          map(() => completeDuration + Date.now() - lastSession.start)
        )
    : of(completeDuration);
};
export const tasksDuration = (tasks: Task[], interval = 1000): Observable<number> =>
  combineLatest(tasks.map((t) => taskDuration(t, interval))).pipe(
    map((durations) => durations.reduce((acc, d) => acc + d, 0))
  );

type Nullable<T> = T | null;

type FilterParams = Partial<FilterMatrixParams & Pick<RouteFragmentParams, 'state'>>;

type Filter = (filter: FilterParams, task: Nullable<Task>) => Nullable<Task>;

const filterByState: Filter = (filter, t) => {
  if (!t) return t;
  const { state } = filter;
  if (state && state !== 'all') {
    return t.state === state ? t : null;
  } else {
    return t;
  }
};

const filterByName: Filter = (filter, t) => {
  if (!t) return t;
  const { search } = filter;
  if (typeof search === 'string' && search.length) {
    return t.name.toLowerCase().includes(search.toLowerCase()) ? t : null;
  } else {
    return t;
  }
};
const filterByFrom: Filter = (filter, t) => {
  if (!t) return t;
  const { from } = filter;
  if (from instanceof Date && !Number.isNaN(from.valueOf())) {
    const sessions = t.sessions.filter((s) => s.start >= from.valueOf());
    return sessions.length ? { ...t, sessions } : null;
  } else {
    return t;
  }
};
const filterByTo: Filter = (filter, t) => {
  if (!t) return t;
  const { to } = filter;
  if (to instanceof Date && !Number.isNaN(to.valueOf())) {
    const sessions = t.sessions.filter((s) => (isNumber(s.end) ? s.end <= to.valueOf() : true));
    return sessions.length ? { ...t, sessions } : null;
  } else {
    return t;
  }
};

const sortByDuration = (filter: FilterParams, tasks: Task[]): Task[] => {
  const now = (filter.to ?? new Date()).valueOf();
  if (filter.durationSort) {
    return [...tasks].sort((a, b) =>
      filter.durationSort === 'shortestFirst'
        ? taskDurationPure(a, now) - taskDurationPure(b, now)
        : taskDurationPure(b, now) - taskDurationPure(a, now)
    );
  } else {
    return [...tasks].sort(compareTasks);
  }
};

const composedPredicate = (filter: FilterParams, t: Nullable<Task>): Nullable<Task> =>
  filterByTo(filter, filterByFrom(filter, filterByName(filter, filterByState(filter, t))));

export const filterTasks = (filter: FilterParams, values: Task[]): Task[] =>
  sortByDuration(
    filter,
    values.reduce((acc: Task[], task) => {
      const result = composedPredicate(filter, task);
      if (result) {
        acc.push(result);
      }
      return acc;
    }, [])
  );

export const filterTaskSessions = (task: Task, params: Pick<FilterParams, 'from' | 'to'>): Task => {
  const sessions = filterByTo(params, filterByFrom(params, task))?.sessions;
  return sessions ? { ...task, sessions } : task;
};

export type SessionDragEvent = CdkDragDrop<undefined, undefined, [Session, TaskId]>;
