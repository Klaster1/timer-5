import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogConfig,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { DurationComponent } from '@app/directives/duration';
import { TemplateContextTypeDirective } from '@app/directives/template-context-type';
import { Milliseconds } from '@app/domain/date-time';
import { Session, sessionDuration } from '@app/domain/task';
import { MapPipe } from '@app/pipes/map';
import { AppStore } from '@app/providers/state';
import { optionalNumber } from '@app/utils/number';

export interface DialogSplitSessionData {
  start: number;
  end: number;
}

@Component({
  selector: 'dialog-split-session',
  templateUrl: './dialog-split-session.html',
  styleUrls: ['./dialog-split-session.scss'],
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatSlider,
    MatSliderThumb,
    DatePipe,
    DurationComponent,
    MatTableModule,
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

  public readonly taskId = input<string>();
  public readonly sessionIndex = input(undefined, { transform: optionalNumber });

  private session = computed(() => {
    const taskId = this.taskId();
    const idx = this.sessionIndex();
    if (!taskId || idx === undefined) return undefined;
    return this.state.tasks()[taskId]?.sessions[idx];
  });

  public value = linkedSignal<null | Milliseconds>(() => {
    const session = this.session();
    if (!session) return null;
    return session.start + (session.end! - session.start) / 2;
  });

  public beforeSessions = computed(() => {
    const session = this.session();
    return session ? [session] : [];
  });
  public afterSessions = computed(() => {
    const value = this.value();
    const session = this.session();
    if (!session || value === null) return [];
    const before: Session = { ...session, end: value };
    const after: Session = { ...session, start: value };
    return [before, after];
  });
  public min = computed(() => this.session()?.start);
  public max = computed(() => this.session()?.end);
  public submitDisabled = computed(() => {
    const session = this.session();
    return this.value() === session?.start || this.value() === session?.end;
  });
  sessionDuration = sessionDuration;
  splitPreviewColumns = ['start', 'end', 'duration'];

  sessionsContext!: {
    sessions: Session[];
  };

  submit() {
    const disabled = this.submitDisabled();
    const result = this.afterSessions();
    const taskId = this.taskId();
    const idx = this.sessionIndex();
    if (disabled || !result || !taskId || idx === undefined) return;
    this.state.splitSession(taskId, idx, result);
  }
}
