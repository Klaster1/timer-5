import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    DatetimeLocalDirective,
  ],
})
export class DialogEditSessionComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogEditSessionData,
    private dialog: MatDialogRef<DialogEditSessionComponent, DialogEditSessionData>
  ) {}
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
