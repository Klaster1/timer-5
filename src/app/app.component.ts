import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { toggleTheme } from '@app/ngrx/actions';
import { selectTheme } from '@app/ngrx/selectors';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { StoreState } from './domain/storage';
import { TaskState } from './domain/task';
import { ImportExportService } from './services/import-export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  theme$ = this.store.select(selectTheme);
  taskState = TaskState;

  constructor(
    private store: Store<StoreState>,
    keys: HotkeysService,
    router: Router,
    private importExport: ImportExportService
  ) {
    keys.add([
      hotkey('g t', 'Go to all tasks', () => router.navigate(['tasks', 'all'])),
      hotkey('g a', 'Go to active tasks', () => router.navigate(['tasks', TaskState.active])),
      hotkey('g f', 'Go to finished tasks', () => router.navigate(['tasks', TaskState.finished])),
    ]);
    this.theme$.subscribe((t) => document.body.classList.toggle('theme-alternate', t === 'dark'));
  }
  toggleTheme() {
    this.store.dispatch(toggleTheme());
  }
  import(event: Event) {
    this.importExport.import(event);
  }
  export() {
    this.importExport.export();
  }
}
