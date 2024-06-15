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
import { DatetimeLocalDirective } from '@app/directives/datetime-local.directive';

export interface DialogEditSessionData {
  start: number;
  end?: number;
}

@Component({
  selector: 'dialog-edit-session',
  templateUrl: './dialog-edit-session.component.html',
  styleUrls: ['./dialog-edit-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatFormField,
    MatError,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    DatetimeLocalDirective,
  ],
})
export default class DialogEditSessionComponent {
  public data = inject<DialogEditSessionData>(MAT_DIALOG_DATA);
  private dialog = inject<MatDialogRef<DialogEditSessionComponent, DialogEditSessionData>>(MatDialogRef);

  form = new FormGroup<{ start: FormControl<Date>; end: FormControl<Date | null> }>({
    start: new FormControl(new Date(this.data.start), { validators: [Validators.required], nonNullable: true }),
    end: new FormControl(this.data.end ? new Date(this.data.end) : null),
  });
  onSubmit() {
    const { start, end } = this.form.value;
    if (this.form.valid && start)
      this.dialog.close({
        start: start.valueOf(),
        end: end?.valueOf(),
      });
  }
}
