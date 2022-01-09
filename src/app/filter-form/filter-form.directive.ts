import { AfterViewInit, Directive, Input } from '@angular/core';
import { deepEquals } from '@app/utils/assert';
import { FormGroup } from '@ng-stack/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { FilterFormService } from './filter-form.service';

@Directive({
  selector: '[filterForm]',
})
export class FilterFormDirective<T extends object, V extends object> implements AfterViewInit {
  constructor(private filterFormService: FilterFormService<T>) {}

  @Input() formGroup?: FormGroup<T, V>;

  ngAfterViewInit() {
    this.formGroup?.valueChanges
      .pipe(
        debounceTime(10),
        map(() => this.formGroup?.getRawValue() as T),
        distinctUntilChanged(deepEquals)
      )
      .subscribe((value) => this.filterFormService.next(value));
    this.filterFormService.filterParams$.subscribe((value) => this.formGroup?.patchValue(value));
  }
}
