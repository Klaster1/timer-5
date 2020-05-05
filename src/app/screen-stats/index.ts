import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ScreenStatsComponent } from './component';
import { ReactiveComponentModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgStackFormsModule } from '@ng-stack/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimelineChartComponent } from './timeline-chart.component';
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
  declarations: [ScreenStatsComponent, TimelineChartComponent, TimelineChartUplotComponent],
  exports: [ScreenStatsComponent],
})
export class ScreenStatsModule {}
