import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import {userTasks} from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'

@Component({
    templateUrl: './template.html'
})
export class ScreenTasksComponent {
    constructor(
        private store: Store<StoreState>,
    ) {}
    tasks$ = this.store.select(userTasks, {})
    addTask() {
        const name = window.prompt('Add task')
        if (!name) return
        this.store.dispatch(actions.createTask({name}))
    }
    renameTask(task: TaskWithId) {
        const name = window.prompt('Rename task', task.name)
        if (!name) return
        this.store.dispatch(actions.renameTask({taskId: task.id, name}))
    }
    deleteTask = (task: TaskWithId) => {
        this.store.dispatch(actions.deleteTask({taskId: task.id}))
    }
    changeTaskState(task: TaskWithId, state: TaskState) {
        this.store.dispatch(actions.changeTaskState({taskId: task.id, state}))
    }
}