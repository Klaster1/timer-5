import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatDialogConfig, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskStateIconPipeModule } from '@app/pipes/task-state-icon.pipe';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { MinimalRouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HotkeyModule } from 'angular2-hotkeys';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogEditSessionModule } from './dialog-edit-session/dialog-edit-session.module';
import { DialogHotkeysCheatsheetModule } from './dialog-hotkeys-cheatsheet/dialog-hotkeys-cheatsheet.module';
import { DialogPromptModule } from './dialog-prompt/dialog-prompt.module';
import { isValidISO8601String } from './domain/date';
import { FilterFormModule } from './filter-form/filter-form.module';
import { Effects } from './ngrx/effects';
import { metaReducers } from './ngrx/metareducers';
import * as reducers from './ngrx/reducers';
import { ScreenTaskModule } from './screen-task/screen-task.module';
import { ScreenTasksModule, TasksFilterRouteParams } from './screen-tasks/screen-tasks.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveComponentModule,
    AppRoutingModule,
    ScreenTasksModule,
    ScreenTaskModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    TaskStateIconPipeModule,
    DialogPromptModule,
    DialogEditSessionModule,
    HttpClientModule,
    DialogHotkeysCheatsheetModule,
    HotkeyModule.forRoot({ cheatSheetCloseEsc: true }),
    StoreModule.forRoot(reducers.combinedReducers, {
      metaReducers,
      initialState: { router: null },
      runtimeChecks: {
        strictStateImmutability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: MinimalRouterStateSerializer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([Effects]),
    FilterFormModule.forChild<TasksFilterRouteParams>({
      urlFragmentIndex: 2,
      encodeValue(pair) {
        switch (pair?.[0]) {
          case 'search':
            return pair?.[1] ? ([pair?.[0], pair?.[1]] as const) : null;
          case 'from':
          case 'to':
            return pair?.[1] ? ([pair?.[0], pair?.[1].toISOString()] as const) : null;
          case 'durationSort':
            switch (pair?.[1]) {
              case 'longestFirst':
              case 'shortestFirst':
                return [pair?.[0], pair?.[1]] as const;
              default:
                return null;
            }
          default:
            return null;
        }
      },
      decodeValue(key, rawValue) {
        switch (key) {
          case 'search':
            return [key, rawValue];
          case 'from':
          case 'to':
            return isValidISO8601String(rawValue) ? [key, new Date(rawValue)] : null;
          case 'durationSort': {
            switch (rawValue) {
              case 'longestFirst':
              case 'shortestFirst':
                return [key, rawValue];
              default:
                return null;
            }
          }
          default:
            return null;
        }
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (icons: MatIconRegistry, sanitizer: DomSanitizer) => () => {
        icons.addSvgIcon('timer-logo', sanitizer.bypassSecurityTrustResourceUrl('../assets/logo.svg'));
      },
      deps: [MatIconRegistry, DomSanitizer],
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useFactory(): MatDialogConfig<any> {
        return { width: '520px', autoFocus: true };
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
