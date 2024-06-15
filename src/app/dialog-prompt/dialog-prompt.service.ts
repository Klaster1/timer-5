import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, from, switchMap, take } from 'rxjs';
import type { DialogPromptData } from './dialog-prompt.component';

@Injectable({ providedIn: 'root' })
export class Prompt {
  private dialog = inject(MatDialog);
  prompt(title: string, value = '', placeholder = ''): Observable<string | undefined> {
    const component = from(import('./dialog-prompt.component').then((m) => m.default));
    return component.pipe(
      take(1),
      switchMap((component) => {
        return this.dialog
          .open(component, {
            data: { title, value, placeholder } as DialogPromptData,
          })
          .afterClosed();
      }),
    );
  }
}
