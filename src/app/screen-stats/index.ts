import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { NgStackFormsModule } from '@ng-stack/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScreenStatsComponent } from './component';
import { TimelineChartUplotComponent } from './timeline-chart-uplot.component';

@NgModule({
  imports: [
    MatCardModule,
    ReactiveComponentModule,
    NgStackFormsModule,
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    FormatDurationPipeModule,
    NgScrollbarModule,
  ],
  declarations: [ScreenStatsComponent, TimelineChartUplotComponent],
  exports: [ScreenStatsComponent],
})
export class ScreenStatsModule {}
