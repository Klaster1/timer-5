import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { sessionDuration } from '@app/domain';

@Pipe({ name: 'sessionDuration' })
export class SessionDurationPipe implements PipeTransform {
  transform = sessionDuration;
}

@NgModule({
  declarations: [SessionDurationPipe],
  exports: [SessionDurationPipe],
})
export class SessionDurationPipeModule {}
