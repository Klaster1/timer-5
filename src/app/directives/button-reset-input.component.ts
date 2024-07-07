import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'button-reset-input-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (showButton()) {
      <button mat-icon-button (click)="reset.emit()" matTooltip="Reset value" type="button">
        <mat-icon svgIcon="close_small"></mat-icon>
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
  imports: [MatIconButton, MatIcon, MatTooltip],
})
export class ButtonResetInputComponent<T> {
  value = input<T>();
  reset = output<void>();
  public showButton = computed(() => {
    return this.value() !== null;
  });
}
