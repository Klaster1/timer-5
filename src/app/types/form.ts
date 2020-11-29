import { Control } from '@ng-stack/forms';

export type WrapControls<T> = { [K in keyof Required<T>]: T[K] extends Record<any, any> ? Control<T[K]> : T[K] };
