import { Component, effect, inject, signal } from '@angular/core';
import { FormField, FormRoot, required, form as signalForm } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ButtonResetInputComponent } from '@app/directives/button-reset-input';
import { DatetimeLocalDirective } from '@app/directives/datetime-local';
import { AppStore } from '@app/providers/state';

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

  sessionModel = signal<{ start: Date | null; end: Date | null }>({ start: null, end: null });
  form = signalForm(this.sessionModel, (schema) => {
    required(schema.start);
  });

  private syncFromStore = effect(() => {
    const session = this.state.dialogSession();
    this.sessionModel.set({
      start: session?.start != null ? new Date(session.start) : null,
      end: session?.end != null ? new Date(session.end) : null,
    });
  });

  onSubmit() {
    const { start, end } = this.sessionModel();
    if (this.form.start().valid() && start instanceof Date) {
      this.state.editSession({
        start: start.valueOf(),
        end: end instanceof Date ? end.valueOf() : undefined,
      });
    }
  }
}
