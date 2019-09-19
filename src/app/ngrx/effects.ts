import {Injectable} from '@angular/core'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import * as actions from '@app/ngrx/actions'
import * as selectors from '@app/ngrx/selectors'
import {Router} from '@angular/router'
import {EMPTY} from 'rxjs';
import {withLatestFrom, exhaustMap, filter} from 'rxjs/operators';
import {StoreState} from '@app/types'

@Injectable()
export class Effects {
    constructor(
        private actions$: Actions,
        private store: Store<StoreState>,
        private router: Router
    ) {}

    newTaskRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createTask),
        exhaustMap((a) => this.router.navigate(['tasks', 'active', a.taskId]))
    ), {dispatch: false})

    deleteTaskRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(actions.deleteTask),
        withLatestFrom(this.store.select(selectors.currentTasksState)),
        filter(([,state]) => !!state),
        exhaustMap(async ([action, state]) => {
            return this.router.navigate(['tasks', state])
        })
    ), {dispatch: false})
}