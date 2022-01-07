import { AfterViewInit, Directive, Input } from '@angular/core';
import { FormGroup } from '@ng-stack/forms';
import { FilterFormService } from './filter-form.service';

@Directive({
  selector: '[filterForm]',
})
export class FilterFormDirective<T extends object, V extends object> implements AfterViewInit {
  constructor(private filterFormService: FilterFormService<T>) {}

  @Input() formGroup?: FormGroup<T, V>;

  ngAfterViewInit() {
    this.formGroup?.valueChanges.subscribe(() => this.filterFormService.next(this.formGroup?.getRawValue() as T));
    this.filterFormService.filterParams$.subscribe((value) => this.formGroup?.patchValue(value));
  }
}
