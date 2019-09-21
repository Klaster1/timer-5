import { Pipe, PipeTransform, NgModule } from '@angular/core';
import {Task, Session} from '@app/types'
import {of, Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {taskDuration} from '@app/domain'

const sumSessionDurations = (sessions: Task['sessions']): number => sessions.reduce((t, s) => t + (s.end ? s.end - s.start : 0), 0)

@Pipe({
  name: 'taskDuration'
})
export class TaskDurationPipe implements PipeTransform {
    transform = taskDuration
}

@NgModule({declarations: [TaskDurationPipe], exports: [TaskDurationPipe]})
export class TaskDurationPipeModule {}