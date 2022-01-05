import { InjectionToken } from '@angular/core';

export type Entries<T> = {
  [P in keyof T]: [P, T[P]];
}[keyof T];

export type FilterFormsSettings<T> = {
  urlFragmentIndex: number;
  encodeValue: (pair: Entries<T>) => readonly [keyof T, string] | null;
  decodeValue: (key: string, rawValue: string) => Entries<T> | null;
};

export const FILTER_FORM_SETTINGS = new InjectionToken<FilterFormsSettings<any>>('filter form settings');
