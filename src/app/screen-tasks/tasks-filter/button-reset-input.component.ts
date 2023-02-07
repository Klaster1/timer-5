import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  standalone: true,
  imports: [MatButtonModule, NgIf, MatIconModule],
})
export class ButtonResetInputComponent<T> {
  @Input() control?: FormControl<T>;
}
