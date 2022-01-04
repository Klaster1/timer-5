// Only type imports allowed, so function work in workers too
import { Session, Task, TaskState } from '@app/types/domain';

export const isTask = (v: any): v is Task =>
  typeof v === 'object' && v.id && v.name && v.state && Array.isArray(v.sessions);
export const isTaskRunning = (t?: Task): boolean => !!t && !!t.sessions && t.sessions.some((s) => !s.end);
export const isValidTaskState = (state: string): boolean =>
  (
    new Set([
      TaskState.active,
      TaskState.done,
      TaskState.dropped,
      TaskState.dropped,
      TaskState.onHold,
      TaskState.toDo,
    ]) as Set<string>
  ).has(state);
export const getTaskRunningSession = (t?: Task) => (t ? t.sessions[t.sessions.length - 1] : undefined);
export const compareSessions = (a: Session, b: Session) => b.start - a.start;
export const sortSessions = (sessions: Session[]): Session[] => [...sessions].sort(compareSessions);
export const compareTasks = (a: Task, b: Task): number => {
  const as = a.sessions && a.sessions[a.sessions.length - 1];
  const bs = b.sessions && b.sessions[b.sessions.length - 1];
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
export const sessionEndToString = (s: Session) => (s && typeof s.end === 'number' ? s.end.toString() : '');
export const stringToSessionEnd = (end: any): Session['end'] =>
  typeof end === 'string' ? Number.parseInt(end, 10) : undefined;
export const sessionIsOver = (s?: Session): s is Session & { end: number } => !!s && typeof s.end === 'number';
export const sessionDurationPure = (s: Session): number => (s.end ? s.end - s.start : 0);
export const completeTaskDuration = (task?: Task): number =>
  task ? task.sessions.reduce((t, s) => t + sessionDurationPure(s), 0) : 0;

export const getTaskSession = (task: Task, sessionId: string) => task.sessions.find((s) => s.id === sessionId);

export const taskDurationPure = (task: Task, now: number): number => {
  const completeDuration = completeTaskDuration(task);
  const lastSession = getTaskRunningSession(task);
  return lastSession
    ? sessionIsOver(lastSession)
      ? completeDuration
      : completeDuration + now - lastSession.start
    : completeDuration;
};
export const tasksDurationPure = (tasks: Task[]): number => {
  const now = Date.now();
  return tasks.reduce((a, t) => a + taskDurationPure(t, now), 0);
};
