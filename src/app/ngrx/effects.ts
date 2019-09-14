import {Injectable} from '@angular/core'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import * as actions from '@app/ngrx/actions'
import {AngularFirestore} from '@angular/fire/firestore'
import {tap, map} from 'rxjs/operators';

@Injectable()
export class Effects {
    constructor(
        private actions$: Actions,
        private afs: AngularFirestore
    ) {}

    createTask$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createTask),
        // tap(v => console.log(v))
        map(action => actions.task({
            task: {
                name: action.name,
                state: 'active',
                completeSessionsDuration: 0,
                id: this.afs.createId(),
                userId: 'foo'
            }
        }))
    ), {dispatch: true})
}