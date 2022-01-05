import { NgModule } from '@angular/core';
import { FilterFormDirective } from './filter-form.directive';
import { FilterFormService } from './filter-form.service';

@NgModule({
  declarations: [FilterFormDirective],
  exports: [FilterFormDirective],
  providers: [FilterFormService],
})
export class FilterFormModule {}
