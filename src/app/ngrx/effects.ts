import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Prompt } from '@app/dialog-prompt/dialog-prompt.service';
import { StoreState } from '@app/domain/storage';
import { getTaskSession } from '@app/domain/task';
import { selectTaskById } from '@app/ngrx/selectors';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import type { DialogEditSessionData } from '../dialog-edit-session/dialog-edit-session.component';
import { updateSession, updateSessionIntent } from './actions';

@Injectable()
export class Effects {
  private actions$ = inject(Actions);
  private store = inject<Store<StoreState>>(Store);
  private router = inject(Router);
  private prompt = inject(Prompt);
  private dialog = inject(MatDialog);

  editSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSessionIntent),
      switchMap((a) => {
        const task = this.store.selectSignal(selectTaskById(a.taskId))();
        if (!task) return EMPTY;
        const session = getTaskSession(task, a.sessionId);
        if (!session) return EMPTY;
        const component = from(import('../dialog-edit-session/dialog-edit-session.component').then((m) => m.default));
        return component.pipe(
          switchMap((component) => {
            return this.dialog
              .open(component, { data: { start: session.start, end: session.end } as DialogEditSessionData })
              .afterClosed()
              .pipe(
                switchMap((result: DialogEditSessionData | undefined) =>
                  result
                    ? of(
                        updateSession({
                          taskId: task.id,
                          sessionId: a.sessionId,
                          start: result.start,
                          end: result.end,
                        }),
                      )
                    : EMPTY,
                ),
              );
          }),
        );
      }),
    ),
  );
}
