import {Component, HostBinding, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, ElementRef, TrackByFunction} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreState, Task, TaskState, TaskIndexes} from '@app/types';
import {currentTasksState, currentStateTasks, currentTask} from '@app/ngrx/selectors';
import * as actions from '@app/ngrx/actions';
import {combineLatest, BehaviorSubject, Subject} from 'rxjs';
import {map, tap, take, filter, startWith, shareReplay} from 'rxjs/operators';
import {generate as id} from 'shortid';
import {HotkeysService} from 'angular2-hotkeys';
import {hotkey} from '@app/utils/hotkey';
import {Router} from '@angular/router';
import {taskIndexes} from '@app/domain'

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
        hotkey('a', 'Add task', () => this.addTask()),
        hotkey(['j', 'k'], 'Next/prev task', async (e) => {
            let [tasks, state, task] = await combineLatest(this.tasks$, this.state$, this.currentTask$).pipe(take(1)).toPromise();
            if (!tasks.length) { return; }
            if (!task) { task = tasks[0]; }
            let index = tasks.indexOf(task);
            if (e.key === 'j') { index += 1; }
            if (e.key === 'k') { index -= 1; }
            if (index >= tasks.length) { index = 0; }
            if (index < 0) { index = tasks.length - 1; }
            this.router.navigate(['tasks', state, tasks[index].id]);
        }),
        hotkey('f', 'Search', () => this.searchOpened$.next(true))
    ];
    @ViewChild('searchInput')
    searchInput?: ElementRef<HTMLInputElement>;
    searchOpened$ = new BehaviorSubject<boolean>(false);
    searchTermInput$ = new Subject<string>();
    searchTerm$ = combineLatest(
        this.searchOpened$.pipe(tap((opened) => setTimeout(() => opened && this.searchInput && this.searchInput.nativeElement.focus()))),
        this.searchTermInput$
    ).pipe(map(([opened, term]) => opened ? term : ''), startWith(''));
    state$ = this.store.select(currentTasksState);
    rangeFilter = 'all'
    rangeFilterPredicate$ = new BehaviorSubject<{index: keyof TaskIndexes, value: string}|null>(null)
    onRangeFilterChange(value: string) {
        if (value === 'all') this.rangeFilterPredicate$.next(null)
        if (value === 'today') {
            const now = new Date()
            const year = now.getFullYear()
            const month = now.getMonth()+1
            const date = now.getDate()
            this.rangeFilterPredicate$.next({index: 'yearMonthDate', value: `${year}.${month}.${date}`})
        }
        if (value === 'yesterday') {
            const now = new Date()
            now.setDate(now.getDate()-1)
            const year = now.getFullYear()
            const month = now.getMonth()+1
            const date = now.getDate()
            this.rangeFilterPredicate$.next({index: 'yearMonthDate', value: `${year}.${month}.${date}`})
        }
    }

    tasks$ = combineLatest(this.store.select(currentStateTasks), this.searchTerm$, this.rangeFilterPredicate$).pipe(
        map(([tasks, term, range]) => {
            return term || range
                ? tasks.filter(t => {
                    const indexes = t.indexes || taskIndexes(t)
                    return t.name.toLowerCase().includes(term.toLowerCase()) &&
                        range
                            ? indexes
                                ? indexes[range.index].includes(range.value)
                                : false
                            : true
                })
                : tasks
        }),
        shareReplay(1)
    );
    currentTask$ = this.store.select(currentTask);
    @HostBinding('class.task-opened')
    private taskOpened = false;
    taskOpened$ = this.currentTask$.pipe(map(t => !!t), tap(v => setTimeout(() => this.taskOpened = v)));
    ngOnInit() {
        this.keys.add(this.hotkeys);
    }
    ngOnDestroy() {
        this.keys.remove(this.hotkeys);
    }
    addTask() {
        this.store.dispatch(actions.createTaskIntent());
    }
    taskId: TrackByFunction<Task> = (index, task) => task.id;
    onSearchSubmit() {
        combineLatest(
            this.tasks$,
            this.state$
        ).pipe(take(1), tap(([tasks, state]) => {
            this.searchOpened$.next(false)
            if (tasks.length) this.router.navigate(['tasks', state, tasks[0].id])
        })).subscribe()
    }
}
