import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FilterFormService } from '@app/filter-form/filter-form.service';
import * as actions from '@app/ngrx/actions';
import { Session, StoreState, TasksFilterParams } from '@app/types';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  templateUrl: './button-session-actions.component.html',
  styleUrls: ['./button-session-actions.component.scss'],
  selector: 'button-session-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonSessionActionsComponent {
  constructor(private store: Store<StoreState>, private fitler: FilterFormService<TasksFilterParams>) {}
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
  skipBefore() {
    const { session } = this;
    if (!session) return;
    this.fitler.filterParams$
      .pipe(take(1))
      .subscribe((params) => this.fitler.next({ ...params, from: new Date(session.start) }));
  }
  skipAfter() {
    const { session } = this;
    if (!session) return;
    this.fitler.filterParams$
      .pipe(take(1))
      .subscribe((params) => this.fitler.next({ ...params, to: new Date(session?.end ?? new Date()) }));
  }
}
