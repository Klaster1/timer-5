import {Component, HostBinding, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core'
import {Store} from '@ngrx/store'
import {StoreState, Task, TaskState} from '@app/types'
import {currentTasksState, currentStateTasks, currentTask} from '@app/ngrx/selectors'
import * as actions from '@app/ngrx/actions'
import {combineLatest, BehaviorSubject, Subject} from 'rxjs';
import {map, tap, take, filter, startWith} from 'rxjs/operators';
import {generate as id} from 'shortid'
import {HotkeysService, Hotkey} from 'angular2-hotkeys'
import {Router} from '@angular/router'

@Component({
    templateUrl: './template.html',
    styleUrls: ['./style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenTasksComponent {
    constructor(
        private store: Store<StoreState>,
        private keys: HotkeysService,
        private router: Router,
    ) {}
    hotkeys = [
        new Hotkey('a', (e) => (this.addTask(),e), void 0, 'Add task'),
        new Hotkey(['j', 'k'], e => {
            combineLatest(this.tasks$, this.state$, this.currentTask$).pipe(take(1)).toPromise().then(([tasks, state, task]) => {
                if (!tasks.length) return
                if (!task) task = tasks[0]
                let index = tasks.indexOf(task)
                // if (index === -1)
                if (e.key === 'j') index += 1
                if (e.key === 'k') index -= 1
                if (index >= tasks.length) index = 0
                if (index < 0) index = tasks.length - 1
                this.router.navigate(['tasks', state, tasks[index].id])
            })
            return e
        }, [], 'Next/prev task')
    ]
    ngOnInit() {
        this.keys.add(this.hotkeys)
    }
    ngOnDestroy() {
        this.keys.remove(this.hotkeys)
    }
    @ViewChild('searchInput', {static: false})
    searchInput?: ElementRef<HTMLInputElement>
    searchOpened$ = new BehaviorSubject<boolean>(false)
    searchTermInput$ = new Subject<string>()
    searchTerm$ = combineLatest(
        this.searchOpened$.pipe(filter(Boolean), tap(() => setTimeout(()=>this.searchInput && this.searchInput.nativeElement.focus()))), 
        this.searchTermInput$
    ).pipe(map(([opened, term]) => opened ? term : ''), startWith(''))
    state$ = this.store.select(currentTasksState)
    tasks$ = combineLatest(this.store.select(currentStateTasks), this.searchTerm$).pipe(
        map(([tasks, term]) => term ? tasks.filter(t => t.name.toLowerCase().includes(term.toLowerCase())) : tasks)
    )
    currentTask$ = this.store.select(currentTask)
    @HostBinding('class.task-opened')
    private taskOpened: boolean = false
    taskOpened$ = this.currentTask$.pipe(map(t => !!t), tap(v=>setTimeout(()=>this.taskOpened = v)))
    addTask() {
        this.store.dispatch(actions.createTaskIntent())
    }
    taskId = (task: Task) => task.id
}