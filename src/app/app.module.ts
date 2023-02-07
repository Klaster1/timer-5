import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LetModule, PushModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { MinimalRouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { HotkeyModule, HotkeysService } from 'angular2-hotkeys';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogHotkeysCheatsheetComponent } from './dialog-hotkeys-cheatsheet/dialog-hotkeys-cheatsheet.component';
import { Effects } from './ngrx/effects';
import { metaReducers } from './ngrx/metareducers';
import * as reducers from './ngrx/reducers';
import { MapPipe } from './pipes/map.pipe';
import { SafeUrlPipe } from './pipes/safe-resource-url.pipe';
import { TaskStateIconPipe } from './pipes/task-state-icon.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LetModule,
    PushModule,
    AppRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    TaskStateIconPipe,
    MapPipe,
    DragDropModule,
    SafeUrlPipe,
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
    EffectsModule.forRoot([Effects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useFactory(): MatDialogConfig<any> {
        return { width: '520px', autoFocus: true };
      },
    },
    {
      provide: APP_INITIALIZER,
      useFactory(hotkeysService: HotkeysService, dialogs: MatDialog) {
        return () => {
          let isDialogOpen = false;
          hotkeysService.cheatSheetToggle.subscribe((isOpen) => {
            if (isOpen === false) {
              isDialogOpen = false;
              dialogs.getDialogById(DialogHotkeysCheatsheetComponent.ID)?.close();
            } else {
              if (isDialogOpen) {
                isDialogOpen = false;
                dialogs.getDialogById(DialogHotkeysCheatsheetComponent.ID)?.close();
              } else {
                isDialogOpen = true;
                dialogs
                  .open(DialogHotkeysCheatsheetComponent, { width: undefined, id: DialogHotkeysCheatsheetComponent.ID })
                  .afterClosed()
                  .subscribe(() => {
                    isDialogOpen = false;
                    hotkeysService.cheatSheetToggle.next(false);
                  });
              }
            }
          });
        };
      },
      deps: [HotkeysService, MatDialog],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
