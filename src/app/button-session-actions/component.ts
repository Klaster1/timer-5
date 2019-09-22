import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '@app/ngrx/actions';
import {StoreState, Session} from '@app/types';
import {sessionEndToString, stringToSessionEnd} from '@app/domain';

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss'],
    selector: 'button-session-actions',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSessionActionsComponent {
    constructor(private store: Store<StoreState>) {}
    @Input()
    taskId?: string;
    @Input()
    session?: Session;
    edit() {
        if (!this.taskId || !this.session) { return; }
        this.store.dispatch(actions.updateSessionIntent({taskId: this.taskId, sessionId: this.session.id}));
    }
    remove() {
        if (!this.taskId || !this.session) { return; }
        this.store.dispatch(actions.deleteSession({taskId: this.taskId, sessionId: this.session.id}));
    }
    moveToTask() {
        if (!this.taskId || !this.session) { return; }
        const toTaskId = window.prompt('To task');
        if (!toTaskId) { return; }
        this.store.dispatch(actions.moveSessionToTask({
            taskId: this.taskId,
            toTaskId,
            sessionId: this.session.id
        }));
    }
}
