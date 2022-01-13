import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ButtonTaskActionsModule } from '@app/button-task-actions/button-task-actions.module';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { MapPipeModule } from '@app/pipes/map.pipe';
import { TaskDurationPipeModule } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ButtonSessionActionsModule } from './button-session-actions/button-session-actions.module';
import { ScreenTaskComponent } from './screen-task.component';

@NgModule({
  declarations: [ScreenTaskComponent],
  exports: [ScreenTaskComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    RouterModule,
    TaskStateIconPipeModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    NgScrollbarModule,
    FormatDurationPipeModule,
    TaskDurationPipeModule,
    ButtonTaskActionsModule,
    ButtonSessionActionsModule,
    MapPipeModule,
    DragDropModule,
  ],
})
export class ScreenTaskModule {}
