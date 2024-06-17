import { enableProdMode, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withRouterConfig } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from '@app/app.component';
import { gameStateGuard } from '@app/guards/game-state.guard';
import { ScreenTaskComponent } from '@app/screen-task/screen-task.component';
import { ScreenTasksComponent } from '@app/screen-tasks/screen-tasks.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
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
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000',
      }),
    ),
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useFactory(): MatDialogConfig<any> {
        return { width: '600px', autoFocus: true };
      },
    },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { disableTooltipInteractivity: true } as MatTooltipDefaultOptions,
    },
  ],
});
