import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ButtonResetInputComponent } from '@app/directives/button-reset-input.component';
import { DatetimeLocalDirective } from '@app/directives/datetime-local.directive';
import { AppStore } from '@app/providers/state';
import { option } from '@app/utils/assert';

@Component({
  selector: 'dialog-edit-session',
  templateUrl: './dialog-edit-session.component.html',
  styleUrl: './dialog-edit-session.component.scss',
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
    MatSuffix,
    ReactiveFormsModule,
    DatetimeLocalDirective,
    ButtonResetInputComponent,
  ],
})
export default class DialogEditSessionComponent {
  private state = inject(AppStore);

  form = new FormGroup<{ start: FormControl<Date | null>; end: FormControl<Date | null> }>({
    start: new FormControl(null, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    end: new FormControl(null),
  });

  private assignValues = effect(() => {
    this.form.reset({
      start: option(this.state.dialogSession()?.start).map((value) => new Date(value)),
      end: option(this.state.dialogSession()?.end).map((value) => new Date(value)),
    });
  });

  onSubmit() {
    const { start, end } = this.form.value;
    if (this.form.valid && start) {
      this.state.editSession({
        start: start.valueOf(),
        end: end?.valueOf(),
      });
    }
  }
}
