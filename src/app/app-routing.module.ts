import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenTasksComponent, ScreenTasksModule} from './screen-tasks'


const routes: Routes = [
    {
        path: '',
        component: ScreenTasksComponent
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
