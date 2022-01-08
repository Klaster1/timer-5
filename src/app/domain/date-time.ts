import { assertNever } from '@app/utils/assert';
import { pad2 } from '@app/utils/number';

export type Duration = Milliseconds;
export type Seconds = number;
export type Milliseconds = number;

export const formatHours = (value: Duration): string => {
  if (value <= 0) return '';

  return (['h', 'm'] as const)
    .map((part) => {
      switch (part) {
        case 'h':
          // eslint-disable-next-line no-bitwise
          return pad2(~~(value / 3600000));
        case 'm':
          // eslint-disable-next-line no-bitwise
          return pad2(~~((value % 3600000) / 60000));
        default:
          return assertNever(part);
      }
    })
    .join(':');
};
