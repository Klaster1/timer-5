import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { RouterModule } from '@angular/router';
import { ButtonTaskActionsModule } from '@app/button-task-actions/button-task-actions.module';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { MapPipeModule } from '@app/pipes/map.pipe';
import { TaskDurationPipeModule } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { LetModule, PushModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ButtonSessionActionsModule } from './button-session-actions/button-session-actions.module';
import { ScreenTaskComponent } from './screen-task.component';

@NgModule({
  declarations: [ScreenTaskComponent],
  exports: [ScreenTaskComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
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
