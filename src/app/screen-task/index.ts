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
import { ButtonSessionActionsModule } from '@app/button-session-actions';
import { ButtonTaskActionsModule } from '@app/button-task-actions';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { SessionDurationPipeModule } from '@app/pipes/session-duration.pipe';
import { TaskDurationPipeModule } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScreenTaskComponent } from './component';
import { ToStringPipeModule } from '@app/pipes/to-string.pipe';

export { ScreenTaskComponent };

@NgModule({
  declarations: [ScreenTaskComponent],
  entryComponents: [ScreenTaskComponent],
  exports: [ScreenTaskComponent],
  imports: [
    CommonModule,
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
    SessionDurationPipeModule,
    ButtonTaskActionsModule,
    ButtonSessionActionsModule,
    ToStringPipeModule
  ]
})
export class ScreenTaskModule { }
