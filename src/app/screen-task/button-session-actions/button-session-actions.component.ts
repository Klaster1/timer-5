import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { encodeFilterParams } from '@app/domain/router';
import { Session, Task, getSessionId, isSessionRunning } from '@app/domain/task';
import { DialogLinkDirective } from '@app/providers/routed-dialogs';
import { AppStore } from '@app/providers/state';

@Component({
  templateUrl: './button-session-actions.component.html',
  styleUrls: ['./button-session-actions.component.scss'],
  selector: 'button-session-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatMenu,
    MatMenuContent,
    MatMenuItem,
    MatMenuTrigger,
    MatIconButton,
    MatIcon,
    RouterLink,
    DialogLinkDirective,
  ],
})
export class ButtonSessionActionsComponent {
  private store = inject(AppStore);

  public task = input.required<Task>();
  public session = input.required<Session>();
  public sessionIndex = computed(() => this.task().sessions.indexOf(this.session()));

  public isSplitDisabled = computed(() => isSessionRunning(this.session()));

  remove() {
    this.store.deleteSession(this.task().id, getSessionId(this.session()));
  }
  get skipBeforeParams() {
    return encodeFilterParams({ from: new Date(this.session().start) });
  }
  get skipAfterParams() {
    return encodeFilterParams({ to: new Date(this.session()?.end ?? new Date()) });
  }
}
