import { InjectionToken } from '@angular/core';
import { Decoder, Encoder } from '@app/domain/router';

export type FilterFormsSettings<Decoded> = {
  urlFragmentIndex: number;
  encoder: Encoder<Decoded>;
  decoder: Decoder<Decoded>;
};

export const FILTER_FORM_SETTINGS = new InjectionToken<FilterFormsSettings<any>>('filter form settings');
