import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MapPipe } from '@app/pipes/map.pipe';
import { hasCyrillics } from '@app/utils/string';
import { HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'dialog-hotkeys-cheatsheet',
  templateUrl: './dialog-hotkeys-cheatsheet.component.html',
  styleUrls: ['./dialog-hotkeys-cheatsheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, MapPipe],
})
export class DialogHotkeysCheatsheetComponent {
  static ID = 'DIALOG_HOTKEYS_CHEATSHEET';
  constructor(private hotkeysService: HotkeysService) {}
  keys = this.hotkeysService.hotkeys.filter((key) => key.description);
  withoutCyrillics = (values: string[]): string[] => [...values].filter((value) => !hasCyrillics(value));
}
