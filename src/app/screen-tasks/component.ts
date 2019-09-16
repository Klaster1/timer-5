import {Component, HostBinding} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import {currentTasksState, userTasks, currentTask} from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {map, tap} from 'rxjs/operators';

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class ScreenTasksComponent {
    constructor(
        private store: Store<StoreState>,
    ) {}
    state$ = this.store.select(currentTasksState)
    tasks$ = this.store.select(userTasks, {})
    @HostBinding('class.task-opened')
    private taskOpened: boolean
    taskOpened$ = this.store.select(currentTask).pipe(map(t => !!t), tap(v=>setTimeout(()=>this.taskOpened = v)))
    addTask() {
        const name = window.prompt('Add task')
        if (!name) return
        this.store.dispatch(actions.createTask({name}))
    }
    taskId = (task: TaskWithId) => task.id
}