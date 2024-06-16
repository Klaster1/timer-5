import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MapPipe } from '@app/pipes/map.pipe';
import { hasCyrillics } from '@app/utils/string';
import { HotkeysService } from 'angular2-hotkeys';

type DisplayFragment = { type: 'key'; value: string } | { type: 'combo' } | { type: 'chord' } | { type: 'separator' };

@Component({
  selector: 'dialog-hotkeys-cheatsheet',
  templateUrl: './dialog-hotkeys-cheatsheet.component.html',
  styleUrls: ['./dialog-hotkeys-cheatsheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButton, MapPipe],
})
export default class DialogHotkeysCheatsheetComponent {
  private hotkeysService = inject(HotkeysService);
  keys = this.hotkeysService.hotkeys.filter((key) => key.description);
  withoutCyrillics = (values: string[]): string[] => [...values].filter((value) => !hasCyrillics(value));
  split = (value: string[]): DisplayFragment[] =>
    value.flatMap((value, index, all) => {
      const withSeparator = (fragments: DisplayFragment[]): DisplayFragment[] => {
        return index < all.length - 1 ? [...fragments, { type: 'separator' }] : fragments;
      };
      if (value.includes('+')) {
        return withSeparator(
          value
            .split('+')
            .filter((value) => value !== ' ')
            .flatMap((value, index, all): DisplayFragment[] => {
              return index < all.length - 1 ? [{ type: 'key', value }, { type: 'combo' }] : [{ type: 'key', value }];
            }),
        );
      } else if (value.includes(' ')) {
        return withSeparator(
          [...value].map((value): DisplayFragment => {
            if (value === ' ') return { type: 'chord' };
            return { type: 'key', value };
          }),
        );
      } else {
        return withSeparator([{ type: 'key', value }]);
      }
    });
}
