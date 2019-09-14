import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenTasksComponent} from './screen-tasks'
import {ScreenTaskComponent} from './screen-task'


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
                component: ScreenTasksComponent,
                children: [
                    {
                        path: ':taskId',
                        component: ScreenTaskComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
