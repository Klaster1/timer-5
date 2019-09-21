import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { Session} from '@app/types'
import {of, Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {sessionDuration} from '@app/domain'

@Pipe({
  name: 'sessionDuration'
})
export class SessionDurationPipe implements PipeTransform {
    transform = sessionDuration
}

@NgModule({declarations: [SessionDurationPipe], exports: [SessionDurationPipe]})
export class SessionDurationPipeModule {}