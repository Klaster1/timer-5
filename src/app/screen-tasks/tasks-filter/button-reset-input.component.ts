import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'button-reset-input-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (showButton()) {
      <button mat-icon-button (click)="reset.emit()">
        <mat-icon>clear</mat-icon>
      </button>
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  standalone: true,
  imports: [MatIconButton, MatIcon],
})
export class ButtonResetInputComponent<T> {
  value = input<T>();
  reset = output<void>();
  public showButton = computed(() => {
    return this.value() !== null;
  });
}
