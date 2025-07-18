import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogConfig,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MapPipe } from '@app/pipes/map';
import { hasCyrillics } from '@app/utils/string';
import { HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'dialog-hotkeys-cheatsheet',
  templateUrl: './dialog-hotkeys-cheatsheet.html',
  styleUrls: ['./dialog-hotkeys-cheatsheet.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButton, MapPipe],
})
export default class DialogHotkeysCheatsheetComponent {
  static dialogConfig: MatDialogConfig = { width: undefined };
  private hotkeysService = inject(HotkeysService);
  get keys() {
    return this.hotkeysService.hotkeys.filter((key) => key.description);
  }
  withoutCyrillics = (values: string[]): string[] => [...values].filter((value) => !hasCyrillics(value));
}
