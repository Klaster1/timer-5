import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Control, FormBuilder } from '@ng-stack/forms';

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
    private fb: FormBuilder,
    private dialog: MatDialogRef<DialogEditSessionComponent, DialogEditSessionData>
  ) {}
  form = this.fb.group<{ start: Control<Date>; end: Control<Date> }>({
    start: this.fb.control(new Date(this.data.start)),
    end: this.fb.control(this.data.end ? new Date(this.data.end) : undefined),
  });
  onSubmit() {
    this.dialog.close({
      start: this.form.value.start.valueOf(),
      end: Number.isNaN(this.form.value.end?.valueOf()) ? undefined : this.form.value.end.valueOf(),
    });
  }
}
