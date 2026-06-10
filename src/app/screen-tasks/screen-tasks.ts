import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { NgClass } from '@angular/common';
import {
  Component,
  DestroyRef,
  Injector,
  TrackByFunction,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon, MatListItemMeta, MatListItemTitle, MatNavList } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonTaskActionsComponent } from '@app/button-task-actions/button-task-actions';
import { DurationComponent } from '@app/directives/duration';
import { ToolbarWidthSyncDirective } from '@app/directives/toolbar-width-sync';
import { chartSeries } from '@app/domain/chart';
import { KEYS_ADD, KEYS_NEXT, KEYS_PREV, KEYS_SEARCH, hotkey } from '@app/domain/hotkeys';
import { decodeFilterMatrixParams, decodeTaskState } from '@app/domain/router';
import { SessionDragEvent, Task, TaskState, filterTasks, isTaskRunning, taskDuration, tasksDuration } from '@app/domain/task';
import { MapPipe } from '@app/pipes/map';
import { TaskStatePipe } from '@app/pipes/task-state';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon';
import { DialogLinkDirective, RoutedDialogs } from '@app/providers/routed-dialogs';
import { AppStore } from '@app/providers/state';
import { TypeSafeCdkVirtualForDirective } from '@app/screen-task/type-safe-virtual-for';
import { deepEquals } from '@app/utils/assert';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { CheckViewportSizeWhenValueChangesDirective } from './checkViewportSizeWhenValueChanges';
import { EmptyStateComponent } from './empty-state/empty-state';
import { ScrollToIndexDirective } from './scrollToIndex';
import { TasksFilterComponent } from './tasks-filter/tasks-filter';
import type ScreenTaskComponent from '@app/screen-task/screen-task';

@Component({
  selector: 'screen-tasks',
  templateUrl: './screen-tasks.html',
  styleUrls: ['./screen-tasks.scss'],
  imports: [
    EmptyStateComponent,
    TasksFilterComponent,
    TaskStatePipe,
    TaskStateIconPipe,
    DialogLinkDirective,
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
    MatListItemIcon,
    MatListItemTitle,
    MatListItemMeta,
    MatListItem,
    MatTooltip,
    ButtonTaskActionsComponent,
    MapPipe,
    DragDropModule,
    CheckViewportSizeWhenValueChangesDirective,
    ScrollToIndexDirective,
    NgClass,
    TypeSafeCdkVirtualForDirective,
    DurationComponent,
    ToolbarWidthSyncDirective,
  ],
})
export default class ScreenTasksComponent {
  public store = inject(AppStore);
  private keys = inject(HotkeysService);
  private router = inject(Router);
  private routedDialogs = inject(RoutedDialogs);
  private destroyRef = inject(DestroyRef);
  public viewport = viewChild(CdkVirtualScrollViewport);
  private injector = inject(Injector);

  // Route inputs
  public readonly state = input(undefined, { transform: decodeTaskState });
  public readonly search = input<string>();
  public readonly from = input<string>();
  public readonly to = input<string>();
  public readonly durationSort = input<string>();

  // Derived from route inputs
  decodedFilterParams = computed(() =>
    decodeFilterMatrixParams({
      search: this.search(),
      from: this.from(),
      to: this.to(),
      durationSort: this.durationSort(),
    }),
  );
  private taskFilterParams = computed(
    () => ({ ...this.decodedFilterParams(), state: this.state() }),
    { equal: deepEquals },
  );
  currentTasks = computed(() => filterTasks(this.taskFilterParams(), this.store.allTasks()));
  filterChartData = computed(() => chartSeries(this.store.allTasks(), this.currentTasks()));
  filterRange = computed(
    () => [this.decodedFilterParams().from ?? null, this.decodedFilterParams().to ?? null] as const,
  );

  private filterPresent = computed(() => !!Object.keys(this.decodedFilterParams()).length);
  private filterToggles = signal<boolean | undefined>(undefined);
  public searchOpened = computed(() => {
    const filterPresent = this.filterPresent();
    const filterToggles = this.filterToggles();
    return filterToggles !== undefined ? filterToggles : filterPresent;
  });

  // The currently open task detail component, set by the <router-outlet> activate/deactivate events
  public readonly openTask = signal<ScreenTaskComponent | undefined>(undefined);

  // For scrollToIndex in the template — index of the currently open task
  currentTaskIndex = computed(() => {
    const taskId = this.openTask()?.taskId();
    return taskId ? this.currentTasks().findIndex((t) => t.id === taskId) : -1;
  });

  isCurrentTaskOpened = computed(() => !!this.openTask());

  constructor() {
    afterNextRender(() => {
      this.keys.add(this.hotkeys);
    });
    this.destroyRef.onDestroy(() => {
      this.keys.remove(this.hotkeys);
    });
    // Scroll to top when tasks change
    effect(() => {
      this.currentTasks();
      afterNextRender(
        {
          read: () => {
            this.viewport()?.scrollToIndex(0);
          },
        },
        {
          injector: this.injector,
        },
      );
    });
  }

  taskDuration = taskDuration;
  tasksDuration = tasksDuration;
  taskState = TaskState;
  isTaskRunning = isTaskRunning;
  taskId: TrackByFunction<Task> = (_, task) => task.id;

  hotkeys = [
    hotkey(KEYS_ADD, 'Add task', () => this.routedDialogs.navigate(['tasks', 'create'])),
    hotkey([...KEYS_NEXT, ...KEYS_PREV], 'Next/prev task', (e) => {
      const state = this.state();
      const tasks = this.currentTasks();
      const currentIndex = tasks.findIndex((t) => t.id === this.openTask()?.taskId());
      const len = tasks.length;
      const delta = KEYS_NEXT.includes(e.key) ? 1 : KEYS_PREV.includes(e.key) ? -1 : 0;
      // Wrap around the list; with no task open, next opens the first and prev the last
      const from = currentIndex < 0 ? (delta > 0 ? -1 : 0) : currentIndex;
      const nextTaskId = delta && len ? tasks[(from + delta + len) % len]?.id : null;
      if (state && nextTaskId) this.router.navigate([state, nextTaskId], { queryParamsHandling: 'merge' });
    }),
    new Hotkey(
      KEYS_SEARCH,
      (e) => {
        e.preventDefault();
        this.toggleFilter();
        return true;
      },
      ['INPUT'],
      'Toggle search',
    ),
  ];

  toggleFilter(opened?: boolean) {
    this.filterToggles.update(() => opened ?? !this.searchOpened());
  }
  onDrop(
    {
      item: {
        data: [session, fromTaskid],
      },
    }: SessionDragEvent,
    item: Task,
  ) {
    if (session && fromTaskid) this.store.moveSessionToTask(fromTaskid, item.id, session);
  }
}
