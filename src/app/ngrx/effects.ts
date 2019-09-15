import {Injectable} from '@angular/core'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import * as actions from '@app/ngrx/actions'
import * as selectors from '@app/ngrx/selectors'
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store'
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireAuth} from '@angular/fire/auth'
import {EMPTY, combineLatest, pipe} from 'rxjs';
import {tap, map, withLatestFrom, exhaustMap, switchMap, filter, pluck} from 'rxjs/operators';
import {StoreState, Task, TaskState} from '@app/types'
import {findRoute} from '@app/utils'

const pathNavigate = path => pipe(
    ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
    map(a => findRoute(a.payload, path))
)

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

    renameTask$ = createEffect(() => this.actions$.pipe(
        ofType(actions.renameTask),
        withLatestFrom(this.store.select(selectors.user)),
        exhaustMap(([action, user]) => {
            return this.afs.collection<Task>('tasks').doc(action.taskId).update({name: action.name})
        })
    ), {dispatch: false})

    deleteTask$ = createEffect(() => this.actions$.pipe(
        ofType(actions.deleteTask),
        withLatestFrom(this.store.select(selectors.user)),
        exhaustMap(([action, user]) => {
            return this.afs.collection<Task>('tasks').doc(action.taskId).delete()
        })
    ), {dispatch: false})

    changeTaskState$ = createEffect(() => this.actions$.pipe(
        ofType(actions.changeTaskState),
        withLatestFrom(this.store.select(selectors.user)),
        exhaustMap(([action, user]) => {
            return this.afs.collection<Task>('tasks').doc(action.taskId).update({state: action.state})
        })
    ), {dispatch: false})

    userFromFirebase$ = createEffect(() => this.afa.user.pipe(
        map(user => actions.user({user: user ? {id: user.uid, photoURL: user.photoURL} : null})),
    ), {dispatch: true})

    taskToFirebase$ = createEffect(() => this.actions$.pipe(
        ofType(actions.task),
        exhaustMap((a) => {
            const {id, ...task} = a.task
            return this.afs.collection<Task>('tasks').doc(id).set(task)
        }),
    ), {dispatch: false})

    tasksFromFirebase$ = createEffect(() => combineLatest(
        this.actions$.pipe(pathNavigate(['tasks', ':state']), map(s => s? s.params.state as TaskState|'all' : undefined)),
        this.store.select(selectors.user),
    ).pipe(
        switchMap(([taskState, user]) => {
            if (!user || !taskState) return EMPTY
            if (taskState === 'all') {
                return this.afs.collection<Task>('tasks', (ref) => ref.where('userId', '==', user.id)).valueChanges({idField: 'id'})
            } else {
                return this.afs.collection<Task>('tasks', (ref) => ref.where('userId', '==', user.id).where('state', '==', taskState)).valueChanges({idField: 'id'})
            }
        }),
        map(tasks => actions.tasks({tasks})),
    ), {dispatch: true});
}