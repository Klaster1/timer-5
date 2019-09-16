import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import * as selectors from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {timer} from 'rxjs';
import {map, share, filter, withLatestFrom} from 'rxjs/operators';

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class ScreenTaskComponent {
    constructor(
        private store: Store<StoreState>,
    ) {}
    displayedColumns = ['start', 'end', 'duration']
    task$ = this.store.select(selectors.currentTask)
    taskDuration$ = timer(0, 1000).pipe(
        withLatestFrom(this.task$),
        map(([,t]) => {
            return t.lastSession
                ? t.lastSession.end
                    ? (t.lastSession.end - t.lastSession.start) + t.completeSessionsDuration
                    : (Date.now() - t.lastSession.start) + t.completeSessionsDuration
                : t.completeSessionsDuration
        })
    )
    sessions$ = this.store.select(selectors.currentTaskSessions)
    taskIsProgress$ = this.task$.pipe(map(t => !!t && !!t.lastSession && !t.lastSession.end))
    start(taskId: string) {
        this.store.dispatch(actions.startTask({taskId}))
    }
    stop(taskId: string) {
        this.store.dispatch(actions.stopTask({taskId}))
    }
}