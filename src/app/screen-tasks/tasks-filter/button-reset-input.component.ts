import { Component, Input } from '@angular/core';
import { FormControl } from '@ng-stack/forms';

@Component({
  selector: 'button-reset-input-control',
  template: `
    <button *ngIf="control?.value" mat-icon-button (click)="control?.reset()">
      <mat-icon>clear</mat-icon>
    </button>
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
})
export class ButtonResetInputComponent<T> {
  @Input() control?: FormControl<T>;
}
