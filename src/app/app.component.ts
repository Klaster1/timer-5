import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatListItem, MatNavList } from '@angular/material/list';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { isAnyTaskActive, selectTasks } from '@app/ngrx/selectors';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { DIALOG_HOTKEYS_CHEATSHEET_ID } from './dialog-hotkeys-cheatsheet/id';
import { KEYS_GO_ACTIVE, KEYS_GO_ALL, KEYS_GO_FINISHED, hotkey } from './domain/hotkeys';
import { StoreState, toStoredTasks } from './domain/storage';
import { TaskState } from './domain/task';
import { MapPipe } from './pipes/map.pipe';
import { SafeUrlPipe } from './pipes/safe-resource-url.pipe';
import { TaskStateIconPipe } from './pipes/task-state-icon.pipe';
import { FaviconService } from './services/favicon.service';
import { ImportExportService } from './services/import-export.service';
import { AppStore } from './services/state';

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
    MatMenuItem,
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
  ],
})
export class AppComponent {
  private oldStore = inject<Store<StoreState>>(Store);
  public keys = inject<HotkeysService>(HotkeysService);
  public router = inject<Router>(Router);
  private importExport = inject<ImportExportService>(ImportExportService);
  private favicon = inject<FaviconService>(FaviconService);
  private hotkeysService = inject<HotkeysService>(HotkeysService);
  private dialogs = inject<MatDialog>(MatDialog);
  private destroyRef = inject(DestroyRef);
  public store = inject(AppStore);

  public exportUrl = computed(() => {
    const tasks = this.oldStore.selectSignal(selectTasks)();
    return URL.createObjectURL(
      new Blob([JSON.stringify(toStoredTasks(tasks), null, '  ')], { type: 'application/json;charset=utf-8;' }),
    );
  });

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
    effect(() => {
      const theme = this.store.theme();
      document.body.classList.toggle('theme-alternate', theme === 'dark');
    });

    effect(() => {
      const anyTaskActive = this.oldStore.selectSignal(isAnyTaskActive)();
      if (anyTaskActive) {
        this.favicon.setIcon('assets/favicon-active.svg');
      } else {
        this.favicon.setIcon('assets/favicon.svg');
      }
    });
    this.destroyRef.onDestroy(() => {
      const exportUrl = this.exportUrl();
      if (exportUrl) URL.revokeObjectURL(exportUrl);
    });
  }
  import(event: Event) {
    this.importExport.import(event);
  }

  private handleHotkeyCheatsheet() {
    let isDialogOpen = false;
    this.hotkeysService.cheatSheetToggle.subscribe(async (isOpen) => {
      const component = await import('./dialog-hotkeys-cheatsheet/dialog-hotkeys-cheatsheet.component').then(
        (m) => m.default,
      );
      if (isOpen === false) {
        isDialogOpen = false;
        this.dialogs.getDialogById(DIALOG_HOTKEYS_CHEATSHEET_ID)?.close();
      } else {
        if (isDialogOpen) {
          isDialogOpen = false;
          this.dialogs.getDialogById(DIALOG_HOTKEYS_CHEATSHEET_ID)?.close();
        } else {
          isDialogOpen = true;
          this.dialogs
            .open(component, { width: undefined, id: DIALOG_HOTKEYS_CHEATSHEET_ID })
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
