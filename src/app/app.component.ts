import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { toggleTheme } from '@app/ngrx/actions';
import { isAnyTaskActive, selectTheme } from '@app/ngrx/selectors';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { distinctUntilChanged } from 'rxjs';
import { hotkey, KEYS_GO_ACTIVE, KEYS_GO_ALL, KEYS_GO_FINISHED } from './domain/hotkeys';
import { StoreState } from './domain/storage';
import { TaskState } from './domain/task';
import { FaviconService } from './services/favicon.service';
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
    private importExport: ImportExportService,
    private favicon: FaviconService
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
    this.store
      .select(isAnyTaskActive)
      .pipe(distinctUntilChanged())
      .subscribe((isAnyTaskActive) => {
        if (isAnyTaskActive) {
          this.favicon.setIcon('assets/favicon-active.svg');
        } else {
          this.favicon.setIcon('assets/favicon.svg');
        }
      });
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
