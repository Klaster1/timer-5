import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState} from '@app/types'
import {userTasks} from '@app/ngrx/selectors'
import {createTask} from '@app/ngrx/actions'

@Component({
    templateUrl: './template.html'
})
export class ScreenTasksComponent {
    constructor(
        private store: Store<StoreState>,
    ) {}
    tasks$ = this.store.select(userTasks, {userId: 'foo'})
    addTask = () => this.store.dispatch(createTask({name: Math.random().toString()}))
}