import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
    TrackByFunction
} from '@angular/core';
import { Router } from '@angular/router';
import { FilterMatrixParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { Task } from '@app/domain/task';
import { FilterFormService } from '@app/filter-form/filter-form.service';
import * as actions from '@app/ngrx/actions';
import {
    selectCurrentTaskIndex,
    selectCurrentTasks,
    selectCurrentTaskState,
    selectDecodedFilterParams,
    selectDecodedRouteParams,
    selectIsCurrentTaskOpened,
    selectNextTaskId,
    selectPrevTaskId
} from '@app/ngrx/selectors';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { firstValueFrom, merge, Observable, Subject } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';

@Component({
  templateUrl: './screen-tasks.component.html',
  styleUrls: ['./screen-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenTasksComponent implements OnInit, OnDestroy {
  @HostBinding('class.task-opened') private taskOpened = false;

  state$ = this.store.select(selectCurrentTaskState);
  filterParams$ = this.filter.filterParams$;
  filterToggles$ = new Subject<boolean>();
  filterPresent$: Observable<boolean> = this.filterParams$.pipe(map((params) => !!Object.keys(params).length));
  searchOpened$ = merge(this.filterPresent$.pipe(take(1)), this.filterToggles$).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  tasks$ = this.store.select(selectCurrentTasks);
  currentTaskIndex$ = this.store.select(selectCurrentTaskIndex);
  taskOpened$ = this.store.select(selectIsCurrentTaskOpened).pipe(tap((v) => (this.taskOpened = v)));

  hotkeys = [
    hotkey('a', 'Add task', () => this.addTask()),
    hotkey(['j', 'k'], 'Next/prev task', async (e) => {
      const [nextTaskId, prevTaskId, routeParams, filterParams] = await Promise.all([
        firstValueFrom(this.store.select(selectNextTaskId)),
        firstValueFrom(this.store.select(selectPrevTaskId)),
        firstValueFrom(this.store.select(selectDecodedRouteParams)),
        firstValueFrom(this.store.select(selectDecodedFilterParams)),
      ]);
      const taskId = e.key === 'j' ? nextTaskId : e.key === 'k' ? prevTaskId : null;
      if (!taskId) return;
      this.router.navigate(['tasks', routeParams.state, filterParams, taskId]);
    }),
    hotkey('ctrl+f', 'Search', (e) => {
      e.preventDefault();
      this.openFilter();
      this.cdr.detectChanges();
    }),
  ];

  taskId: TrackByFunction<Task> = (index, task) => task.id;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<StoreState>,
    private keys: HotkeysService,
    private router: Router,
    private filter: FilterFormService<FilterMatrixParams>
  ) {}

  ngOnInit() {
    this.keys.add(this.hotkeys);
  }
  ngOnDestroy() {
    this.keys.remove(this.hotkeys);
    this.filterToggles$.complete();
  }
  addTask() {
    this.store.dispatch(actions.createTaskIntent());
  }
  openFilter() {
    this.filterToggles$.next(true);
  }
  closeFilter() {
    this.filterToggles$.next(false);
  }
}
