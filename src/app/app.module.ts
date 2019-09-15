import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from '../environments/environment';
import {StoreModule} from '@ngrx/store'
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {
    MatSidenavModule,
    MatListModule
} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as reducers from './ngrx/reducers'
import {Effects} from './ngrx/effects'
import {ScreenTasksModule} from './screen-tasks'
import {ScreenTaskModule} from './screen-task'
import {ScreenLoginModule} from './screen-login'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ScreenLoginModule,
    ScreenTasksModule,
    ScreenTaskModule,
    MatSidenavModule,
    MatListModule,
    StoreModule.forRoot(reducers.combinedReducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([Effects]),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
