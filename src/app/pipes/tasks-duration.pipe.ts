import { Pipe, PipeTransform, NgModule } from '@angular/core';
import {tasksDuration} from '@app/domain'

@Pipe({name: 'tasksDuration'})
export class TasksDurationPipe implements PipeTransform {
    transform = tasksDuration
}

@NgModule({declarations: [TasksDurationPipe], exports: [TasksDurationPipe]})
export class TasksDurationPipeModule {}