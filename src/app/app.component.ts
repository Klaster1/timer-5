import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { toggleTheme } from '@app/ngrx/actions';
import { selectTheme } from '@app/ngrx/selectors';
import { hotkey } from '@app/utils/hotkey';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { firstValueFrom } from 'rxjs';
import { StoreState } from './domain/storage';
import { TaskState } from './domain/task';
import { ImportExportService } from './services/import-export.service';
import { NavigationService } from './services/navigation.service';

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
    private navigation: NavigationService
  ) {
    keys.add([
      hotkey('g t', 'Go to all tasks', async () =>
        router.navigate(await firstValueFrom(this.navigation.taskStateCommands('all')))
      ),
      hotkey('g a', 'Go to active tasks', async () =>
        router.navigate(await firstValueFrom(this.navigation.taskStateCommands(TaskState.active)))
      ),
      hotkey('g f', 'Go to finished tasks', async () =>
        router.navigate(await firstValueFrom(this.navigation.taskStateCommands(TaskState.finished)))
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
  makeRouterLink = this.navigation.taskStateCommands;
}
