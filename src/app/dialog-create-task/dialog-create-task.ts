import { Component, inject, signal } from '@angular/core';
import { FormField, FormRoot, required, form as signalForm } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AppStore } from '@app/providers/state';

@Component({
  selector: 'dialog-create-task',
  templateUrl: './dialog-create-task.html',
  styleUrl: './dialog-create-task.scss',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
    FormField,
    FormRoot,
  ],
})
export default class DialogCreateTaskComponent {
  private state = inject(AppStore);

  form = signalForm(signal<{ value: string }>({ value: '' }), (schema) => {
    required(schema.value);
  });

  onSubmit() {
    const value = this.form.value().value();
    if (this.form.value().valid()) {
      this.state.createTask(value);
    }
  }
}
