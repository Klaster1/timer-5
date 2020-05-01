import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreState, Task, TaskState } from '@app/types';
import * as actions from '@app/ngrx/actions';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  selector: 'button-task-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTaskActionsComponent {
  constructor(private store: Store<StoreState>) {}

  @Input()
  task?: Task;

  renameTask() {
    if (!this.task) {
      return;
    }
    this.store.dispatch(actions.renameTaskIntent({ taskId: this.task.id }));
  }
  deleteTask() {
    if (!this.task) {
      return;
    }
    this.store.dispatch(actions.deleteTask({ taskId: this.task.id }));
  }
  changeTaskState(state: TaskState) {
    if (!this.task) {
      return;
    }
    this.store.dispatch(actions.updateTaskState({ taskId: this.task.id, state }));
  }
}
