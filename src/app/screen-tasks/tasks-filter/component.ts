import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TasksFilterParams } from '@app/types';
import { timer, Observable, BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { shareReplay, map, tap, startWith, take } from 'rxjs/operators';
import { FormControl, FormGroup, Control } from '@ng-stack/forms';
import { WrapControls } from '@app/types/form';
import {
  dateDayStart,
  dateYesterdayStart,
  dateMonday,
  dateMonthStart,
  dateYearStart,
  closestDayStart,
  closestDayEnd,
  toYesterday,
  closestWeekStart,
  closestWeekEnd,
} from '@app/domain/date';

@Component({
  selector: 'tasks-filter',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksFilterComponent implements OnDestroy {
  @Output() value = new EventEmitter<TasksFilterParams>();
  form = new FormGroup<WrapControls<TasksFilterParams>>({
    search: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
  });
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
