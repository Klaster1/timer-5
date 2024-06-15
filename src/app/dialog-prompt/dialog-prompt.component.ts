import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

export interface DialogPromptData {
  title: string;
  placeholder?: string;
  value?: string;
}

@Component({
  selector: 'dialog-prompt',
  templateUrl: './dialog-prompt.component.html',
  styleUrls: ['./dialog-prompt.component.scss'],
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
export class DialogPromptComponent {
  public data: DialogPromptData = inject(MAT_DIALOG_DATA);
  private dialog = inject<MatDialogRef<DialogPromptComponent, string>>(MatDialogRef);
  constructor() {
    if (this.data.value) this.form.setValue({ value: this.data.value });
  }
  form = new FormGroup({
    value: new FormControl<string | null>(null, [Validators.required]),
  });
  onSubmit() {
    const { value } = this.form.value;
    if (this.form.valid && typeof value === 'string') this.dialog.close(value);
  }
}
