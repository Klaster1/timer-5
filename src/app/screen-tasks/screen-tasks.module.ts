import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { ButtonTaskActionsComponent } from '@app/button-task-actions/button-task-actions.component';
import { FormatDurationPipe } from '@app/pipes/format-duration.pipe';
import { MapPipe } from '@app/pipes/map.pipe';
import { TaskDurationPipe } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipe } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipe } from '@app/pipes/task-state.pipe';
import { TasksDurationPipe } from '@app/pipes/tasks-duration.pipe';
import { NgsFormsModule } from '@ng-stack/forms';
import { LetModule, PushModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CheckViewportSizeWhenValueChangesDirective } from './checkViewportSizeWhenValueChanges.directive';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { FixRouterLinkActiveDirective } from './fixRouterLinkActive.directive';
import { ScreenTasksComponent } from './screen-tasks.component';
import { ScrollToIndexDirective } from './scrollToIndex.directive';
import { TasksFilterComponent } from './tasks-filter/tasks-filter.component';

@NgModule({
  declarations: [ScreenTasksComponent],
  exports: [ScreenTasksComponent],
  imports: [
    EmptyStateComponent,
    TasksFilterComponent,
    CommonModule,
    NgsFormsModule,
    LetModule,
    PushModule,
    TaskStatePipe,
    FormatDurationPipe,
    TaskDurationPipe,
    TasksDurationPipe,
    TaskStateIconPipe,
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
    ButtonTaskActionsComponent,
    MapPipe,
    DragDropModule,
    CheckViewportSizeWhenValueChangesDirective,
    FixRouterLinkActiveDirective,
    ScrollToIndexDirective,
  ],
})
export class ScreenTasksModule {}
