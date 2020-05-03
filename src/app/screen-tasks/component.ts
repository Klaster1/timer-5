import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  TrackByFunction,
  ChangeDetectorRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreState, Task, TaskState, TaskIndexes, TasksFilterParams } from '@app/types';
import { currentTasksState, currentStateTasks, currentTask, currentStateTasksWithRange } from '@app/ngrx/selectors';
import * as actions from '@app/ngrx/actions';
import { combineLatest, BehaviorSubject, Subject, timer, Observable } from 'rxjs';
import { map, tap, take, filter, startWith, shareReplay, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { generate as id } from 'shortid';
import { HotkeysService } from 'angular2-hotkeys';
import { hotkey } from '@app/utils/hotkey';
import { Router } from '@angular/router';
import { taskIndexes } from '@app/domain';
import { TasksFilterComponent } from './tasks-filter/component';

@Component({
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenTasksComponent implements OnInit, OnDestroy {
  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<StoreState>,
    private keys: HotkeysService,
    private router: Router
  ) {}
  hotkeys = [
    hotkey('a', 'Add task', () => this.addTask()),
    hotkey(['j', 'k'], 'Next/prev task', async (e) => {
      let [tasks, state, task] = await combineLatest(this.tasks$, this.state$, this.currentTask$)
        .pipe(take(1))
        .toPromise();
      if (!tasks.length) {
        return;
      }
      if (!task) {
        task = tasks[0];
      }
      let index = tasks.indexOf(task);
      if (e.key === 'j') {
        index += 1;
      }
      if (e.key === 'k') {
        index -= 1;
      }
      if (index >= tasks.length) {
        index = 0;
      }
      if (index < 0) {
        index = tasks.length - 1;
      }
      this.router.navigate(['tasks', state, tasks[index].id]);
    }),
    hotkey('ctrl+f', 'Search', (e) => {
      e.preventDefault();
      this.toggleFilter();
      this.cdr.detectChanges();
    }),
  ];
  state$ = this.store.select(currentTasksState);
  searchOpened = false;
  filterParams$: Subject<TasksFilterParams> = new BehaviorSubject({});

  tasks$ = this.filterParams$.pipe(switchMap((filter) => this.store.pipe(currentStateTasksWithRange(filter))));
  currentTask$ = this.store.select(currentTask);
  @HostBinding('class.task-opened')
  private taskOpened = false;
  taskOpened$ = this.currentTask$.pipe(
    map((t) => !!t),
    tap((v) => setTimeout(() => (this.taskOpened = v)))
  );
  taskId: TrackByFunction<Task> = (index, task) => task.id;
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
    if (!this.searchOpened) this.filterParams$.next({});
  }
}
