import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { isTaskRunning, sortSessions } from '@app/domain';
import * as actions from '@app/ngrx/actions';
import * as selectors from '@app/ngrx/selectors';
import { StoreState, Task, TaskState } from '@app/types';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { nanoid as id } from 'nanoid';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenTaskComponent implements OnDestroy, OnInit {
  constructor(private store: Store<StoreState>, private keys: HotkeysService) {}
  hotkeys = [
    hotkey('s', 'Start/stop task', async (e) => {
      combineLatest(this.task$, this.taskIsInProgress$)
        .pipe(take(1))
        .subscribe(([task, inProgress]) => {
          if (!task) {
            return;
          }
          inProgress ? this.stop(task.id) : this.start(task.id);
        });
    }),
    ...[TaskState.ACTIVE, TaskState.DONE].map((state) =>
      hotkey(`m ${state[0]}`, `Mark as ${state}`, (e) => {
        this.task$.pipe(take(1)).subscribe((task) => {
          if (task) {
            this.store.dispatch(actions.updateTaskState({ taskId: task.id, state }));
          }
        });
      })
    ),
    hotkey('r t', 'Rename task', () =>
      this.task$.pipe(take(1)).subscribe((task) => {
        if (task) {
          this.store.dispatch(actions.renameTaskIntent({ taskId: task.id }));
        }
      })
    ),
    hotkey('d t', 'Delete task', () => this.task$.pipe(take(1)).subscribe((task) => this.deleteTask(task))),
  ];
  displayedColumns = ['start', 'end', 'duration', 'action'];
  task$ = this.store.select(selectors.currentTask);
  sortedSessions$ = this.task$.pipe(map((t) => (t ? sortSessions(t.sessions) : [])));
  taskIsInProgress$ = this.task$.pipe(map(isTaskRunning));
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
    this.store.dispatch(actions.startTask({ taskId, sessionId: id(), timestamp: Date.now() }));
  }
  stop(taskId?: string) {
    if (!taskId) {
      return;
    }
    this.store.dispatch(actions.stopTask({ taskId, timestamp: Date.now() }));
  }
  deleteTask(task?: Task) {
    if (!task) {
      return;
    }
    this.store.dispatch(actions.deleteTask({ taskId: task.id }));
  }
}
