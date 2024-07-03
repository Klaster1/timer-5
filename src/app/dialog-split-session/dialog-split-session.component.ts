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
import { RoutedDialogConfig } from '@app/services/routed-dialogs';
import { AppStore } from '@app/services/state';

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
  static dialogConfig: RoutedDialogConfig = {
    id: 'dialog-split-session',
  };
  public data = inject<DialogSplitSessionData>(MAT_DIALOG_DATA);
  private dialog = inject<MatDialogRef<DialogSplitSessionComponent, DialogSplitSessionData>>(MatDialogRef);
}