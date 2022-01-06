import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  DialogEditSessionComponent,
  DialogEditSessionData,
} from '@app/dialog-edit-session/dialog-edit-session.component';
import { Prompt } from '@app/dialog-prompt/dialog-prompt.service';
import { getTaskSession } from '@app/domain/no-dom';
import * as actions from '@app/ngrx/actions';
import * as selectors from '@app/ngrx/selectors';
import { StoreState } from '@app/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { nanoid as id } from 'nanoid';
import { exhaustMap, filter, switchMap, take, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private store: Store<StoreState>,
    private router: Router,
    private prompt: Prompt,
    private dialog: MatDialog
  ) {}

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createTaskIntent),
      switchMap(() => this.prompt.prompt('Create task', '', 'Task name')),
      switchMap((result) => (result ? [actions.createTask({ taskId: id(), name: result })] : []))
    )
  );

  newTaskRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.createTask),
        withLatestFrom(this.store.select(selectors.currentTasksState)),
        exhaustMap(([a, state]) => this.router.navigate(['tasks', state === 'all' ? 'all' : 'active', a.taskId]))
      ),
    { dispatch: false }
  );

  deleteTaskRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.deleteTask),
        withLatestFrom(this.store.select(selectors.currentTasksState)),
        filter(([, state]) => !!state),
        exhaustMap(async ([action, state]) => this.router.navigate(['tasks', state]))
      ),
    { dispatch: false }
  );

  renameTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.renameTaskIntent),
      switchMap((a) =>
        this.store.select(selectors.taskById(a.taskId)).pipe(
          take(1),
          exhaustMap((task) => this.prompt.prompt('Rename task', task?.name, 'Task name')),
          switchMap((result) => (result ? [actions.renameTask({ taskId: a.taskId, name: result })] : []))
        )
      )
    )
  );

  editSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateSessionIntent),
      switchMap((a) =>
        this.store.select(selectors.taskById(a.taskId)).pipe(
          take(1),
          exhaustMap((task) => {
            if (!task) return [];
            const session = getTaskSession(task, a.sessionIndex);
            return session
              ? this.dialog
                  .open<DialogEditSessionComponent, DialogEditSessionData, DialogEditSessionData>(
                    DialogEditSessionComponent,
                    { data: { start: session.start, end: session.end } }
                  )
                  .afterClosed()
                  .pipe(
                    switchMap((r) =>
                      r
                        ? [
                            actions.updateSession({
                              taskId: task.id,
                              sessionIndex: task.sessions.indexOf(session),
                              start: r.start,
                              end: r.end,
                            }),
                          ]
                        : []
                    )
                  )
              : [];
          })
        )
      )
    )
  );
}
