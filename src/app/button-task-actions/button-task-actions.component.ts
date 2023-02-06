import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { StoreState } from '@app/domain/storage';
import { Task, TaskState } from '@app/domain/task';
import { deleteTask, renameTaskIntent, updateTaskState } from '@app/ngrx/actions';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipe } from '@app/pipes/task-state.pipe';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './button-task-actions.component.html',
  styleUrls: ['./button-task-actions.component.scss'],
  selector: 'button-task-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    TaskStateIconPipe,
    TaskStatePipe,
    CommonModule,
  ],
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
