import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { TaskState } from '@app/types';

@Pipe({
  name: 'taskState',
})
export class TaskStatePipe implements PipeTransform {
  transform(value?: TaskState | 'all') {
    switch (value) {
      case 'active':
        return 'Active';
      case 'done':
        return 'Done';
      case 'dropped':
        return 'Dropped';
      case 'on-hold':
        return 'On Hold';
      case 'to-do':
        return 'To Do';
      case 'all':
        return 'All';
      default:
        return null;
    }
  }
}

@NgModule({ declarations: [TaskStatePipe], exports: [TaskStatePipe] })
export class TaskStatePipeModule {}
