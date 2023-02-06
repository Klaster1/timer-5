import { Pipe, PipeTransform } from '@angular/core';
import { tasksDuration } from '@app/domain/task';

@Pipe({ name: 'tasksDuration', standalone: true })
export class TasksDurationPipe implements PipeTransform {
  transform = tasksDuration;
}
