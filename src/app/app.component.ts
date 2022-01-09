import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { toggleTheme } from '@app/ngrx/actions';
import { selectTheme } from '@app/ngrx/selectors';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { hotkey, KEYS_GO_ACTIVE, KEYS_GO_ALL, KEYS_GO_FINISHED } from './domain/hotkeys';
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
      hotkey(KEYS_GO_ALL, 'Go to all tasks', () => router.navigate(['all'], { queryParamsHandling: 'merge' })),
      hotkey(KEYS_GO_ACTIVE, 'Go to active tasks', () =>
        router.navigate([TaskState.active], { queryParamsHandling: 'merge' })
      ),
      hotkey(KEYS_GO_FINISHED, 'Go to finished tasks', () =>
        router.navigate([TaskState.finished], { queryParamsHandling: 'merge' })
      ),
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
