import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as actions from '@app/ngrx/actions';
import { Session, StoreState } from '@app/types';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  selector: 'button-session-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSessionActionsComponent {
  constructor(private store: Store<StoreState>) {}
  @Input()
  taskId?: string;
  @Input()
  session?: Session;
  edit() {
    if (!this.taskId || !this.session) {
      return;
    }
    this.store.dispatch(
      actions.updateSessionIntent({
        taskId: this.taskId,
        sessionId: this.session.id,
      })
    );
  }
  remove() {
    if (!this.taskId || !this.session) {
      return;
    }
    this.store.dispatch(actions.deleteSession({ taskId: this.taskId, sessionId: this.session.id }));
  }
}
