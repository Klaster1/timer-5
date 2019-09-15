import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import * as selectors from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss']
})
export class ScreenTaskComponent {
    constructor(
        private store: Store<StoreState>,
    ) {}
    task$ = this.store.select(selectors.currentTask)
}