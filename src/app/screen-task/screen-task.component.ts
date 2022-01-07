import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TasksFilterRouteParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { isTaskRunning, sessionDuration, Task, TaskState } from '@app/domain/task';
import { FilterFormService } from '@app/filter-form/filter-form.service';
import { deleteTask, renameTaskIntent, startTask, stopTask, updateTaskState } from '@app/ngrx/actions';
import { selectCurrentTask } from '@app/ngrx/selectors';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  templateUrl: './screen-task.component.html',
  styleUrls: ['./screen-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenTaskComponent implements OnDestroy, OnInit {
  sessionDuration = sessionDuration;
  hotkeys = [
    hotkey('s', 'Start/stop task', async (e) => {
      combineLatest(this.task$, this.taskIsInProgress$)
        .pipe(take(1))
        .subscribe(([task, inProgress]) => {
          if (!task) {
            return;
          }
          if (inProgress) {
            this.stop(task.id);
          } else {
            this.start(task.id);
          }
        });
    }),
    ...[TaskState.active, TaskState.finished].map((state) =>
      hotkey(`m ${state[0]}`, `Mark as ${state}`, (e) => {
        this.task$.pipe(take(1)).subscribe((task) => {
          if (task) {
            this.store.dispatch(updateTaskState({ taskId: task.id, state }));
          }
        });
      })
    ),
    hotkey('r t', 'Rename task', () =>
      this.task$.pipe(take(1)).subscribe((task) => {
        if (task) {
          this.store.dispatch(renameTaskIntent({ taskId: task.id }));
        }
      })
    ),
    hotkey('d t', 'Delete task', () => this.task$.pipe(take(1)).subscribe((task) => this.deleteTask(task))),
  ];
  displayedColumns = ['start', 'end', 'duration', 'action'];
  task$ = this.store.select(selectCurrentTask);
  taskIsInProgress$ = this.task$.pipe(map(isTaskRunning));
  constructor(
    private store: Store<StoreState>,
    private keys: HotkeysService,
    private filter: FilterFormService<TasksFilterRouteParams>
  ) {}
  ngOnInit() {
    this.keys.add(this.hotkeys);
  }
  ngOnDestroy() {
    this.keys.remove(this.hotkeys);
  }
  start(taskId?: string) {
    if (!taskId) {
      return;
    }
    this.store.dispatch(startTask({ taskId, timestamp: Date.now() }));
  }
  stop(taskId?: string) {
    if (!taskId) {
      return;
    }
    this.store.dispatch(stopTask({ taskId, timestamp: Date.now() }));
  }
  deleteTask(task?: Task) {
    if (!task) {
      return;
    }
    this.store.dispatch(deleteTask({ taskId: task.id }));
  }
}
