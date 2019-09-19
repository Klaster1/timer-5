import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, Task, TaskState} from '@app/types'
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
    task?: Task

    renameTask() {
        if (!this.task) return
        const name = window.prompt('Rename task', this.task.name)
        if (!name) return
        this.store.dispatch(actions.renameTask({taskId: this.task.id, name}))
    }
    deleteTask() {
        if (!this.task) return
        this.store.dispatch(actions.deleteTask({taskId: this.task.id}))
    }
    changeTaskState(state: TaskState) {
        if (!this.task) return
        this.store.dispatch(actions.updateTaskState({taskId: this.task.id, state}))
    }
}