import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule],
})
export class DialogPromptComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogPromptData,
    private dialog: MatDialogRef<DialogPromptComponent, string>
  ) {
    if (data.value) this.form.setValue({ value: data.value });
  }
  form = new FormGroup({
    value: new FormControl<string | null>(null, [Validators.required]),
  });
  onSubmit() {
    const { value } = this.form.value;
    if (this.form.valid && typeof value === 'string') this.dialog.close(value);
  }
}
