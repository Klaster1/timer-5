import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { closestDayEnd, closestDayStart, closestWeekEnd, closestWeekStart, toYesterday } from '@app/domain/date';
import { currentStateTasksStats } from '@app/ngrx/selectors';
import { StoreState, TasksFilterParams } from '@app/types';
import { WrapControls } from '@app/types/form';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, pluck, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'tasks-filter',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))]),
    ]),
  ],
})
export class TasksFilterComponent implements OnDestroy {
  constructor(private store: Store<StoreState>) {}
  hasChartData = (data: number[][]): boolean => !!data[0]?.length;
  @Output() value = new EventEmitter<TasksFilterParams>();
  form = new FormGroup<WrapControls<TasksFilterParams>>({
    search: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
    taskId: new FormControl(),
  });
  timelineUplot$ = this.store.pipe(currentStateTasksStats({ timelineStep: 'day' }), pluck('timeline', 'uPlotData'));
  chartRange$: Observable<[Date | null, Date]> = this.form.valueChanges.pipe(
    startWith({}),
    map(() => {
      const { from, to } = this.form.getRawValue();
      return [from ?? null, to ?? new Date()];
    })
  );
  onChartRangeChange(e: [Date, Date]) {
    this.form.patchValue({
      from: e[0],
      to: e[1],
    });
  }
  private subscriber = this.form.valueChanges
    .pipe(
      startWith(this.form.value),
      tap((value) => {
        this.value.emit(value);
      })
    )
    .subscribe();

  @ViewChild('searchInput')
  set searchInput(value: ElementRef<HTMLInputElement>) {
    setTimeout(() => {
      value?.nativeElement.focus();
    });
  }

  ngOnDestroy() {
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
      to: closestWeekEnd(new Date()),
    });
  }
}
