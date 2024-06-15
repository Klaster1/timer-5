import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  TrackByFunction,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonTaskActionsComponent } from '@app/button-task-actions/button-task-actions.component';
import { KEYS_ADD, KEYS_NEXT, KEYS_PREV, KEYS_SEARCH, hotkey } from '@app/domain/hotkeys';
import { StoreState } from '@app/domain/storage';
import { SessionDragEvent, Task, TaskState, isTaskRunning } from '@app/domain/task';
import * as actions from '@app/ngrx/actions';
import { moveSessionToTask } from '@app/ngrx/actions';
import {
  selectCurrentTaskIndex,
  selectCurrentTaskState,
  selectCurrentTasks,
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
import { Store } from '@ngrx/store';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { CheckViewportSizeWhenValueChangesDirective } from './checkViewportSizeWhenValueChanges.directive';
import { EmptyStateComponent } from './empty-state/empty-state.component';
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
    TaskStatePipe,
    FormatDurationPipe,
    TaskDurationPipe,
    TasksDurationPipe,
    TaskStateIconPipe,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    ScrollingModule,
    MatToolbar,
    MatIcon,
    MatButton,
    MatIconButton,
    MatFabButton,
    MatNavList,
    MatListItem,
    MatTooltip,
    ButtonTaskActionsComponent,
    MapPipe,
    DragDropModule,
    CheckViewportSizeWhenValueChangesDirective,
    ScrollToIndexDirective,
    AsyncPipe,
    NgClass,
  ],
})
export class ScreenTasksComponent {
  private cdr = inject(ChangeDetectorRef);
  private store = inject<Store<StoreState>>(Store);
  private keys = inject(HotkeysService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  public state = this.store.selectSignal(selectCurrentTaskState);
  public tasks = this.store.selectSignal(selectCurrentTasks);
  public currentTaskIndex = this.store.selectSignal(selectCurrentTaskIndex);
  public taskOpened = this.store.selectSignal(selectIsCurrentTaskOpened);
  private filterPresent = computed(() => {
    const filterParams = this.store.selectSignal(selectDecodedFilterParams)();
    return !!Object.keys(filterParams).length;
  });
  private filterToggles = signal<boolean | undefined>(undefined);
  public searchOpened = computed(() => {
    const filterPresent = this.filterPresent();
    const filterToggles = this.filterToggles();
    if (filterToggles !== undefined) return filterToggles;
    return filterPresent;
  });

  constructor() {
    afterNextRender(() => {
      this.keys.add(this.hotkeys);
    });
    this.destroyRef.onDestroy(() => {
      this.keys.remove(this.hotkeys);
    });
  }

  taskState = TaskState;
  isTaskRunning = isTaskRunning;

  hotkeys = [
    hotkey(KEYS_ADD, 'Add task', () => this.addTask()),
    hotkey([...KEYS_NEXT, ...KEYS_PREV], 'Next/prev task', async (e) => {
      const nextTaskId = this.store.selectSignal(selectNextTaskId)();
      const prevTaskId = this.store.selectSignal(selectPrevTaskId)();
      const state = this.state();
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
      'Toggle search',
    ),
  ];

  taskId: TrackByFunction<Task> = (_, task) => task.id;

  addTask() {
    this.store.dispatch(actions.createTaskIntent());
  }
  openFilter() {
    this.filterToggles.update(() => true);
  }
  closeFilter() {
    this.filterToggles.update(() => false);
  }
  toggleFilter() {
    const searchOpened = this.searchOpened();
    if (searchOpened) this.closeFilter();
    else this.openFilter();
  }
  onDrop(event: SessionDragEvent, item: Task) {
    this.store.dispatch(
      moveSessionToTask({
        taskIdFrom: event.item.data[1],
        taskIdTo: item.id,
        session: { ...event.item.data[0] },
      }),
    );
  }
}
