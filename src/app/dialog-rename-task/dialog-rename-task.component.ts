import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AppStore } from '@app/providers/state';

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
  private state = inject(AppStore);
  form = new FormGroup({
    value: new FormControl<string | null>(null, [Validators.required]),
  });
  private assignValues = effect(() => {
    this.form.reset({ value: this.state.dialogTask()?.name });
  });
  onSubmit() {
    const { value } = this.form.value;
    if (this.form.valid && typeof value === 'string') {
      this.state.renameTask(value);
    }
  }
}
