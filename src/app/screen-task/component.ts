import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, Task, TaskState} from '@app/types'
import * as selectors from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {map} from 'rxjs/operators';
import {generate as id} from 'shortid'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class ScreenTaskComponent {
    constructor(private store: Store<StoreState>) {}
    displayedColumns = ['start', 'end', 'duration', 'action']
    task$ = this.store.select(selectors.currentTask)
    sortedSessions$ = this.task$.pipe(map(t => t ? [...t.sessions].sort((a,b)=>b.start-a.start) : []))
    taskIsInProgress$ = this.task$.pipe(map(t => !!t && !!t.sessions.some(s=>!s.end)))
    start(taskId?: string) {
        if (!taskId) return
        this.store.dispatch(actions.startTask({taskId, sessionId: id(), timestamp: Date.now()}))
    }
    stop(taskId?: string) {
        if (!taskId) return
        this.store.dispatch(actions.stopTask({taskId, timestamp: Date.now()}))
    }
}