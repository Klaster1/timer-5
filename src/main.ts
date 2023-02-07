import { NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { MatDialogConfig, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withRouterConfig } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from '@app/app.component';
import { gameStateGuard } from '@app/guards/game-state.guard';
import { Effects } from '@app/ngrx/effects';
import { ScreenTaskComponent } from '@app/screen-task/screen-task.component';
import { ScreenTasksComponent } from '@app/screen-tasks/screen-tasks.component';
import { provideEffects } from '@ngrx/effects';
import { MinimalRouterStateSerializer, provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { HotkeyModule } from 'angular2-hotkeys';
import { metaReducers } from './app/ngrx/metareducers';
import * as reducers from './app/ngrx/reducers';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    provideStore(reducers.combinedReducers, {
      metaReducers,
      initialState: { router: null },
      runtimeChecks: {
        strictStateImmutability: true,
      },
    }),
    importProvidersFrom(HotkeyModule.forRoot({ cheatSheetCloseEsc: true })),
    provideRouter(
      [
        { path: '', redirectTo: 'active', pathMatch: 'full' },
        {
          path: ':state',
          component: ScreenTasksComponent,
          canActivate: [gameStateGuard],
          children: [
            {
              path: ':taskId',
              component: ScreenTaskComponent,
            },
          ],
        },
      ],
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideRouterStore({
      serializer: MinimalRouterStateSerializer,
    }),
    provideEffects([Effects]),
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000',
      })
    ),
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useFactory(): MatDialogConfig<any> {
        return { width: '520px', autoFocus: true };
      },
    },
    importProvidersFrom(NgxMatNativeDateModule),
  ],
});
