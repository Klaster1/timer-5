import { provideHttpClient } from '@angular/common/http';
import {
  APP_INITIALIZER,
  DestroyRef,
  enableProdMode,
  importProvidersFrom,
  inject,
  isDevMode,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { DomSanitizer, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withRouterConfig } from '@angular/router';
import { SwUpdate, provideServiceWorker } from '@angular/service-worker';
import { AppComponent } from '@app/app.component';
import { gameStateGuard } from '@app/guards/game-state.guard';
import { HotkeyModule } from 'angular2-hotkeys';
import { secondsToMilliseconds } from 'date-fns/secondsToMilliseconds';
import { interval } from 'rxjs';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimations(),
    importProvidersFrom(HotkeyModule.forRoot({ cheatSheetCloseEsc: true })),
    provideRouter(
      [
        { path: '', redirectTo: 'active', pathMatch: 'full' },
        {
          path: ':state',
          loadComponent: () => import('./app/screen-tasks/screen-tasks.component'),
          canActivate: [gameStateGuard],
          children: [
            {
              path: ':taskId',
              loadComponent: () => import('./app/screen-task/screen-task.component'),
            },
          ],
        },
      ],
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
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
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const sw = inject(SwUpdate);
        const destroyRef = inject(DestroyRef);
        const snackbar = inject(MatSnackBar);
        return () => {
          interval(secondsToMilliseconds(60))
            .pipe(takeUntilDestroyed(destroyRef))
            .subscribe(() => sw.checkForUpdate());
          sw.versionUpdates.pipe(takeUntilDestroyed(destroyRef)).subscribe((evt) => {
            if (evt.type === 'VERSION_READY') {
              snackbar
                .open('New version available', 'Reload')
                .onAction()
                .subscribe(() => {
                  location.reload();
                });
            }
          });
        };
      },
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        return () => {
          iconRegistry.addSvgIconResolver((name) => {
            return sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`);
          });
        };
      },
    },
  ],
});
