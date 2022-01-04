import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStateGuard } from './guards/game-state.guard';
import { ScreenStatsComponent } from './screen-stats/component';
import { ScreenTaskComponent } from './screen-task';
import { ScreenTasksComponent } from './screen-tasks';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    children: [
      { path: '', redirectTo: 'tasks/active', pathMatch: 'full' },
      {
        path: ':state',
        component: ScreenTasksComponent,
        canActivate: [GameStateGuard],
        children: [
          {
            path: ':taskId',
            component: ScreenTaskComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'stats',
    component: ScreenStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
