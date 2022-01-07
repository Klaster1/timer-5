import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StoreState } from '@app/domain/storage';
import { Task, TaskState } from '@app/domain/task';
import { deleteTask, renameTaskIntent, updateTaskState } from '@app/ngrx/actions';
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
  @Input() task?: Task;

  renameTask() {
    if (this.task) this.store.dispatch(renameTaskIntent({ taskId: this.task.id }));
  }
  deleteTask() {
    if (this.task) this.store.dispatch(deleteTask({ taskId: this.task.id }));
  }
  changeTaskState(state: TaskState) {
    if (this.task) this.store.dispatch(updateTaskState({ taskId: this.task.id, state }));
  }
}
