import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { DialogPromptComponent, DialogPromptData } from './dialog-prompt.component';

@Injectable({ providedIn: 'root' })
export class Prompt {
  constructor(private dialog: MatDialog) {}
  prompt(title: string, value = '', placeholder = ''): Observable<string | undefined> {
    return this.dialog
      .open<DialogPromptComponent, DialogPromptData, string>(DialogPromptComponent, {
        data: { title, value, placeholder },
      })
      .afterClosed();
  }
}
