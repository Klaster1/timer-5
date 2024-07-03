import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppStore } from '@app/services/state';

export interface DialogPromptData {
  title: string;
  placeholder?: string;
  value?: string;
}

@Component({
  selector: 'dialog-rename-task',
  templateUrl: './dialog-rename-task.component.html',
  styleUrl: './dialog-rename-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
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
    ReactiveFormsModule,
  ],
})
export default class DialogRenameTaskComponent {
  static dialogConfig = {};

  private route = inject(ActivatedRouteSnapshot);
  private state = inject(AppStore);
  private dialog = inject<MatDialogRef<DialogRenameTaskComponent, string>>(MatDialogRef);
  form = new FormGroup({
    value: new FormControl<string | null>(this.route.data.task.name, [Validators.required]),
  });
  onSubmit() {
    const { value } = this.form.value;
    if (this.form.valid && typeof value === 'string') {
      this.state.renameTask(this.route.params.taskId, value);
      this.dialog.close(value);
    }
  }
}
