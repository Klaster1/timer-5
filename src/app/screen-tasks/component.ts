import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import {userTasks} from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
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
}