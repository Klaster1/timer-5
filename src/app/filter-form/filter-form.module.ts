import { ModuleWithProviders, NgModule } from '@angular/core';
import { FilterFormDirective } from './filter-form.directive';
import { FilterFormService } from './filter-form.service';
import { FilterFormsSettings, FILTER_FORM_SETTINGS } from './types';

@NgModule({
  declarations: [FilterFormDirective],
  exports: [FilterFormDirective],
  providers: [FilterFormService],
})
export class FilterFormModule {
  static forChild<T extends object>(settings: FilterFormsSettings<T>): ModuleWithProviders<FilterFormModule> {
    return {
      ngModule: FilterFormModule,
      providers: [
        {
          provide: FILTER_FORM_SETTINGS,
          useValue: settings,
        },
      ],
    };
  }
}
