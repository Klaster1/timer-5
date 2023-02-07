import { Pipe, PipeTransform } from '@angular/core';
import { RouteTaskState, TaskState } from '@app/domain/task';
import { assertNever } from '@app/utils/assert';

@Pipe({
  name: 'taskState',
  standalone: true,
})
export class TaskStatePipe implements PipeTransform {
  transform(value?: RouteTaskState) {
    switch (value) {
      case TaskState.active:
        return 'Active';
      case TaskState.dropped:
        return 'Dropped';
      case TaskState.finished:
        return 'Finished';
      case 'all':
        return 'All';
      case undefined:
        return '😵';
      default:
        return assertNever(value);
    }
  }
}
