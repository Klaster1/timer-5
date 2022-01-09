import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FilterMatrixParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { Session, Task } from '@app/domain/task';
import { FilterFormService } from '@app/filter-form/filter-form.service';
import * as actions from '@app/ngrx/actions';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';

@Component({
  templateUrl: './button-session-actions.component.html',
  styleUrls: ['./button-session-actions.component.scss'],
  selector: 'button-session-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSessionActionsComponent {
  constructor(private store: Store<StoreState>, private fitler: FilterFormService<FilterMatrixParams>) {}
  @Input() task?: Task;
  @Input() session?: Session;
  edit() {
    if (this.task && this.session)
      this.store.dispatch(
        actions.updateSessionIntent({
          taskId: this.task.id,
          sessionIndex: this.task.sessions.indexOf(this.session),
        })
      );
  }
  remove() {
    if (this.task && this.session)
      this.store.dispatch(
        actions.deleteSession({ taskId: this.task.id, sessionIndex: this.task.sessions.indexOf(this.session) })
      );
  }
  async skipBefore() {
    if (this.session) {
      this.fitler.next({ ...(await firstValueFrom(this.fitler.filterParams$)), from: new Date(this.session.start) });
    }
  }
  async skipAfter() {
    if (this.session) {
      this.fitler.next({
        ...(await firstValueFrom(this.fitler.filterParams$)),
        to: new Date(this.session?.end ?? new Date()),
      });
    }
  }
}
