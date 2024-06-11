import { Directive, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const utcDateToLocalDate = (date: Date): Date => {
  const utcDate = new Date(date);
  return new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60000);
};

const localDateToUtcDate = (date: Date): Date => {
  const localDate = new Date(date);
  return new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60000);
};

@Directive({
  selector: 'input[type="datetime-local"]',
  host: {
    '(input)': 'this._handleInput($event.target.valueAsDate)',
    '(blur)': 'onTouched()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimeLocalDirective),
      multi: true,
    },
  ],
  standalone: true,
})
export class DatetimeLocalDirective implements ControlValueAccessor {
  constructor(private _elementRef: ElementRef<HTMLInputElement>) {}

  writeValue(value: unknown): void {
    const normalizedValue = value instanceof Date ? utcDateToLocalDate(value) : null;
    this._elementRef.nativeElement.valueAsDate = normalizedValue;
  }

  _handleInput(value: Date | undefined): void {
    this.onChange(value instanceof Date ? localDateToUtcDate(value) : value);
  }

  onChange = (_: any) => {};

  onTouched = () => {};

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._elementRef.nativeElement.disabled = isDisabled;
  }
}
