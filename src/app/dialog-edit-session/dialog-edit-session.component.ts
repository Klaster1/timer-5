import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DatetimeLocalDirective } from '@app/directives/datetime-local.directive';
import { AppStore } from '@app/providers/state';

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
    ReactiveFormsModule,
    DatetimeLocalDirective,
  ],
})
export default class DialogEditSessionComponent {
  private dialog = inject<MatDialogRef<DialogEditSessionComponent>>(MatDialogRef);
  private route = inject(ActivatedRouteSnapshot);
  private state = inject(AppStore);

  form = new FormGroup<{ start: FormControl<Date>; end: FormControl<Date | null> }>({
    start: new FormControl(new Date(this.route.data.session.start), {
      validators: [Validators.required],
      nonNullable: true,
    }),
    end: new FormControl(this.route.data.session.end ? new Date(this.route.data.session.end) : null),
  });
  onSubmit() {
    const { start, end } = this.form.value;
    if (this.form.valid && start) {
      this.state.editSession(this.route.params.taskId, this.route.params.sessionIndex, {
        start: start.valueOf(),
        end: end?.valueOf(),
      });
      this.dialog.close();
    }
  }
}
