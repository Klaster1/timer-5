import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { hasChartData, ScaleRange } from '@app/domain/chart';
import { closestDayEnd, closestDayStart, closestWeekEnd, closestWeekStart, toYesterday } from '@app/domain/date-time';
import { FilterMatrixParams } from '@app/domain/router';
import { StoreState } from '@app/domain/storage';
import { selectFilterChartData, selectFilterRange } from '@app/ngrx/selectors';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { Store } from '@ngrx/store';

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
})
export class TasksFilterComponent implements OnDestroy {
  constructor(private store: Store<StoreState>) {}
  hasChartData = hasChartData;
  form = new FormGroup<FilterMatrixParams>({
    search: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
    durationSort: new FormControl(),
  });
  timelineUplot$ = this.store.select(selectFilterChartData);
  chartRange$ = this.store.select(selectFilterRange);
  onChartRangeChange(e: ScaleRange) {
    this.form.patchValue({
      from: e[0] ?? undefined,
      to: e[1] ?? undefined,
    });
  }

  ngOnDestroy() {
    this.form.reset();
  }
  setAnyTime() {
    this.form.patchValue({
      from: undefined,
      to: undefined,
    });
  }
  setToday() {
    this.form.patchValue({
      from: closestDayStart(new Date()),
      to: closestDayEnd(new Date()),
    });
  }
  setYesterday() {
    this.form.patchValue({
      from: closestDayStart(toYesterday(new Date())),
      to: closestDayEnd(toYesterday(new Date())),
    });
  }
  setThisWeek() {
    this.form.patchValue({
      from: closestWeekStart(new Date()),
      to: closestWeekEnd(),
    });
  }
}
