import { animate, style, transition, trigger } from '@angular/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { DatetimeLocalDirective } from '@app/directives/datetime-local.directive';
import { ScaleRange, hasChartData } from '@app/domain/chart';
import { FilterMatrixParams, encodeFilterParams } from '@app/domain/router';
import { MapPipe } from '@app/pipes/map.pipe';
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
import { ButtonResetInputComponent } from '../../directives/button-reset-input.component';
import { TimelineChartUplotComponent } from './timeline-chart-uplot.component';

type Wrap<T> = Required<{ [Key in keyof T]: FormControl<T[Key]> }>;

@Component({
  selector: 'tasks-filter',
  templateUrl: './tasks-filter.component.html',
  styleUrls: ['./tasks-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))]),
    ]),
  ],
  standalone: true,
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
    ReactiveFormsModule,
    A11yModule,
    MapPipe,
    TimelineChartUplotComponent,
    ButtonResetInputComponent,
    DatetimeLocalDirective,
    NgTemplateOutlet,
    MatTooltip,
  ],
})
export class TasksFilterComponent {
  private store = inject(AppStore);
  private router = inject<Router>(Router);
  private destroyRef = inject(DestroyRef);

  public dataRange = computed(() => {
    const data = this.store.filterChartData();
    const range = this.store.filterRange();
    if (!hasChartData(data) || !range) return undefined;
    return { data, range } as const;
  });

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.router.navigate([], { queryParams: {} });
    });
    effect(() => {
      const decodedFilterParams = this.store.decodedFilterParams();
      this.form.patchValue(decodedFilterParams);
    });
    this.form.valueChanges
      .pipe(debounceTime(10), distinctUntilChanged(deepEquals), takeUntilDestroyed())
      .subscribe((value) => this.router.navigate([], { queryParams: encodeFilterParams(value) }));
  }

  hasChartData = hasChartData;
  form = new FormGroup<Wrap<FilterMatrixParams>>({
    search: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
    durationSort: new FormControl(),
  });

  onChartRangeChange(e: ScaleRange) {
    this.form.patchValue({
      from: e[0] ?? undefined,
      to: e[1] ?? undefined,
    });
  }

  setAnyTime() {
    this.form.patchValue({
      from: undefined,
      to: undefined,
    });
  }
  setToday() {
    this.form.patchValue({
      from: startOfDay(new Date()),
      to: endOfDay(new Date()),
    });
  }
  setYesterday() {
    this.form.patchValue({
      from: startOfDay(subDays(new Date(), 1)),
      to: endOfDay(subDays(new Date(), 1)),
    });
  }
  setThisWeek() {
    this.form.patchValue({
      from: startOfWeek(new Date(), { weekStartsOn: 1 }),
      to: endOfWeek(new Date(), { weekStartsOn: 1 }),
    });
  }
  setPreviousWeek() {
    this.form.patchValue({
      from: startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
      to: endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
    });
  }
  setThisMonth() {
    this.form.patchValue({
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    });
  }
  setPreviousMonth() {
    this.form.patchValue({
      from: startOfMonth(subMonths(new Date(), 1)),
      to: endOfMonth(subMonths(new Date(), 1)),
    });
  }
  setThisYear() {
    this.form.patchValue({
      from: startOfYear(new Date()),
      to: endOfYear(new Date()),
    });
  }
  setPreviousYear() {
    this.form.patchValue({
      from: startOfYear(subYears(new Date(), 1)),
      to: endOfYear(subYears(new Date(), 1)),
    });
  }
}
