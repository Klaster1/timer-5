import { Control } from '@ng-stack/forms';

export type WrapControls<T> = { [K in keyof Required<T>]: T[K] extends object ? Control<T[K]> : T[K] };
