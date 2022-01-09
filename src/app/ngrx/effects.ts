import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  DialogEditSessionComponent,
  DialogEditSessionData,
} from '@app/dialog-edit-session/dialog-edit-session.component';
import { Prompt } from '@app/dialog-prompt/dialog-prompt.service';
import { StoreState } from '@app/domain/storage';
import { getTaskSession, makeTaskId } from '@app/domain/task';
import { selectCurrentTaskId, selectCurrentTaskState, selectTaskById } from '@app/ngrx/selectors';
import { NavigationService } from '@app/services/navigation.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { exhaustMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import {
  createTask,
  createTaskIntent,
  deleteTask,
  renameTask,
  renameTaskIntent,
  updateSession,
  updateSessionIntent,
} from './actions';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private store: Store<StoreState>,
    private router: Router,
    private prompt: Prompt,
    private dialog: MatDialog,
    private navigation: NavigationService
  ) {}

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTaskIntent),
      switchMap(() => this.prompt.prompt('Create task', '', 'Task name')),
      switchMap((result) => (result ? of(createTask({ taskId: makeTaskId(), name: result })) : []))
    )
  );

  newTaskRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createTask),
        withLatestFrom(this.store.select(selectCurrentTaskState)),
        tap(([a, state]) => this.router.navigate([state === 'all' ? 'all' : 'active', a.taskId]))
      ),
    { dispatch: false }
  );

  deleteTaskRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteTask),
        withLatestFrom(this.store.select(selectCurrentTaskState), this.store.select(selectCurrentTaskId)),
        switchMap(([action, state, taskId]) => {
          return action.taskId === taskId && state ? this.navigation.taskStateCommands(state).pipe(take(1)) : EMPTY;
        }),
        tap((commands) => this.router.navigate(commands))
      ),
    { dispatch: false }
  );

  renameTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(renameTaskIntent),
      switchMap((a) =>
        this.store.select(selectTaskById(a.taskId)).pipe(
          take(1),
          exhaustMap((task) => this.prompt.prompt('Rename task', task?.name, 'Task name')),
          switchMap((result) => (result ? of(renameTask({ taskId: a.taskId, name: result })) : EMPTY))
        )
      )
    )
  );

  editSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSessionIntent),
      switchMap((a) =>
        this.store.select(selectTaskById(a.taskId)).pipe(
          take(1),
          exhaustMap((task) => {
            if (!task) return EMPTY;
            const session = getTaskSession(task, a.sessionIndex);
            return session
              ? this.dialog
                  .open<DialogEditSessionComponent, DialogEditSessionData, DialogEditSessionData>(
                    DialogEditSessionComponent,
                    { data: { start: session.start, end: session.end } }
                  )
                  .afterClosed()
                  .pipe(
                    switchMap((result) =>
                      result
                        ? of(
                            updateSession({
                              taskId: task.id,
                              sessionIndex: task.sessions.indexOf(session),
                              start: result.start,
                              end: result.end,
                            })
                          )
                        : EMPTY
                    )
                  )
              : EMPTY;
          })
        )
      )
    )
  );
}
