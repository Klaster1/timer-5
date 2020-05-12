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
  _form = new FormGroup<WrapControls<TasksFilterParams>>({
    search: new FormControl(''),
    from: new FormControl(undefined),
    to: new FormControl(undefined),
  });
  @Output()
  value = new EventEmitter<TasksFilterParams>();

  @ViewChild('searchInput')
  set searchInput(value: ElementRef<HTMLInputElement>) {
    setTimeout(() => {
      value?.nativeElement.focus();
    });
  }

  private subscriber = this._form.valueChanges
    .pipe(
      startWith(this._form.value),
      tap((value) => {
        this.value.emit(value);
      })
    )
    .subscribe();

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
  setToday() {
    this._form.patchValue({
      from: closestDayStart(new Date()),
      to: closestDayEnd(new Date()),
    });
  }
  setYesterday() {
    this._form.patchValue({
      from: closestDayStart(toYesterday(new Date())),
      to: closestDayEnd(toYesterday(new Date())),
    });
  }
  setThisWeek() {
    this._form.patchValue({
      from: closestWeekStart(new Date()),
      to: closestWeekEnd(new Date()),
    });
  }
}
