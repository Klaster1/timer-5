import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TrackByFunction,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { ButtonTaskActionsComponent } from '@app/button-task-actions/button-task-actions.component';
import { hotkey, KEYS_ADD, KEYS_NEXT, KEYS_PREV, KEYS_SEARCH } from '@app/domain/hotkeys';
import { StoreState } from '@app/domain/storage';
import { isTaskRunning, SessionDragEvent, Task, TaskState } from '@app/domain/task';
import * as actions from '@app/ngrx/actions';
import { moveSessionToTask } from '@app/ngrx/actions';
import {
  selectCurrentTaskIndex,
  selectCurrentTasks,
  selectCurrentTaskState,
  selectDecodedFilterParams,
  selectIsCurrentTaskOpened,
  selectNextTaskId,
  selectPrevTaskId,
} from '@app/ngrx/selectors';
import { FormatDurationPipe } from '@app/pipes/format-duration.pipe';
import { MapPipe } from '@app/pipes/map.pipe';
import { TaskDurationPipe } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipe } from '@app/pipes/task-state.pipe';
import { TasksDurationPipe } from '@app/pipes/tasks-duration.pipe';
import { LetModule, PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { firstValueFrom, merge, Observable, Subject } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { CheckViewportSizeWhenValueChangesDirective } from './checkViewportSizeWhenValueChanges.directive';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { FixRouterLinkActiveDirective } from './fixRouterLinkActive.directive';
import { ScrollToIndexDirective } from './scrollToIndex.directive';
import { TasksFilterComponent } from './tasks-filter/tasks-filter.component';

@Component({
  selector: 'screen-tasks',
  templateUrl: './screen-tasks.component.html',
  styleUrls: ['./screen-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    EmptyStateComponent,
    TasksFilterComponent,
    CommonModule,
    LetModule,
    PushModule,
    TaskStatePipe,
    FormatDurationPipe,
    TaskDurationPipe,
    TasksDurationPipe,
    TaskStateIconPipe,
    RouterModule,
    ScrollingModule,
    NgScrollbarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    ButtonTaskActionsComponent,
    MapPipe,
    DragDropModule,
    CheckViewportSizeWhenValueChangesDirective,
    FixRouterLinkActiveDirective,
    ScrollToIndexDirective,
  ],
})
export class ScreenTasksComponent implements OnInit, OnDestroy {
  taskState = TaskState;
  isTaskRunning = isTaskRunning;
  state$ = this.store.select(selectCurrentTaskState);
  filterParams$ = this.store.select(selectDecodedFilterParams);
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
      const [nextTaskId, prevTaskId, state] = await Promise.all([
        firstValueFrom(this.store.select(selectNextTaskId)),
        firstValueFrom(this.store.select(selectPrevTaskId)),
        firstValueFrom(this.state$),
      ]);
      const taskId = KEYS_NEXT.includes(e.key) ? nextTaskId : KEYS_PREV.includes(e.key) ? prevTaskId : null;
      if (state && taskId) this.router.navigate([state, taskId], { queryParamsHandling: 'merge' });
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
    private router: Router
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
  onDrop(event: SessionDragEvent, item: Task) {
    this.store.dispatch(
      moveSessionToTask({
        taskIdFrom: event.item.data[1],
        taskIdTo: item.id,
        session: { ...event.item.data[0] },
      })
    );
  }
}
