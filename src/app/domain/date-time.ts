import { assertNever } from '@app/utils/assert';
import { pad2 } from '@app/utils/number';

export type Duration = Milliseconds;
export type Seconds = number;
export type Milliseconds = number;
export type DurationFn = (now: Milliseconds) => Duration;

export const formatHours = (value: Duration): string => {
  if (value <= 0) return '00:00';

  return (['h', 'm'] as const)
    .map((part) => {
      switch (part) {
        case 'h':
          return pad2(~~(value / 3600000));
        case 'm':
          return pad2(~~((value % 3600000) / 60000));
        default:
          return assertNever(part);
      }
    })
    .join(':');
};

export const daysToMilliseconds = (days: number): Milliseconds => days * 24 * 60 * 60 * 1000;
