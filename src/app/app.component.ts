import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatListItem, MatNavList } from '@angular/material/list';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HotkeysService } from 'angular2-hotkeys';
import { ButtonThemeSwitcherComponent } from './button-theme-switcher/button-theme-switcher.component';
import { KEYS_GO_ACTIVE, KEYS_GO_ALL, KEYS_GO_FINISHED, hotkey } from './domain/hotkeys';
import { toStoredTasks } from './domain/storage';
import { TaskState } from './domain/task';
import { MapPipe } from './pipes/map.pipe';
import { TaskStateIconPipe } from './pipes/task-state-icon.pipe';
import { FaviconService } from './providers/favicon.service';
import { ImportExportService } from './providers/import-export.service';
import { RoutedDialogs } from './providers/routed-dialogs';
import { AppStore } from './providers/state';

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
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ButtonThemeSwitcherComponent,
  ],
})
export class AppComponent {
  public keys = inject<HotkeysService>(HotkeysService);
  public router = inject<Router>(Router);
  private importExport = inject<ImportExportService>(ImportExportService);
  private favicon = inject<FaviconService>(FaviconService);
  private hotkeysService = inject<HotkeysService>(HotkeysService);
  private destroyRef = inject(DestroyRef);
  public store = inject(AppStore);
  private sanitizer = inject(DomSanitizer);
  private routedDialogs = inject(RoutedDialogs);

  public exportUrl = computed(() => {
    const tasks = this.store.tasks();
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(toStoredTasks(tasks), null, '  ')], { type: 'application/json;charset=utf-8;' }),
    );
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  taskState = TaskState;

  constructor() {
    this.hotkeysService.cheatSheetToggle.subscribe(() => {
      this.routedDialogs.navigate(['hotkeys']);
    });
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
      const anyTaskActive = this.store.isAnyTaskActive();
      if (anyTaskActive) {
        this.favicon.setIcon('assets/favicon-active.svg');
      } else {
        this.favicon.setIcon('assets/favicon.svg');
      }
    });
    this.destroyRef.onDestroy(() => {
      const exportUrl = this.exportUrl();
      if (exportUrl) URL.revokeObjectURL(exportUrl.toString());
    });
  }
  import(event: Event) {
    this.importExport.import(event);
  }
}
