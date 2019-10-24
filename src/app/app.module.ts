import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDialogModule } from '@angular/material/dialog'
import { HotkeyModule } from 'angular2-hotkeys';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonUserActionsModule } from './button-user-actions';
import { DialogEditSessionModule } from './dialog-edit-session';
import { DialogPromptModule } from './dialog-prompt';
import { Effects } from './ngrx/effects';
import { metaReducers } from './ngrx/metareducers';
import * as reducers from './ngrx/reducers';
import { ScreenLoginModule } from './screen-login';
import { ScreenTaskModule } from './screen-task';
import { ScreenTasksModule } from './screen-tasks';

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
    ButtonUserActionsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    TaskStateIconPipeModule,
    DialogPromptModule,
    DialogEditSessionModule,
    HotkeyModule.forRoot({ cheatSheetCloseEsc: true }),
    StoreModule.forRoot(reducers.combinedReducers, {
      metaReducers,
      initialState: { router: null },
      runtimeChecks: {
        strictStateImmutability: true,
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([Effects])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (icons: MatIconRegistry, sanitizer: DomSanitizer) => () => {
        icons.addSvgIcon(
          'timer-logo',
          sanitizer.bypassSecurityTrustResourceUrl('../assets/logo.svg')
        );
      },
      deps: [MatIconRegistry, DomSanitizer]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
