import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import * as actions from '@app/ngrx/actions'
import {StoreState, SessionWithId} from '@app/types'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss'],
    selector: 'button-session-actions'
})
export class ButtonSessionActionsComponent {
    constructor(private store: Store<StoreState>) {}
    @Input()
    taskId: string
    @Input()
    session: SessionWithId
    edit() {
        console.log('not implemented')
    }
    remove() {
        this.store.dispatch(actions.deleteSession({taskId: this.taskId, sessionId: this.session.id}))
    }
    moveToTask() {
        console.log('not implemented')
    }
}