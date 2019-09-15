import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import * as actions from '@app/ngrx/actions'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss'],
    selector: 'button-task-actions'
})
export class ButtonTaskActionsComponent {
    constructor(
        private store: Store<StoreState>,
    ) {}

    @Input()
    task: TaskWithId

    renameTask(task: TaskWithId) {
        const name = window.prompt('Rename task', task.name)
        if (!name) return
        this.store.dispatch(actions.renameTask({taskId: task.id, name}))
    }
    deleteTask(task: TaskWithId) {
        this.store.dispatch(actions.deleteTask({taskId: task.id}))
    }
    changeTaskState(task: TaskWithId, state: TaskState) {
        this.store.dispatch(actions.changeTaskState({taskId: task.id, state}))
    }
}