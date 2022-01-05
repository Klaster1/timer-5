import { Component } from '@angular/core';
import { HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'dialog-hotkeys-cheatsheet',
  templateUrl: './dialog-hotkeys-cheatsheet.component.html',
  styleUrls: ['./dialog-hotkeys-cheatsheet.style.scss'],
})
export class DialogHotkeysCheatsheetComponent {
  constructor(private hotkeysService: HotkeysService) {}
  keys = this.hotkeysService.hotkeys.filter((key) => key.description);
}
