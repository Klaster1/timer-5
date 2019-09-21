import {Observable, timer, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Task, Session} from '@app/types'
export const isTask = (v: any): v is Task => typeof v === 'object' && v.id && v.name && v.state && Array.isArray(v.sessions)
export const isTaskRunning = (t?: Task): boolean => !!t && !!t.sessions && t.sessions.some(s=>!s.end)
export const getTaskRunningSession = (t?: Task) => t ? t.sessions[t.sessions.length - 1] : undefined
export const compareSessions = (a: Session, b: Session)=>b.start-a.start
export const sortSessions = (sessions: Session[]): Session[] => [...sessions].sort(compareSessions)
export const compareTasks = (a: Task, b: Task): number => {
  const as = a.sessions && a.sessions[a.sessions.length - 1]
  const bs = b.sessions && b.sessions[b.sessions.length - 1]
  if (!as && bs) return -1
  if (as && !bs) return 1
  if (!as && !bs) return 0
  if (as && bs) {
    if (!as.end && !bs.end) return bs.start-as.start
    if (as.end && bs.end) return bs.start-as.start
    if (!as.end && bs.end) return -1
    if (as.end && !bs.end) return 1
  }
  return 0
}
export const sessionEndToString = (s: Session) => s && typeof s.end === 'number' ? s.end.toString() : ''
export const stringToSessionEnd = (end: any): Session['end'] => typeof end === 'string' ? Number.parseInt(end) : undefined
export const sessionIsOver = (s?: Session): s is Session & {end: number} => !!s && typeof s.end === 'number'
export const sessionDuration = (session?: Session): Observable<number> => {
    if (!session) return of(0)
    return sessionIsOver(session)
        ? of(session.end - session.start)
        : timer(0,1000).pipe(map(() => Date.now() - session.start))

}
export const completeTaskDuration = (task?: Task): number => task
    ? task.sessions.reduce((t, s) => t + (s.end ? s.end - s.start : 0), 0)
    : 0

export const taskDuration = (task?: Task): Observable<number> => {
    const completeDuration = completeTaskDuration(task)
    const lastSession = getTaskRunningSession(task)
    return lastSession
        ? (sessionIsOver(lastSession))
            ? of(completeDuration)
            : timer(0, 1000).pipe(map((() => completeDuration + Date.now() - lastSession.start)))
        : of(completeDuration)

}