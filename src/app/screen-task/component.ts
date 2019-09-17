import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import * as selectors from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {timer, of} from 'rxjs';
import {map, share, filter, withLatestFrom, switchMap} from 'rxjs/operators';

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class ScreenTaskComponent {
    constructor(private store: Store<StoreState>) {}
    displayedColumns = ['start', 'end', 'duration', 'action']
    task$ = this.store.select(selectors.currentTask)
    taskDuration$ = this.task$.pipe(
        filter(v=>!!v),
        switchMap((t) => {
            return (t.lastSession && t.lastSession.end) || !t.lastSession
                ? of(t.completeSessionsDuration)
                : timer(0, 1000).pipe(map((() => t.completeSessionsDuration + Date.now() - t.lastSession.start)))
        }),
        share()
    )
    sessions$ = this.store.select(selectors.currentTaskSessions).pipe(map(data => data.sort((a,b) => b.start - a.start)))
    taskIsProgress$ = this.task$.pipe(map(t => !!t && !!t.lastSession && !t.lastSession.end))
    start(taskId: string) {
        this.store.dispatch(actions.startTask({taskId}))
    }
    stop(taskId: string) {
        this.store.dispatch(actions.stopTask({taskId}))
    }
}