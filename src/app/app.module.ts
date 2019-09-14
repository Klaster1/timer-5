import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from '../environments/environment';
import {StoreModule} from '@ngrx/store'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as reducers from './ngrx/reducers'
import {Effects} from './ngrx/effects'
import {ScreenTasksModule} from './screen-tasks'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScreenTasksModule,
    StoreModule.forRoot({
        tasks: reducers.tasks
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([Effects]),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
