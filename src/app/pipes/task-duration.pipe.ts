import { Pipe, PipeTransform, NgModule } from '@angular/core';
import {Task, Session} from '@app/types'
import {of, Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

const sumSessionDurations = (sessions: Task['sessions']): number => sessions.reduce((t, s) => t + (s.end ? s.end - s.start : 0), 0)

@Pipe({
  name: 'taskDuration'
})
export class TaskDurationPipe implements PipeTransform {
    transform(task?: Task): Observable<number> {
        if (!task) return of(0)
        const lastSession: Session|undefined = task.sessions[task.sessions.length - 1]
        const completeDuration = sumSessionDurations(task.sessions)
        return (lastSession && lastSession.end) || !lastSession
            ? of(completeDuration)
            : timer(0, 1000).pipe(map((() => completeDuration + Date.now() - lastSession.start)))
    }
}

@NgModule({declarations: [TaskDurationPipe], exports: [TaskDurationPipe]})
export class TaskDurationPipeModule {}