import { CdkDrag, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { ButtonTaskActionsComponent } from '@app/button-task-actions/button-task-actions.component';
import {
  KEYS_DELETE_TASK,
  KEYS_MARK_ACTIVE,
  KEYS_MARK_FINISHED,
  KEYS_RENAME,
  KEYS_START_STOP,
  hotkey,
} from '@app/domain/hotkeys';
import { StoreState } from '@app/domain/storage';
import { Task, TaskState, isTaskRunning, sessionDuration } from '@app/domain/task';
import { deleteTask, renameTaskIntent, startTask, stopTask, updateTaskState } from '@app/ngrx/actions';
import { selectCurrentTask } from '@app/ngrx/selectors';
import { FormatDurationPipe } from '@app/pipes/format-duration.pipe';
import { MapPipe } from '@app/pipes/map.pipe';
import { TaskDurationPipe } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon.pipe';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
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
    TaskStateIconPipe,
    MatToolbarModule,
    MatIcon,
    MatTable,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatCell,
    MatCellDef,
    MatFooterRow,
    MatFooterRowDef,
    MatFooterCell,
    MatFooterCellDef,
    MatColumnDef,
    MatTooltip,
    FormatDurationPipe,
    TaskDurationPipe,
    ButtonTaskActionsComponent,
    ButtonSessionActionsComponent,
    MapPipe,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDropList,
    AsyncPipe,
    DatePipe,
    RouterLink,
    MatIconButton,
    MatFabButton,
  ],
})
export class ScreenTaskComponent {
  private store = inject<Store<StoreState>>(Store);
  private keys = inject<HotkeysService>(HotkeysService);
  private destroyRef = inject(DestroyRef);
  sessionDuration = sessionDuration;
  hotkeys = [
    hotkey(KEYS_START_STOP, 'Start/stop task', async (e) => {
      combineLatest([this.task$, this.taskIsInProgress$])
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
      }),
    ),
    hotkey(KEYS_DELETE_TASK, 'Delete task', () => this.task$.pipe(take(1)).subscribe((task) => this.deleteTask(task))),
  ];
  displayedColumns = ['start', 'end', 'duration', 'action'];
  task$ = this.store.select(selectCurrentTask);
  taskIsInProgress$ = this.task$.pipe(map(isTaskRunning));
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.keys.remove(this.hotkeys);
    });
    afterNextRender(() => {
      this.keys.add(this.hotkeys);
    });
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
