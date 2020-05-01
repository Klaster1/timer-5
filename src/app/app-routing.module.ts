import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenTasksComponent } from './screen-tasks';
import { ScreenTaskComponent } from './screen-task';
import { GameStateGuard } from './guards/game-state.guard';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
