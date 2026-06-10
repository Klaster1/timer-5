import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { FormField, FormRoot, required, form as signalForm } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ButtonResetInputComponent } from '@app/directives/button-reset-input';
import { DatetimeLocalDirective } from '@app/directives/datetime-local';
import { AppStore } from '@app/providers/state';
import { optionalNumber } from '@app/utils/number';

@Component({
  selector: 'dialog-edit-session',
  templateUrl: './dialog-edit-session.html',
  styleUrl: './dialog-edit-session.scss',
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
    MatSuffix,
    FormField,
    FormRoot,
    DatetimeLocalDirective,
    ButtonResetInputComponent,
  ],
})
export default class DialogEditSessionComponent {
  private state = inject(AppStore);

  public readonly taskId = input<string>();
  public readonly sessionIndex = input(undefined, { transform: optionalNumber });

  private session = computed(() => {
    const taskId = this.taskId();
    const idx = this.sessionIndex();
    if (!taskId || idx === undefined) return undefined;
    return this.state.tasks()[taskId]?.sessions[idx];
  });

  sessionModel = linkedSignal<{ start: Date | null; end: Date | null }>(() => {
    const session = this.session();
    return {
      start: session?.start != null ? new Date(session.start) : null,
      end: session?.end != null ? new Date(session.end) : null,
    };
  });
  form = signalForm(this.sessionModel, (schema) => {
    required(schema.start);
  });

  onSubmit() {
    const taskId = this.taskId();
    const idx = this.sessionIndex();
    const { start, end } = this.sessionModel();
    if (this.form.start().valid() && start instanceof Date && taskId && idx !== undefined) {
      this.state.editSession(taskId, idx, {
        start: start.valueOf(),
        end: end instanceof Date ? end.valueOf() : undefined,
      });
    }
  }
}
