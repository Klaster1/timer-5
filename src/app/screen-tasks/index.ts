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
import { FilterFormsSettings, FILTER_FORM_SETTINGS } from '@app/filter-form/types';
import { FormatDurationPipeModule } from '@app/pipes/format-duration.pipe';
import { TaskDurationPipeModule } from '@app/pipes/task-duration.pipe';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { TaskStatePipeModule } from '@app/pipes/task-state.pipe';
import { TasksDurationPipeModule } from '@app/pipes/tasks-duration.pipe';
import { isTruthy } from '@app/utils/assert';
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
  ],
  providers: [
    {
      provide: FILTER_FORM_SETTINGS,
      useValue: {
        decode(v) {
          const fragment = v.split('/')[2];
          if (!fragment) return {};
          return Object.fromEntries(
            fragment
              .split(';')
              .filter((param) => param.includes('='))
              .map((param) => param.split('='))
              .map(([key, rawValue]) => {
                if (!rawValue) return null;
                switch (key) {
                  case 'search':
                    return [key, decodeURIComponent(rawValue)];
                  case 'from':
                  case 'to':
                    return [key, new Date(decodeURIComponent(rawValue))];
                  default:
                    return null;
                }
              })
              .filter(isTruthy)
          );
        },
        encode(v, url) {
          const params = `${v.search ? `search=${encodeURIComponent(v.search)};` : ''}${
            v.from instanceof Date ? `from=${encodeURIComponent(v.from.toISOString())};` : ''
          }${v.to instanceof Date ? `to=${encodeURIComponent(v.to.toISOString())};` : ''}`;
          // [ "", "tasks", "all", "kvb4yqd5" ]
          return url
            .split('/')
            .map((fragment, i) => (i === 2 ? `${fragment.split(';')[0]}${params ? `;${params}` : ''}` : fragment))
            .join('/');
        },
      } as FilterFormsSettings<TasksFilterRouteParams>,
    },
  ],
})
export class ScreenTasksModule {}
