import {Injectable} from '@angular/core';
import {createEffect, ofType, Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as actions from '@app/ngrx/actions';
import * as selectors from '@app/ngrx/selectors';
import {Router} from '@angular/router';
import {EMPTY} from 'rxjs';
import {switchMap, withLatestFrom, exhaustMap, filter, take, map} from 'rxjs/operators';
import {StoreState} from '@app/types';
import {Prompt} from '@app/providers/prompt.provider';
import {generate as id} from 'shortid';
import {MatDialog} from '@angular/material';
import {DialogEditSessionComponent, DialogEditSessionData} from '@app/dialog-edit-session';
import {getTaskSession} from '@app/domain';

@Injectable()
export class Effects {
    constructor(
        private actions$: Actions,
        private store: Store<StoreState>,
        private router: Router,
        private prompt: Prompt,
        private dialog: MatDialog
    ) {}

    createTask$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createTaskIntent),
        switchMap(() => this.prompt.prompt('Create task', '', 'Task name')),
        switchMap(result => result ? [actions.createTask({taskId: id(), name: result})] : [])
    ));

    newTaskRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createTask),
        withLatestFrom(this.store.select(selectors.currentTasksState)),
        exhaustMap(([a, state]) => this.router.navigate(['tasks', state === 'all' ? 'all' : 'active', a.taskId]))
    ), {dispatch: false});

    deleteTaskRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.deleteTask),
        withLatestFrom(this.store.select(selectors.currentTasksState)),
        filter(([, state]) => !!state),
        exhaustMap(async ([action, state]) => {
            return this.router.navigate(['tasks', state]);
        })
    ), {dispatch: false});

    renameTask$ = createEffect(() => this.actions$.pipe(
        ofType(actions.renameTaskIntent),
        switchMap(a => this.store.select(selectors.taskById, {taskId: a.taskId}).pipe(
            take(1),
            exhaustMap(t => this.prompt.prompt('Rename task', t.name, 'Task name')),
            switchMap(result => result ? [actions.renameTask({taskId: a.taskId, name: result})] : [])
        ))
    ));

    editSession$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateSessionIntent),
        switchMap(a => this.store.select(selectors.taskById, {taskId: a.taskId}).pipe(
            take(1),
            exhaustMap(t => {
                const s = getTaskSession(t, a.sessionId);
                return s
                    ? this.dialog.open<DialogEditSessionComponent, DialogEditSessionData, DialogEditSessionData>(
                        DialogEditSessionComponent,
                        {data: {start: s.start, end: s.end}}
                    ).afterClosed().pipe(switchMap(r => r ? [actions.updateSession({taskId: t.id, sessionId: s.id, start: r.start, end: r.end})] : []))
                    : [];
            })
        ))
    ));
}
