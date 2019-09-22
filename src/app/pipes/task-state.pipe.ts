import {Pipe, NgModule} from '@angular/core';
import {TaskState} from '@app/types';

@Pipe({
    name: 'taskState',
})
export class TaskStatePipe {
    transform(value: TaskState | 'all') {
        switch (value) {
            case 'active': return 'Active';
            case 'done': return 'Done';
            case 'dropped': return 'Dropped';
            case 'on-hold': return 'On Hold';
            case 'to-do': return 'To Do';
            case 'all': return 'All';
            default: return value;
        }
    }
}

@NgModule({declarations: [TaskStatePipe], exports: [TaskStatePipe]})
export class TaskStatePipeModule {}
