import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TasksFilterParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { Session, Task } from '@app/domain/task';
import { FilterFormService } from '@app/filter-form/filter-form.service';
import * as actions from '@app/ngrx/actions';
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
  @Input() task?: Task;
  @Input() session?: Session;
  edit() {
    const { task, session } = this;
    if (!task || !session) {
      return;
    }
    this.store.dispatch(
      actions.updateSessionIntent({
        taskId: task.id,
        sessionIndex: task.sessions.indexOf(session),
      })
    );
  }
  remove() {
    const { task, session } = this;
    if (!task || !session) {
      return;
    }
    this.store.dispatch(actions.deleteSession({ taskId: task.id, sessionIndex: task.sessions.indexOf(session) }));
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
