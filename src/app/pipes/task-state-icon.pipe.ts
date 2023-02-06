import { Pipe, PipeTransform } from '@angular/core';
import { isTask, isTaskRunning, Task, TaskState } from '@app/domain/task';
import { assertNever } from '@app/utils/assert';

@Pipe({
  name: 'taskStateIcon',
  standalone: true,
})
export class TaskStateIconPipe implements PipeTransform {
  transform(stateOrTask?: Task | TaskState) {
    const task = isTask(stateOrTask);
    const inputState = typeof stateOrTask === 'string' ? stateOrTask : null;
    const state = task?.state ?? inputState;

    if (task && isTaskRunning(task)) {
      return 'pause_circle_filled';
    }
    if (!state) {
      return 'timer-logo';
    }
    switch (state) {
      case TaskState.active:
        return 'play_circle_outline';
      case TaskState.finished:
        return 'check_circle_outline';
      case TaskState.dropped:
        return 'delete_outline';
      default:
        return assertNever(state);
    }
  }
}
