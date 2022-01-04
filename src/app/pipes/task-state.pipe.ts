import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { RouteTaskState } from '@app/types';

@Pipe({
  name: 'taskState',
})
export class TaskStatePipe implements PipeTransform {
  transform(value?: RouteTaskState) {
    switch (value) {
      case 'active':
        return 'Active';
      case 'dropped':
        return 'Dropped';
      case 'all':
        return 'All';
      default:
        return null;
    }
  }
}

@NgModule({ declarations: [TaskStatePipe], exports: [TaskStatePipe] })
export class TaskStatePipeModule {}
