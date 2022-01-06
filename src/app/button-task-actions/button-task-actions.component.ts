import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as actions from '@app/ngrx/actions';
import { StoreState, Task, TaskState } from '@app/types';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './button-task-actions.component.html',
  styleUrls: ['./button-task-actions.component.scss'],
  selector: 'button-task-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTaskActionsComponent {
  constructor(private store: Store<StoreState>) {}

  taskState = TaskState;

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
