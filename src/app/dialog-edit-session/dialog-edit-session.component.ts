import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Control, FormControl, FormGroup, Validators } from '@ng-stack/forms';

export interface DialogEditSessionData {
  start: number;
  end?: number;
}

@Component({
  selector: 'dialog-edit-session',
  templateUrl: './dialog-edit-session.component.html',
  styleUrls: ['./dialog-edit-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogEditSessionComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogEditSessionData,
    private dialog: MatDialogRef<DialogEditSessionComponent, DialogEditSessionData>
  ) {}
  form = new FormGroup<{ start: Control<Date>; end: Control<Date> }>({
    start: new FormControl(new Date(this.data.start), [Validators.required]),
    end: new FormControl(this.data.end ? new Date(this.data.end) : undefined),
  });
  onSubmit() {
    if (this.form.valid)
      this.dialog.close({
        start: this.form.value.start.valueOf(),
        end: this.form.value.end?.valueOf(),
      });
  }
}
