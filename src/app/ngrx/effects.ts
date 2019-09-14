import {Injectable} from '@angular/core'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import * as actions from '@app/ngrx/actions'
import * as selectors from '@app/ngrx/selectors'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'
import {tap, map, withLatestFrom, exhaustMap} from 'rxjs/operators';
import {StoreState, Task} from '@app/types'

@Injectable()
export class Effects {
    constructor(
        private actions$: Actions,
        private store: Store<StoreState>,
        private afs: AngularFirestore,
        private afa: AngularFireAuth
    ) {}

    createTask$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createTask),
        withLatestFrom(this.store.select(selectors.user)),
        map(([action, user]) => actions.task({
            task: {
                name: action.name,
                state: 'active',
                completeSessionsDuration: 0,
                id: this.afs.createId(),
                userId: user.id
            }
        }))
    ), {dispatch: true})

    userFromFirebase$ = createEffect(() => this.afa.user.pipe(
        map(user => actions.user({user: {id: user.uid}})),
    ), {dispatch: true})

    taskToFirebase$ = createEffect(() => this.actions$.pipe(
        ofType(actions.task),
        exhaustMap((a) => {
            const {id, ...task} = a.task
            return this.afs.collection<Task>('tasks').doc(id).set(task)
        }),
        tap(res => console.log(res))
    ), {dispatch: false})
}