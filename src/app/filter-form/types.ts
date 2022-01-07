import { InjectionToken } from '@angular/core';
import { Decoder, Entries } from '@app/domain/router';

export type FilterFormsSettings<T> = {
  urlFragmentIndex: number;
  encodeValue: (pair: Entries<T>) => readonly [keyof T, string] | null;
  decodeValue: Decoder<T>;
};

export const FILTER_FORM_SETTINGS = new InjectionToken<FilterFormsSettings<any>>('filter form settings');
