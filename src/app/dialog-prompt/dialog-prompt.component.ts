import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@ng-stack/forms';

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
})
export class DialogPromptComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogPromptData,
    private dialog: MatDialogRef<DialogPromptComponent, string>
  ) {
    if (data.value) this.form.setValue({ value: data.value });
  }
  form = new FormGroup({
    value: new FormControl<string>(null, [Validators.required]),
  });
  onSubmit() {
    if (this.form.valid) this.dialog.close(this.form.value.value);
  }
}
