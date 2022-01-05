import { InjectionToken } from '@angular/core';

export type FilterFormsSettings<T> = {
  decode: (url: string) => T;
  encode: (value: T, url: string) => string;
};

export const FILTER_FORM_SETTINGS = new InjectionToken<FilterFormsSettings<any>>('asd');
