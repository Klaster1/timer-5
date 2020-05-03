import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ScreenStatsComponent } from './component';
import { ReactiveComponentModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    MatCardModule,
    ReactiveComponentModule,
    CommonModule,
    RouterModule,
    MatTableModule,
    FormatDurationPipeModule,
    NgScrollbarModule,
  ],
  declarations: [ScreenStatsComponent],
  exports: [ScreenStatsComponent],
})
export class ScreenStatsModule {}
