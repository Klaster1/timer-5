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
import { EmptyStateModule } from '@app/empty-state';
import { FilterFormModule } from '@app/filter-form/filter-form.module';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { TaskDurationPipeModule } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipeModule } from '@app/pipes/task-state.pipe';
import { TasksDurationPipeModule } from '@app/pipes/tasks-duration.pipe';
import { NgStackFormsModule } from '@ng-stack/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CheckViewportSizeWhenValueChangesDirective } from './checkViewportSizeWhenValueChanges.directive';
import { ScreenTasksComponent } from './component';
import { FixRouterLinkActiveDirective } from './fixRouterLinkActive.directive';
import { ScrollToIndexDirective } from './scrollToIndex.directive';
import { TasksFilterModule } from './tasks-filter/module';

export { ScreenTasksComponent };

export type TasksFilterRouteParams = {
  search?: string;
  from?: Date;
  to?: Date;
};

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
    NgStackFormsModule,
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
    FilterFormModule.forChild<TasksFilterRouteParams>({
      urlFragmentIndex: 2,
      encodeValue(pair) {
        switch (pair?.[0]) {
          case 'search':
            return pair?.[1] ? ([pair?.[0], pair?.[1]] as const) : null;
          case 'from':
          case 'to':
            return pair?.[1] ? ([pair?.[0], pair?.[1].toISOString()] as const) : null;
          default:
            return null;
        }
      },
      decodeValue(key, rawValue) {
        switch (key) {
          case 'search':
            return [key, rawValue];
          case 'from':
          case 'to':
            return [key, new Date(rawValue)];
          default:
            return null;
        }
      },
    }),
  ],
})
export class ScreenTasksModule {}
