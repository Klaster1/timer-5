import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MapPipeModule } from '@app/pipes/map.pipe';
import { HotkeysService } from 'angular2-hotkeys';
import { DialogHotkeysCheatsheetComponent } from './dialog-hotkeys-cheatsheet.component';

const ID = 'DIALOG_HOTKEYS_CHEATSHEET';

@NgModule({
  declarations: [DialogHotkeysCheatsheetComponent],
  imports: [MatDialogModule, MatButtonModule, CommonModule, MapPipeModule],
  exports: [DialogHotkeysCheatsheetComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory(hotkeysService: HotkeysService, dialogs: MatDialog) {
        return () => {
          let isDialogOpen = false;
          hotkeysService.cheatSheetToggle.subscribe((isOpen) => {
            if (isOpen === false) {
              isDialogOpen = false;
              dialogs.getDialogById(ID)?.close();
            } else {
              if (isDialogOpen) {
                isDialogOpen = false;
                dialogs.getDialogById(ID)?.close();
              } else {
                isDialogOpen = true;
                dialogs
                  .open(DialogHotkeysCheatsheetComponent, { width: undefined, id: ID })
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
})
export class DialogHotkeysCheatsheetModule {}
