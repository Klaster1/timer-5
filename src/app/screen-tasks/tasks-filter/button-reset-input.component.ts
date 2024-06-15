import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'button-reset-input-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (showButton()) {
      <button mat-icon-button (click)="control()?.reset()">
        <mat-icon>clear</mat-icon>
      </button>
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      button {
        width: 36px;
      }
    `,
  ],
  standalone: true,
  imports: [MatIconButton, MatIcon],
})
export class ButtonResetInputComponent<T> {
  public control = input<FormControl<T> | undefined>();
  public showButton = computed(() => this.control()?.value !== null);
}
