import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loadTasks, updateTheme } from '@app/ngrx/actions';
import { tasks, theme } from '@app/ngrx/selectors';
import { StoreState, TaskState } from '@app/types';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { fromStoredTasks, toStoredTasks } from './types/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme$ = this.store.select(theme);
  isLoggedIn$ = of(false);
  user$ = of(null);
  taskState = TaskState;

  title = 'timer';
  constructor(private store: Store<StoreState>, keys: HotkeysService, router: Router) {
    keys.add([
      hotkey('g t', 'Go to all tasks', () => router.navigate(['tasks', 'all'])),
      hotkey('g a', 'Go to active tasks', () => router.navigate(['tasks', TaskState.active])),
      hotkey('g f', 'Go to finished tasks', () => router.navigate(['tasks', TaskState.finished])),
    ]);
    this.theme$.pipe(tap((t) => document.body.classList.toggle('theme-alternate', t === 'dark'))).subscribe();
  }
  toggleTheme() {
    this.theme$
      .pipe(take(1))
      .subscribe((t) => this.store.dispatch(updateTheme({ theme: t === 'dark' ? 'light' : 'dark' })));
  }
  import(event: Event) {
    console.log(event);
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const file = target?.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.addEventListener(
      'load',
      () => {
        if (typeof fileReader.result !== 'string') return;
        this.store.dispatch(loadTasks({ data: fromStoredTasks(JSON.parse(fileReader.result)) }));
      },
      { once: true }
    );
    fileReader.readAsText(file);
  }
  export() {
    this.store
      .select(tasks)
      .pipe(take(1), map(toStoredTasks))
      .subscribe((data) => {
        const blob = new Blob([JSON.stringify(data, null, '  ')], { type: 'application/json;charset=utf-8;' });
        const downloadUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'timer-data.json';

        a.click();

        setTimeout(() => URL.revokeObjectURL(downloadUrl), 100);
      });
  }
}
