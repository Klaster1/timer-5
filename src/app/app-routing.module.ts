import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStateGuard } from './guards/game-state.guard';
import { ScreenTaskComponent } from './screen-task/screen-task.component';
import { ScreenTasksComponent } from './screen-tasks/screen-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'active', pathMatch: 'full' },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
