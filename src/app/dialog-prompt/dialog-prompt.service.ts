import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import type { DialogPromptData } from './dialog-prompt.component';

@Injectable({ providedIn: 'root' })
export class Prompt {
  private dialog = inject(MatDialog);
  async prompt(title: string, value = '', placeholder = ''): Promise<string | undefined> {
    const component = await import('./dialog-prompt.component').then((m) => m.default);
    return lastValueFrom(
      this.dialog
        .open(component, {
          data: { title, value, placeholder } as DialogPromptData,
        })
        .afterClosed(),
    );
  }
}
