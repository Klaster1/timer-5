import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenTasksComponent, ScreenTasksModule} from './screen-tasks'


const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks/all',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        children: [
            {
                path: ':state',
                component: ScreenTasksComponent
            }
        ]
    }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      ScreenTasksModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
