import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { RouteTaskState, TaskState } from '@app/types';
import { assertNever } from '@app/types/assert-never';

@Pipe({
  name: 'taskState',
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

@NgModule({ declarations: [TaskStatePipe], exports: [TaskStatePipe] })
export class TaskStatePipeModule {}
