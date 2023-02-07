import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { toggleTheme } from '@app/ngrx/actions';
import { isAnyTaskActive, selectTasks, selectTheme } from '@app/ngrx/selectors';
import { LetModule, PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { HotkeysService } from 'angular2-hotkeys';
import { distinctUntilChanged } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DialogHotkeysCheatsheetComponent } from './dialog-hotkeys-cheatsheet/dialog-hotkeys-cheatsheet.component';
import { hotkey, KEYS_GO_ACTIVE, KEYS_GO_ALL, KEYS_GO_FINISHED } from './domain/hotkeys';
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
    CommonModule,
    LetModule,
    PushModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    TaskStateIconPipe,
    MapPipe,
    DragDropModule,
    SafeUrlPipe,
    RouterModule,
  ],
})
export class AppComponent {
  theme$ = this.store.select(selectTheme);
  taskState = TaskState;

  constructor(
    private store: Store<StoreState>,
    keys: HotkeysService,
    router: Router,
    private importExport: ImportExportService,
    private favicon: FaviconService,
    private hotkeysService: HotkeysService,
    private dialogs: MatDialog
  ) {
    this.handleHotkeyCheatsheet();
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
  private lastExportUrl?: string;
  exportUrl$ = this.store.select(selectTasks).pipe(
    map(toStoredTasks),
    map((tasks) =>
      URL.createObjectURL(new Blob([JSON.stringify(tasks, null, '  ')], { type: 'application/json;charset=utf-8;' }))
    ),
    tap({
      next: (url) => (this.lastExportUrl = url),
      complete: () => {
        if (this.lastExportUrl) URL.revokeObjectURL(this.lastExportUrl);
      },
    })
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
