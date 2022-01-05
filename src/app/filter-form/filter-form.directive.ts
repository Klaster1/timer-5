import { AfterViewInit, Directive, Input } from '@angular/core';
import { FormGroup } from '@ng-stack/forms';
import { map, take } from 'rxjs/operators';
import { FilterFormService } from './filter-form.service';

@Directive({
  selector: '[filterForm]',
})
export class FilterFormDirective<T extends object, V extends object> implements AfterViewInit {
  constructor(private filterFormService: FilterFormService<T>) {}

  @Input() formGroup?: FormGroup<T, V>;

  ngAfterViewInit() {
    this.formGroup?.valueChanges
      .pipe(map(() => this.formGroup?.getRawValue() as T))
      .subscribe((value) => this.filterFormService.next(value));

    this.filterFormService.filterParams$.pipe(take(1)).subscribe((value) => {
      this.formGroup?.patchValue(value);
    });
  }
}
