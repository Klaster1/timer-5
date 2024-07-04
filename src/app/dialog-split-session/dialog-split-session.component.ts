import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AppStore } from '@app/providers/state';

export interface DialogSplitSessionData {
  start: number;
  end: number;
}

@Component({
  selector: 'dialog-split-session',
  templateUrl: './dialog-split-session.component.html',
  styleUrl: './dialog-split-session.component.scss',
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
    JsonPipe,
  ],
})
export default class DialogSplitSessionComponent {
  public readonly state = inject(AppStore);
  public data = inject<DialogSplitSessionData>(MAT_DIALOG_DATA);
  private dialog = inject<MatDialogRef<DialogSplitSessionComponent, DialogSplitSessionData>>(MatDialogRef);
}
