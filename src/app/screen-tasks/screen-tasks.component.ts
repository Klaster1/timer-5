import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TrackByFunction,
} from '@angular/core';
import { Router } from '@angular/router';
import { hotkey, KEYS_ADD, KEYS_NEXT, KEYS_PREV, KEYS_SEARCH } from '@app/domain/hotkeys';
import { FilterMatrixParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { Task, TaskState } from '@app/domain/task';
import { FilterFormService } from '@app/filter-form/filter-form.service';
import * as actions from '@app/ngrx/actions';
import {
  selectCurrentTaskIndex,
  selectCurrentTasks,
  selectCurrentTaskState,
  selectIsCurrentTaskOpened,
  selectNextTaskId,
  selectPrevTaskId,
} from '@app/ngrx/selectors';
import { NavigationService } from '@app/services/navigation.service';
import { Store } from '@ngrx/store';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { firstValueFrom, merge, Observable, Subject } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

@Component({
  templateUrl: './screen-tasks.component.html',
  styleUrls: ['./screen-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenTasksComponent implements OnInit, OnDestroy {
  taskState = TaskState;
  state$ = this.store.select(selectCurrentTaskState);
  filterParams$ = this.filter.filterParams$;
  filterToggles$ = new Subject<boolean>();
  filterPresent$: Observable<boolean> = this.filterParams$.pipe(map((params) => !!Object.keys(params).length));
  searchOpened$ = merge(this.filterPresent$.pipe(take(1)), this.filterToggles$).pipe(
    shareReplay({ refCount: true, bufferSize: 1 })
  );
  tasks$ = this.store.select(selectCurrentTasks);
  currentTaskIndex$ = this.store.select(selectCurrentTaskIndex);
  taskOpened$ = this.store.select(selectIsCurrentTaskOpened);

  hotkeys = [
    hotkey(KEYS_ADD, 'Add task', () => this.addTask()),
    hotkey([...KEYS_NEXT, ...KEYS_PREV], 'Next/prev task', async (e) => {
      const [nextTaskId, prevTaskId] = await Promise.all([
        firstValueFrom(this.store.select(selectNextTaskId)),
        firstValueFrom(this.store.select(selectPrevTaskId)),
      ]);
      const taskId = KEYS_NEXT.includes(e.key) ? nextTaskId : KEYS_PREV.includes(e.key) ? prevTaskId : null;
      if (!taskId) return;
      this.router.navigate(await firstValueFrom(this.navigation.taskIdCommands(taskId)));
    }),
    new Hotkey(
      KEYS_SEARCH,
      (e) => {
        e.preventDefault();
        this.toggleFilter();
        this.cdr.detectChanges();
        return true;
      },
      ['INPUT'],
      'Toggle search'
    ),
  ];

  taskId: TrackByFunction<Task> = (_, task) => task.id;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<StoreState>,
    private keys: HotkeysService,
    private router: Router,
    private filter: FilterFormService<FilterMatrixParams>,
    private navigation: NavigationService
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
  toggleFilter() {
    this.searchOpened$.pipe(take(1)).subscribe((searchOpened) => {
      if (searchOpened) this.closeFilter();
      else this.openFilter();
    });
  }
}