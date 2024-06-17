import { Directive, ElementRef, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const utcDateToLocalDate = (date: Date): Date => {
  const utcDate = new Date(date);
  return new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60000);
};

const toDateTimeLocalValue = (date: Date): string => {
  return date.toISOString().replace('Z', '');
};

@Directive({
  selector: 'input[type="datetime-local"]',
  host: {
    '(input)': 'this._handleInput($event.target.value)',
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
  private _elementRef = inject<ElementRef<HTMLInputElement>>(ElementRef);

  writeValue(value: unknown): void {
    const normalizedValue = value instanceof Date ? toDateTimeLocalValue(utcDateToLocalDate(value)) : null;
    this._elementRef.nativeElement.value = normalizedValue ?? '';
  }

  _handleInput(value: string | undefined): void {
    this.onChange(value?.length ? new Date(value) : value);
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
