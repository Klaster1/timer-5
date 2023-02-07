import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ButtonTaskActionsComponent } from '@app/button-task-actions/button-task-actions.component';
import {
  hotkey,
  KEYS_DELETE_TASK,
  KEYS_MARK_ACTIVE,
  KEYS_MARK_FINISHED,
  KEYS_RENAME,
  KEYS_START_STOP,
} from '@app/domain/hotkeys';
import { StoreState } from '@app/domain/storage';
import { isTaskRunning, sessionDuration, Task, TaskState } from '@app/domain/task';
import { deleteTask, renameTaskIntent, startTask, stopTask, updateTaskState } from '@app/ngrx/actions';
import { selectCurrentTask } from '@app/ngrx/selectors';
import { FormatDurationPipe } from '@app/pipes/format-duration.pipe';
import { MapPipe } from '@app/pipes/map.pipe';
import { TaskDurationPipe } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon.pipe';
import { LetModule, PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ButtonSessionActionsComponent } from './button-session-actions/button-session-actions.component';

@Component({
  selector: 'screen-task',
  templateUrl: './screen-task.component.html',
  styleUrls: ['./screen-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    RouterModule,
    TaskStateIconPipe,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    NgScrollbarModule,
    FormatDurationPipe,
    TaskDurationPipe,
    ButtonTaskActionsComponent,
    ButtonSessionActionsComponent,
    MapPipe,
    DragDropModule,
  ],
})
export class ScreenTaskComponent implements OnDestroy, OnInit {
  sessionDuration = sessionDuration;
  hotkeys = [
    hotkey(KEYS_START_STOP, 'Start/stop task', async (e) => {
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
    hotkey(KEYS_MARK_FINISHED, `Mark as finished`, (e) => {
      this.task$.pipe(take(1)).subscribe((task) => {
        if (task) {
          this.store.dispatch(updateTaskState({ taskId: task.id, state: TaskState.finished }));
        }
      });
    }),
    hotkey(KEYS_MARK_ACTIVE, `Mark as active`, (e) => {
      this.task$.pipe(take(1)).subscribe((task) => {
        if (task) {
          this.store.dispatch(updateTaskState({ taskId: task.id, state: TaskState.active }));
        }
      });
    }),
    hotkey(KEYS_RENAME, 'Rename task', () =>
      this.task$.pipe(take(1)).subscribe((task) => {
        if (task) {
          this.store.dispatch(renameTaskIntent({ taskId: task.id }));
        }
      })
    ),
    hotkey(KEYS_DELETE_TASK, 'Delete task', () => this.task$.pipe(take(1)).subscribe((task) => this.deleteTask(task))),
  ];
  displayedColumns = ['start', 'end', 'duration', 'action'];
  task$ = this.store.select(selectCurrentTask);
  taskIsInProgress$ = this.task$.pipe(map(isTaskRunning));
  constructor(private store: Store<StoreState>, private keys: HotkeysService) {}
  ngOnInit() {
    this.keys.add(this.hotkeys);
  }
  ngOnDestroy() {
    this.keys.remove(this.hotkeys);
  }
  start(taskId?: string) {
    if (taskId) this.store.dispatch(startTask({ taskId, timestamp: Date.now() }));
  }
  stop(taskId?: string) {
    if (taskId) this.store.dispatch(stopTask({ taskId, timestamp: Date.now() }));
  }
  deleteTask(task?: Task) {
    if (task) this.store.dispatch(deleteTask({ taskId: task.id }));
  }
}
