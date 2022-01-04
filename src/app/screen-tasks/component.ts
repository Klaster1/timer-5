import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  TrackByFunction,
} from '@angular/core';
import { Router } from '@angular/router';
import * as actions from '@app/ngrx/actions';
import { currentStateTasksWithFilter, currentTask, currentTasksState } from '@app/ngrx/selectors';
import { StoreState, Task, TasksFilterParams } from '@app/types';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenTasksComponent implements OnInit, OnDestroy {
  @HostBinding('class.task-opened') private taskOpened = false;

  state$ = this.store.select(currentTasksState);
  searchOpened = false;
  filterParams$: Subject<TasksFilterParams> = new BehaviorSubject({});
  tasks$ = this.filterParams$.pipe(switchMap((filter) => this.store.pipe(currentStateTasksWithFilter(filter))));
  currentTask$ = this.store.select(currentTask);
  currentTaskId$ = this.currentTask$.pipe(map((t) => t?.id));
  taskIds$ = this.tasks$.pipe(map((tasks) => tasks.map((t) => t.id)));
  currentTaskIndex$ = combineLatest(this.taskIds$, this.currentTaskId$).pipe(
    map(([taskIds, taskId]) => (taskId ? taskIds.indexOf(taskId) : -1))
  );
  taskOpened$ = this.currentTask$.pipe(
    map((t) => !!t),
    tap((v) => setTimeout(() => (this.taskOpened = v)))
  );

  hotkeys = [
    hotkey('a', 'Add task', () => this.addTask()),
    hotkey(['j', 'k'], 'Next/prev task', async (e) => {
      const result = await combineLatest(this.taskIds$, this.state$, this.currentTaskId$).pipe(take(1)).toPromise();
      if (!result) return;
      const [taskIds, state] = result;
      let [, , taskId] = result;
      if (!taskIds.length) {
        return;
      }
      if (typeof taskId !== 'string') {
        taskId = taskIds[0];
      }
      let index = taskIds.indexOf(taskId);
      if (e.key === 'j') {
        index += 1;
      }
      if (e.key === 'k') {
        index -= 1;
      }
      if (index >= taskIds.length) {
        index = 0;
      }
      if (index < 0) {
        index = taskIds.length - 1;
      }
      this.router.navigate(['tasks', state, taskIds[index]]);
    }),
    hotkey('ctrl+f', 'Search', (e) => {
      e.preventDefault();
      this.toggleFilter();
      this.cdr.detectChanges();
    }),
  ];

  taskId: TrackByFunction<Task> = (index, task) => task.id;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<StoreState>,
    private keys: HotkeysService,
    private router: Router
  ) {}

  ngOnInit() {
    this.keys.add(this.hotkeys);
  }
  ngOnDestroy() {
    this.keys.remove(this.hotkeys);
    this.filterParams$.complete();
  }
  addTask() {
    this.store.dispatch(actions.createTaskIntent());
  }
  toggleFilter() {
    this.searchOpened = !this.searchOpened;
    if (!this.searchOpened) {
      this.filterParams$.next({});
    }
  }
}
