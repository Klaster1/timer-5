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
import { TasksFilterParams } from '@app/types';
import { WrapControls } from '@app/types/form';
import { FormControl, FormGroup } from '@ng-stack/forms';
import { startWith, tap } from 'rxjs/operators';

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
