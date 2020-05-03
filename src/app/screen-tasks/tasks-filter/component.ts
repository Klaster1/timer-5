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
        console.log(value);
        this.value.emit(value);
      })
    )
    .subscribe();

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
  setFromToday() {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    this._form.controls.from.setValue(date);
  }
  setFromYesterday() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    this._form.controls.from.setValue(date);
  }
  setFromWeek() {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    const day = date.getDay();
    const diff = date.getDate() - day + (day == 0 ? -6 : 1);
    date.setDate(diff);
    this._form.controls.from.setValue(date);
  }
  setFromMonth() {
    const date = new Date();
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    this._form.controls.from.setValue(date);
  }
  setFromYear() {
    const date = new Date();
    date.setMonth(0);
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    this._form.controls.from.setValue(date);
  }
}
