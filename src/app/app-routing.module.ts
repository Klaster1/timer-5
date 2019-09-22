import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    canActivate,
    redirectLoggedInTo,
    redirectUnauthorizedTo,
    AngularFireAuthGuardModule
} from '@angular/fire/auth-guard';

import {ScreenTasksComponent} from './screen-tasks';
import {ScreenTaskComponent} from './screen-task';
import {ScreenLoginComponent} from './screen-login';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: ScreenLoginComponent,
        // ...canActivate(redirectLoggedInTo(['tasks', 'active']))
    },
    {
        path: 'tasks',
        // ...canActivate(redirectUnauthorizedTo(['login'])),
        children: [
            {path: '', redirectTo: 'tasks/active', pathMatch: 'full'},
            {
                path: ':state',
                component: ScreenTasksComponent,
                children: [
                    {
                        path: ':taskId',
                        component: ScreenTaskComponent,
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'}),
      AngularFireAuthGuardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
