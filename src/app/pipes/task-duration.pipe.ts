import { Pipe, PipeTransform } from '@angular/core';
import { taskDuration } from '@app/domain/task';

@Pipe({ name: 'taskDuration', standalone: true })
export class TaskDurationPipe implements PipeTransform {
  transform = taskDuration;
}
