import {Component, HostBinding, ChangeDetectionStrategy} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, Task, TaskState} from '@app/types'
import {currentTasksState, currentStateTasks, currentTask} from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {map, tap} from 'rxjs/operators';
import {generate as id} from 'shortid'
import {HotkeysService, Hotkey} from 'angular2-hotkeys'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenTasksComponent {
    constructor(
        private store: Store<StoreState>,
        keys: HotkeysService
    ) {
        keys.add(new Hotkey('a', (e) => (this.addTask(),e), void 0, 'Add task'))
    }
    state$ = this.store.select(currentTasksState)
    tasks$ = this.store.select(currentStateTasks)
    @HostBinding('class.task-opened')
    private taskOpened: boolean = false
    taskOpened$ = this.store.select(currentTask).pipe(map(t => !!t), tap(v=>setTimeout(()=>this.taskOpened = v)))
    addTask() {
        const name = window.prompt('Add task')
        if (!name) return
        this.store.dispatch(actions.createTask({name, taskId: id()}))
    }
    taskId = (task: Task) => task.id
}