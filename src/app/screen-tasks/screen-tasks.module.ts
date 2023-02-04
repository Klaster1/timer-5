import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { RouterModule } from '@angular/router';
import { ButtonTaskActionsModule } from '@app/button-task-actions/button-task-actions.module';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { MapPipeModule } from '@app/pipes/map.pipe';
import { TaskDurationPipeModule } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipeModule } from '@app/pipes/task-state.pipe';
import { TasksDurationPipeModule } from '@app/pipes/tasks-duration.pipe';
import { NgsFormsModule } from '@ng-stack/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CheckViewportSizeWhenValueChangesDirective } from './checkViewportSizeWhenValueChanges.directive';
import { EmptyStateModule } from './empty-state/empty-state.module';
import { FixRouterLinkActiveDirective } from './fixRouterLinkActive.directive';
import { ScreenTasksComponent } from './screen-tasks.component';
import { ScrollToIndexDirective } from './scrollToIndex.directive';
import { TasksFilterModule } from './tasks-filter/tasks-filter.module';

@NgModule({
  declarations: [
    ScreenTasksComponent,
    ScrollToIndexDirective,
    FixRouterLinkActiveDirective,
    CheckViewportSizeWhenValueChangesDirective,
  ],
  exports: [ScreenTasksComponent],
  imports: [
    EmptyStateModule,
    TasksFilterModule,
    CommonModule,
    NgsFormsModule,
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
    MapPipeModule,
    DragDropModule,
  ],
})
export class ScreenTasksModule {}
