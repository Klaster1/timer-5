import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPromptComponent, DialogPromptData } from '@app/dialog-prompt';
import { Observable } from 'rxjs';

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
