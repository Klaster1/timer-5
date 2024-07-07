import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { Task, TaskState } from '@app/domain/task';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipe } from '@app/pipes/task-state.pipe';
import { DialogLinkDirective } from '@app/providers/routed-dialogs';
import { AppStore } from '@app/providers/state';

@Component({
  templateUrl: './button-task-actions.component.html',
  styleUrls: ['./button-task-actions.component.scss'],
  selector: 'button-task-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatMenuContent,
    MatMenuItem,
    MatIconButton,
    MatIcon,
    TaskStateIconPipe,
    TaskStatePipe,
    RouterLink,
    DialogLinkDirective,
  ],
})
export class ButtonTaskActionsComponent {
  private store = inject(AppStore);
  task = input<Task>();
  taskState = TaskState;

  deleteTask() {
    const task = this.task();
    if (task) this.store.deleteTask(task.id);
  }
  changeTaskState(state: TaskState) {
    const task = this.task();
    if (task) this.store.updateTaskState(task.id, state);
  }
}
