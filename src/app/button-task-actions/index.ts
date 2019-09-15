import {NgModule} from '@angular/core'
import {MatMenuModule, MatButtonModule, MatIconModule, MatSelectModule} from '@angular/material'
import {Store} from '@ngrx/store'

import * as actions from '@app/ngrx/actions'
import {StoreState, TaskWithId, TaskState} from '@app/types'
import {ButtonTaskActionsComponent} from './component'

@NgModule({
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule
    ],
    declarations: [ButtonTaskActionsComponent],
    exports: [ButtonTaskActionsComponent]
})
export class ButtonTaskActionsModule {
    constructor(
        private store: Store<StoreState>,
    ) {}
    addTask() {
        const name = window.prompt('Add task')
        if (!name) return
        this.store.dispatch(actions.createTask({name}))
    }
}