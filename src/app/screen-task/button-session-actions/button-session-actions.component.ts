import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { encodeFilterParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { getSessionId, Session, Task } from '@app/domain/task';
import * as actions from '@app/ngrx/actions';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './button-session-actions.component.html',
  styleUrls: ['./button-session-actions.component.scss'],
  selector: 'button-session-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatSelectModule, MatIconModule, RouterModule],
})
export class ButtonSessionActionsComponent {
  constructor(private store: Store<StoreState>) {}
  @Input() task?: Task;
  @Input() session?: Session;
  edit() {
    if (this.task && this.session)
      this.store.dispatch(
        actions.updateSessionIntent({
          taskId: this.task.id,
          sessionId: getSessionId(this.session),
        })
      );
  }
  remove() {
    if (this.task && this.session)
      this.store.dispatch(actions.deleteSession({ taskId: this.task.id, sessionId: getSessionId(this.session) }));
  }
  get skipBeforeParams() {
    return this.session ? encodeFilterParams({ from: new Date(this.session.start) }) : {};
  }
  get skipAfterParams() {
    return encodeFilterParams({ to: new Date(this.session?.end ?? new Date()) });
  }
}
