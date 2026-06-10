import { animate, style, transition, trigger } from '@angular/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { Component, DestroyRef, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormField, FormRoot, form as signalForm } from '@angular/forms/signals';
import { MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DatetimeLocalDirective } from '@app/directives/datetime-local';
import { ChartData, ScaleRange, hasChartData } from '@app/domain/chart';
import { FilterMatrixParams, encodeFilterParams } from '@app/domain/router';
import { AppStore } from '@app/providers/state';
import { deepEquals } from '@app/utils/assert';
import { endOfDay } from 'date-fns/endOfDay';
import { endOfMonth } from 'date-fns/endOfMonth';
import { endOfWeek } from 'date-fns/endOfWeek';
import { endOfYear } from 'date-fns/endOfYear';
import { startOfDay } from 'date-fns/startOfDay';
import { startOfMonth } from 'date-fns/startOfMonth';
import { startOfWeek } from 'date-fns/startOfWeek';
import { startOfYear } from 'date-fns/startOfYear';
import { subDays } from 'date-fns/subDays';
import { subMonths } from 'date-fns/subMonths';
import { subWeeks } from 'date-fns/subWeeks';
import { subYears } from 'date-fns/subYears';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ButtonResetInputComponent } from '../../directives/button-reset-input';
import { TimelineChartUplotComponent } from './timeline-chart-uplot';

interface FilterFormData {
  search: string;
  from: Date | null;
  to: Date | null;
  durationSort: 'longestFirst' | 'shortestFirst' | null;
}

@Component({
  selector: 'tasks-filter',
  templateUrl: './tasks-filter.html',
  styleUrls: ['./tasks-filter.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))]),
    ]),
  ],
  imports: [
    MatIconButton,
    MatSelect,
    MatOption,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatFormField,
    MatSuffix,
    MatLabel,
    MatInput,
    FormField,
    FormRoot,
    DatetimeLocalDirective,
    A11yModule,
    TimelineChartUplotComponent,
    ButtonResetInputComponent,
    MatTooltip,
  ],
})
export class TasksFilterComponent {
  private store = inject(AppStore);
  private router = inject<Router>(Router);
  private destroyRef = inject(DestroyRef);

  // Inputs from parent (screen-tasks)
  public readonly chartData = input<ChartData | undefined>(undefined);
  public readonly filterRange = input<readonly [Date | null, Date | null] | undefined>(undefined);
  public readonly decodedFilterParams = input<FilterMatrixParams>({});

  public hasAnyTasks = computed(() => this.store.allTasks().length > 0);

  public dataRange = computed(() => {
    const data = this.chartData();
    const range = this.filterRange();
    if (!data || !hasChartData(data) || !range) return undefined;
    return { data, range } as const;
  });

  filterModel = signal<FilterFormData>({
    search: '',
    from: null,
    to: null,
    durationSort: null,
  });
  form = signalForm(this.filterModel);

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.router.navigate([], { queryParams: {} });
    });
    effect(() => {
      const params = this.decodedFilterParams();
      this.filterModel.set({
        search: params.search ?? '',
        from: params.from ?? null,
        to: params.to ?? null,
        durationSort: params.durationSort ?? null,
      });
    });
    // TODO: replace with debounced() from @angular/core once its async timing
    // is compatible with the URL↔form sync loop (currently breaks filter tests).
    toObservable(this.filterModel)
      .pipe(debounceTime(10), distinctUntilChanged(deepEquals), takeUntilDestroyed())
      .subscribe((value) =>
        this.router.navigate([], { queryParams: encodeFilterParams(this.toFilterParams(value)) }),
      );
  }

  hasChartData = hasChartData;

  private toFilterParams(data: FilterFormData): FilterMatrixParams {
    return {
      search: data.search || undefined,
      from: data.from ?? undefined,
      to: data.to ?? undefined,
      durationSort: data.durationSort ?? undefined,
    };
  }

  onChartRangeChange(e: ScaleRange) {
    this.filterModel.update((m) => ({ ...m, from: e[0], to: e[1] }));
  }

  setAnyTime() {
    this.filterModel.update((m) => ({ ...m, from: null, to: null }));
  }
  setToday() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfDay(new Date()),
      to: endOfDay(new Date()),
    }));
  }
  setYesterday() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfDay(subDays(new Date(), 1)),
      to: endOfDay(subDays(new Date(), 1)),
    }));
  }
  setThisWeek() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfWeek(new Date(), { weekStartsOn: 1 }),
      to: endOfWeek(new Date(), { weekStartsOn: 1 }),
    }));
  }
  setPreviousWeek() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
      to: endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
    }));
  }
  setThisMonth() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    }));
  }
  setPreviousMonth() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfMonth(subMonths(new Date(), 1)),
      to: endOfMonth(subMonths(new Date(), 1)),
    }));
  }
  setThisYear() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfYear(new Date()),
      to: endOfYear(new Date()),
    }));
  }
  setPreviousYear() {
    this.filterModel.update((m) => ({
      ...m,
      from: startOfYear(subYears(new Date(), 1)),
      to: endOfYear(subYears(new Date(), 1)),
    }));
  }
}
