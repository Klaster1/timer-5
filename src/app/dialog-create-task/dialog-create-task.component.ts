import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AppStore } from '@app/providers/state';

@Component({
  selector: 'dialog-create-task',
  templateUrl: './dialog-create-task.component.html',
  styleUrl: './dialog-create-task.component.scss',
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
export default class DialogCreateTaskComponent {
  private state = inject(AppStore);
  form = new FormGroup({
    value: new FormControl<string | null>(null, [Validators.required]),
  });
  onSubmit() {
    const { value } = this.form.value;
    if (this.form.valid && typeof value === 'string') {
      this.state.createTask(value);
    }
  }
}
