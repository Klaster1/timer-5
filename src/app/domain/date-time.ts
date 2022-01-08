import { assertNever } from '@app/utils/assert';
import endOfDay from 'date-fns/endOfDay';
import startOfDay from 'date-fns/startOfDay';

export type Duration = number;
export type Seconds = number;
export type Milliseconds = number;
export type DateFn = (d: Date) => Date;

export const startEndFns = {
  day: [startOfDay, endOfDay],
} as const;

const pad = (value: number) => ((value || 0).toString().length === 1 ? '0' + value : value);

export const formatHours = (value: number): string => {
  if (value <= 0) {
    return '';
  }

  return (['h', 'm'] as const)
    .map((part) => {
      switch (part) {
        case 'h':
          // eslint-disable-next-line no-bitwise
          return pad(~~(value / 3600000));
        case 'm':
          // eslint-disable-next-line no-bitwise
          return pad(~~((value % 3600000) / 60000));
        default:
          return assertNever(part);
      }
    })
    .join(':');
};
