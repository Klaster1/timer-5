import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import DialogPromptComponent, { DialogPromptData } from './dialog-prompt.component';

@Injectable({ providedIn: 'root' })
export class Prompt {
  private dialog = inject(MatDialog);
  async prompt(title: string, value = '', placeholder = ''): Promise<string | undefined> {
    return lastValueFrom(
      this.dialog
        .open(DialogPromptComponent, {
          data: { title, value, placeholder } as DialogPromptData,
        })
        .afterClosed(),
    );
  }
}
