import {Component, ChangeDetectionStrategy, OnDestroy, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, Task, TaskState} from '@app/types'
import * as selectors from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {combineLatest} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {generate as id} from 'shortid'
import {HotkeysService, Hotkey} from 'angular2-hotkeys'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenTaskComponent implements OnDestroy, OnInit {
    constructor(private store: Store<StoreState>, private keys: HotkeysService) {}
    hotkeys = [
        new Hotkey('s', (e) => {
            combineLatest(this.task$, this.taskIsInProgress$).pipe(take(1)).toPromise().then(([task, inProgress]) => {
                if (!task) return
                inProgress ? this.stop(task.id) : this.start(task.id)
            })
            return e
        }, undefined, 'Start/stop task'),
        ...((['active', 'done'] as TaskState[]).map((state) => new Hotkey(`m ${state[0]}`, e => {
            this.task$.pipe(take(1)).toPromise().then((task) => {
                if (!task) return
                this.store.dispatch(actions.updateTaskState({taskId: task.id, state}))
            })
            return e
        })))
    ]
    ngOnInit() {
        this.keys.add(this.hotkeys)
    }
    ngOnDestroy() {
        this.keys.remove(this.hotkeys)
    }
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