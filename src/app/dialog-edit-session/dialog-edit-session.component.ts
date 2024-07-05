import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DatetimeLocalDirective } from '@app/directives/datetime-local.directive';
import { AppStore } from '@app/providers/state';
import { SessionRoute, TaskRoute } from '@app/types/route-data';

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
  private data = inject(ActivatedRouteSnapshot).data as SessionRoute & TaskRoute;
  private state = inject(AppStore);

  form = new FormGroup<{ start: FormControl<Date>; end: FormControl<Date | null> }>({
    start: new FormControl(new Date(this.data.session.start), {
      validators: [Validators.required],
      nonNullable: true,
    }),
    end: new FormControl(this.data.session.end ? new Date(this.data.session.end) : null),
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
