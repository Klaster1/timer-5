import { Component, effect, inject, signal } from '@angular/core';
import { FormField, FormRoot, required, form as signalForm } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AppStore } from '@app/providers/state';

@Component({
  selector: 'dialog-rename-task',
  templateUrl: './dialog-rename-task.html',
  styleUrl: './dialog-rename-task.scss',
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
export default class DialogRenameTaskComponent {
  private state = inject(AppStore);

  taskModel = signal({ value: '' });
  form = signalForm(this.taskModel, (schema) => {
    required(schema.value);
  });

  private syncFromStore = effect(() => {
    this.taskModel.set({ value: this.state.dialogTask()?.name ?? '' });
  });

  onSubmit() {
    if (this.form.value().valid()) {
      this.state.renameTask(this.taskModel().value);
    }
  }
}
