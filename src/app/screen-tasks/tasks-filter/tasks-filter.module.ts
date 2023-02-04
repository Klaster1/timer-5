import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MapPipeModule } from '@app/pipes/map.pipe';
import { NgsFormsModule } from '@ng-stack/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { ButtonResetInputComponent } from './button-reset-input.component';
import { TasksFilterComponent } from './tasks-filter.component';
import { TimelineChartUplotComponent } from './timeline-chart-uplot.component';

@NgModule({
  declarations: [TasksFilterComponent, ButtonResetInputComponent, TimelineChartUplotComponent],
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    NgsFormsModule,
    ReactiveComponentModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    A11yModule,
    CommonModule,
    MapPipeModule,
  ],
  exports: [TasksFilterComponent],
})
export class TasksFilterModule {}
