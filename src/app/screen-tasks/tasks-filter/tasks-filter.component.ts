import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { animate, style, transition, trigger } from '@angular/animations';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { hasChartData, ScaleRange } from '@app/domain/chart';
import { encodeFilterParams, FilterMatrixParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { selectDecodedFilterParams, selectFilterChartData, selectFilterRange } from '@app/ngrx/selectors';
import { MapPipe } from '@app/pipes/map.pipe';
import { deepEquals } from '@app/utils/assert';
import { LetModule, PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import endOfDay from 'date-fns/endOfDay';
import endOfMonth from 'date-fns/endOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import startOfYear from 'date-fns/startOfYear';
import subDays from 'date-fns/subDays';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import subYears from 'date-fns/subYears';
import { merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ButtonResetInputComponent } from './button-reset-input.component';
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
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    A11yModule,
    CommonModule,
    MapPipe,
    TimelineChartUplotComponent,
    ButtonResetInputComponent,
  ],
})
export class TasksFilterComponent implements OnDestroy {
  constructor(private store: Store<StoreState>, private router: Router) {}
  hasChartData = hasChartData;
  form = new FormGroup<Wrap<FilterMatrixParams>>({
    search: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
    durationSort: new FormControl(),
  });
  subscriber = merge(
    this.form.valueChanges.pipe(
      debounceTime(10),
      distinctUntilChanged(deepEquals),
      tap((value) => this.router.navigate([], { queryParams: encodeFilterParams(value) }))
    ),
    this.store.select(selectDecodedFilterParams).pipe(
      tap((value) => {
        this.form.patchValue(value);
      })
    )
  ).subscribe();
  timelineUplot$ = this.store.select(selectFilterChartData);
  chartRange$ = this.store.select(selectFilterRange);
  onChartRangeChange(e: ScaleRange) {
    this.form.patchValue({
      from: e[0] ?? undefined,
      to: e[1] ?? undefined,
    });
  }

  ngOnDestroy() {
    this.router.navigate([], { queryParams: {} });
    this.subscriber.unsubscribe();
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
