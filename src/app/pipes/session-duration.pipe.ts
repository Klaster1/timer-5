import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { Session} from '@app/types'
import {of, Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'sessionDuration'
})
export class SessionDurationPipe implements PipeTransform {
    transform(session?: Session): Observable<number> {
        if (!session) return of(0)
        return session.end
            ? of(session.end - session.start)
            : timer(0,1000).pipe(map(() => Date.now() - session.start))
    }
}

@NgModule({declarations: [SessionDurationPipe], exports: [SessionDurationPipe]})
export class SessionDurationPipeModule {}