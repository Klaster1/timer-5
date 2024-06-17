import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { encodeFilterParams } from '@app/domain/router';
import { Session, Task, getSessionId } from '@app/domain/task';
import { AppStore } from '@app/services/state';

@Component({
  templateUrl: './button-session-actions.component.html',
  styleUrls: ['./button-session-actions.component.scss'],
  selector: 'button-session-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger, MatIconButton, MatIcon, RouterLink],
})
export class ButtonSessionActionsComponent {
  private store = inject(AppStore);

  public task = input<Task>();
  public session = input<Session>();

  edit() {
    const task = this.task();
    const session = this.session();
    if (task && session) this.store.editSession(task?.id, getSessionId(session));
  }
  remove() {
    const task = this.task();
    const session = this.session();
    if (task && session) {
      this.store.deleteSession(task.id, getSessionId(session));
    }
  }
  get skipBeforeParams() {
    const session = this.session();
    return session ? encodeFilterParams({ from: new Date(session.start) }) : {};
  }
  get skipAfterParams() {
    return encodeFilterParams({ to: new Date(this.session()?.end ?? new Date()) });
  }
}
