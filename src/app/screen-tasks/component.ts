import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import {userTasks, currentTask} from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {map} from 'rxjs/operators';

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class ScreenTasksComponent {
    constructor(
        private store: Store<StoreState>,
    ) {}
    tasks$ = this.store.select(userTasks, {})
    taskOpened$ = this.store.select(currentTask).pipe(map(t => !!t))
    taskNotOpened$ = this.taskOpened$.pipe(map(t => !t))
    addTask() {
        const name = window.prompt('Add task')
        if (!name) return
        this.store.dispatch(actions.createTask({name}))
    }
}