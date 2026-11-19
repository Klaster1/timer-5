import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import {
  Component,
  DestroyRef,
  Injector,
  TrackByFunction,
  afterNextRender,
  computed,
  debounced,
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
import { chartBars, chartSeries } from '@app/domain/chart';
import { KEYS_ADD, KEYS_NEXT, KEYS_PREV, KEYS_SEARCH, hotkey } from '@app/domain/hotkeys';
import { decodeFilterMatrixParams, decodeTaskState } from '@app/domain/router';
import {
  SessionDragEvent,
  Task,
  TaskId,
  TaskState,
  filterTasks,
  isTaskRunning,
  taskDuration,
  tasksDuration,
} from '@app/domain/task';
import { MapPipe } from '@app/pipes/map';
import { TaskStatePipe } from '@app/pipes/task-state';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon';
import { DialogLinkDirective, RoutedDialogs } from '@app/providers/routed-dialogs';
import { AppStore } from '@app/providers/state';
import { TaskNameSearch } from '@app/providers/task-name-search';
import type ScreenTaskComponent from '@app/screen-task/screen-task';
import { TypeSafeCdkVirtualForDirective } from '@app/screen-task/type-safe-virtual-for';
import { deepEquals } from '@app/utils/assert';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';
import { CheckViewportSizeWhenValueChangesDirective } from './checkViewportSizeWhenValueChanges';
import { EmptyStateComponent } from './empty-state/empty-state';
import { ScrollToIndexDirective } from './scrollToIndex';
import { TasksFilterComponent } from './tasks-filter/tasks-filter';

const SEARCH_DEBOUNCE_MS = 100;
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

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
    TypeSafeCdkVirtualForDirective,
    DurationComponent,
    ToolbarWidthSyncDirective,
  ],
})
export default class ScreenTasksComponent {
  private store = inject(AppStore);
  private nameSearch = inject(TaskNameSearch);
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
  private decodedFilterParams = computed(() =>
    decodeFilterMatrixParams({
      search: this.search(),
      from: this.from(),
      to: this.to(),
      durationSort: this.durationSort(),
    }),
  );
  // The list follows the search 100 ms after the last keystroke: the form and the URL stay immediate, since the filter panel
  // reads decodedFilterParams. The first character and a cleared search apply at once.
  private listSearch = debounced(
    () => this.decodedFilterParams().search,
    (value, last) => (!value || last.status === 'error' || !last.value ? undefined : sleep(SEARCH_DEBOUNCE_MS)),
  );
  // The name search is not part of these: `nameMatches` carries it
  private taskFilterParams = computed(
    () => {
      const { search, ...filter } = this.decodedFilterParams();
      return { ...filter, state: this.state() };
    },
    { equal: deepEquals },
  );
  // Until the first result arrives, a search from the URL shows every task. After that the list keeps the last result
  // until the next one arrives, so it never flashes
  private nameMatches = signal<Set<TaskId> | undefined>(undefined);
  private currentTasks = computed(() =>
    filterTasks(this.taskFilterParams(), this.store.allTasks(), this.nameMatches()),
  );
  private dayBars = computed(() => chartBars(this.store.allTasks()));
  private filterChartData = computed(() => chartSeries(this.dayBars(), this.currentTasks()));
  private filterRange = computed(
    () => [this.decodedFilterParams().from ?? null, this.decodedFilterParams().to ?? null] as const,
  );

  private filterPresent = computed(() => !!Object.keys(this.decodedFilterParams()).length);
  private filterToggles = signal<boolean | undefined>(undefined);
  private searchOpened = computed(() => {
    const filterPresent = this.filterPresent();
    const filterToggles = this.filterToggles();
    return filterToggles !== undefined ? filterToggles : filterPresent;
  });

  // The currently open task detail component, set by the <router-outlet> activate/deactivate events
  private readonly openTask = signal<ScreenTaskComponent | undefined>(undefined);

  // For scrollToIndex in the template — index of the currently open task
  private currentTaskIndex = computed(() => {
    const taskId = this.openTask()?.taskId();
    return taskId ? this.currentTasks().findIndex((t) => t.id === taskId) : -1;
  });

  private isCurrentTaskOpened = computed(() => !!this.openTask());

  constructor() {
    // When a search opens, the workers get the names, so the first keystroke does not wait for them
    effect(() => {
      if (this.searchOpened()) this.nameSearch.prepare(this.store.allTasks()).catch((error) => console.error(error));
    });
    effect((onCleanup) => {
      const text = (this.listSearch.value() ?? '').trim();
      const tasks = this.store.allTasks();
      if (!text) return void this.nameMatches.set(undefined);
      let current = true;
      onCleanup(() => (current = false));
      this.nameSearch.search(text, tasks).then(
        (ids) => current && this.nameMatches.set(ids),
        (error) => console.error(error),
      );
    });
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

  private taskDuration = taskDuration;
  private tasksDuration = tasksDuration;
  private taskState = TaskState;
  private isTaskRunning = isTaskRunning;
  private taskId: TrackByFunction<Task> = (_, task) => task.id;

  private hotkeys = [
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

  private toggleFilter(opened?: boolean) {
    this.filterToggles.update(() => opened ?? !this.searchOpened());
  }
  private onDrop(
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
