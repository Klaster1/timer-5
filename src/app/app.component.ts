import { DragDropModule } from '@angular/cdk/drag-drop';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatListItem, MatNavList } from '@angular/material/list';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toggleTheme } from '@app/ngrx/actions';
import { isAnyTaskActive, selectTasks, selectTheme } from '@app/ngrx/selectors';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { distinctUntilChanged } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DialogHotkeysCheatsheetComponent } from './dialog-hotkeys-cheatsheet/dialog-hotkeys-cheatsheet.component';
import { KEYS_GO_ACTIVE, KEYS_GO_ALL, KEYS_GO_FINISHED, hotkey } from './domain/hotkeys';
import { StoreState, toStoredTasks } from './domain/storage';
import { TaskState } from './domain/task';
import { MapPipe } from './pipes/map.pipe';
import { SafeUrlPipe } from './pipes/safe-resource-url.pipe';
import { TaskStateIconPipe } from './pipes/task-state-icon.pipe';
import { FaviconService } from './services/favicon.service';
import { ImportExportService } from './services/import-export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatMenuTrigger,
    MatMenu,
    MatNavList,
    MatListItem,
    MatActionList,
    MatIcon,
    MatTooltip,
    TaskStateIconPipe,
    MapPipe,
    DragDropModule,
    SafeUrlPipe,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AsyncPipe,
  ],
})
export class AppComponent {
  private store = inject<Store<StoreState>>(Store);
  public keys = inject<HotkeysService>(HotkeysService);
  public router = inject<Router>(Router);
  private importExport = inject<ImportExportService>(ImportExportService);
  private favicon = inject<FaviconService>(FaviconService);
  private hotkeysService = inject<HotkeysService>(HotkeysService);
  private dialogs = inject<MatDialog>(MatDialog);

  theme$ = this.store.select(selectTheme);
  taskState = TaskState;

  constructor() {
    this.handleHotkeyCheatsheet();
    this.keys.add([
      hotkey(KEYS_GO_ALL, 'Go to all tasks', () => this.router.navigate(['all'], { queryParamsHandling: 'merge' })),
      hotkey(KEYS_GO_ACTIVE, 'Go to active tasks', () =>
        this.router.navigate([TaskState.active], { queryParamsHandling: 'merge' }),
      ),
      hotkey(KEYS_GO_FINISHED, 'Go to finished tasks', () =>
        this.router.navigate([TaskState.finished], { queryParamsHandling: 'merge' }),
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
  private lastExportUrl?: string;
  exportUrl$ = this.store.select(selectTasks).pipe(
    map(toStoredTasks),
    map((tasks) =>
      URL.createObjectURL(new Blob([JSON.stringify(tasks, null, '  ')], { type: 'application/json;charset=utf-8;' })),
    ),
    tap({
      next: (url) => (this.lastExportUrl = url),
      complete: () => {
        if (this.lastExportUrl) URL.revokeObjectURL(this.lastExportUrl);
      },
    }),
  );
  private handleHotkeyCheatsheet() {
    let isDialogOpen = false;
    this.hotkeysService.cheatSheetToggle.subscribe((isOpen) => {
      if (isOpen === false) {
        isDialogOpen = false;
        this.dialogs.getDialogById(DialogHotkeysCheatsheetComponent.ID)?.close();
      } else {
        if (isDialogOpen) {
          isDialogOpen = false;
          this.dialogs.getDialogById(DialogHotkeysCheatsheetComponent.ID)?.close();
        } else {
          isDialogOpen = true;
          this.dialogs
            .open(DialogHotkeysCheatsheetComponent, { width: undefined, id: DialogHotkeysCheatsheetComponent.ID })
            .afterClosed()
            .subscribe(() => {
              isDialogOpen = false;
              this.hotkeysService.cheatSheetToggle.next(false);
            });
        }
      }
    });
  }
}
