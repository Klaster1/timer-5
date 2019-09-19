import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import * as actions from '@app/ngrx/actions'
import {StoreState, Session} from '@app/types'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss'],
    selector: 'button-session-actions'
})
export class ButtonSessionActionsComponent {
    constructor(private store: Store<StoreState>) {}
    @Input()
    taskId?: string
    @Input()
    session?: Session
    edit() {
        if (!this.taskId || !this.session) return
        const start = window.prompt('Start', this.session.start.toString())
        const end = window.prompt('End', typeof this.session.end === 'number' ? this.session.end.toString() : '')
        if (!start) return
        this.store.dispatch(actions.updateSession({
            taskId: this.taskId,
            sessionId: this.session.id,
            start: Number.parseInt(start),
            end: typeof end === 'string' ? Number.parseInt(end) : undefined
        }))
    }
    remove() {
        if (!this.taskId || !this.session) return
        this.store.dispatch(actions.deleteSession({taskId: this.taskId, sessionId: this.session.id}))
    }
    moveToTask() {
        if (!this.taskId || !this.session) return
        const toTaskId = window.prompt('To task')
        if (!toTaskId) return
        this.store.dispatch(actions.moveSessionToTask({
            taskId: this.taskId,
            toTaskId,
            sessionId: this.session.id
        }))
    }
}