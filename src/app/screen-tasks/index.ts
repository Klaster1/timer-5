import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ButtonTaskActionsModule } from '@app/button-task-actions';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { TaskDurationPipeModule } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipeModule } from '@app/pipes/task-state.pipe';
import { TasksDurationPipeModule } from '@app/pipes/tasks-duration.pipe';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ScreenTasksComponent } from './component';
import { ScrollIntoViewIfDirective } from './scrollIntoViewIf.directive';

export { ScreenTasksComponent };

@NgModule({
  declarations: [ScreenTasksComponent, ScrollIntoViewIfDirective],
  entryComponents: [ScreenTasksComponent],
  exports: [ScreenTasksComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TaskStatePipeModule,
    FormatDurationPipeModule,
    TaskDurationPipeModule,
    TasksDurationPipeModule,
    TaskStateIconPipeModule,
    RouterModule,
    ScrollingModule,
    NgScrollbarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    ButtonTaskActionsModule,
  ],
})
export class ScreenTasksModule {}
