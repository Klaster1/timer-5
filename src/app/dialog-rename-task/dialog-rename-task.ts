import { Component, inject, input, linkedSignal } from '@angular/core';
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

  public readonly taskId = input<string>();

  taskModel = linkedSignal(() => {
    const taskId = this.taskId();
    return { value: taskId ? (this.state.tasks()[taskId]?.name ?? '') : '' };
  });
  form = signalForm(this.taskModel, (schema) => {
    required(schema.value);
  });

  onSubmit() {
    const taskId = this.taskId();
    if (this.form.value().valid() && taskId) {
      this.state.renameTask(taskId, this.taskModel().value);
    }
  }
}
