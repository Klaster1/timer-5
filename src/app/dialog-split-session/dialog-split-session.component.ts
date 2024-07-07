import { DatePipe, JsonPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogConfig,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { DatetimeLocalDirective } from '@app/directives/datetime-local.directive';
import { DurationComponent } from '@app/directives/duration.component';
import { TemplateContextTypeDirective } from '@app/directives/template-context-type.directive';
import { Milliseconds } from '@app/domain/date-time';
import { Session, sessionDuration } from '@app/domain/task';
import { MapPipe } from '@app/pipes/map.pipe';
import { AppStore } from '@app/providers/state';

export interface DialogSplitSessionData {
  start: number;
  end: number;
}

@Component({
  selector: 'dialog-split-session',
  templateUrl: './dialog-split-session.component.html',
  styleUrls: ['./dialog-split-session.component.scss', '../screen-task/mat-table.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatFormField,
    MatError,
    MatLabel,
    MatInput,
    DatetimeLocalDirective,
    JsonPipe,
    MatSlider,
    MatSliderThumb,
    DatePipe,
    DurationComponent,
    MapPipe,
    TemplateContextTypeDirective,
    NgTemplateOutlet,
  ],
})
export default class DialogSplitSessionComponent {
  static dialogConfig: MatDialogConfig = {
    autoFocus: false,
  };

  public readonly state = inject(AppStore);

  public value = signal<null | Milliseconds>(null);

  constructor() {
    effect(
      () => {
        const session = this.state.dialogSession();
        if (!session) return;
        const middle = session.start + (session.end! - session.start) / 2;
        this.value.set(middle);
      },
      {
        allowSignalWrites: true,
      },
    );
  }

  public beforeSessions = computed(() => {
    const session = this.state.dialogSession();
    return session ? [session] : [];
  });
  public afterSessions = computed(() => {
    const value = this.value();
    const session = this.state.dialogSession();
    if (!session || value === null) return [];
    const before: Session = { ...session, end: value };
    const after: Session = { ...session, start: value };
    return [before, after];
  });
  public min = computed(() => {
    const session = this.state.dialogSession();
    return session?.start;
  });
  public max = computed(() => {
    const session = this.state.dialogSession();
    return session?.end;
  });
  public submitDisabled = computed(() => {
    return this.value() === this.state.dialogSession()?.start || this.value() === this.state.dialogSession()?.end;
  });
  sessionDuration = sessionDuration;

  sessionsContext!: {
    sessions: Session[];
  };

  submit() {
    const disabled = this.submitDisabled();
    const result = this.afterSessions();
    if (disabled || !result) return;
    this.state.splitSession(result);
  }
}
