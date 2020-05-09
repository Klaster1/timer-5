export const closestHourStart = (value: Date): Date => {
  const date = new Date(value);
  date.setMinutes(0, 0, 0);
  return date;
};
export const closestHourEnd = (value: Date): Date => {
  const date = new Date(value);
  date.setMinutes(59, 59, 999);
  return date;
};
export const closestDayStart = (value: Date): Date => {
  const date = closestHourStart(value);
  date.setHours(0);
  return date;
};
export const closestDayEnd = (value: Date): Date => {
  const date = closestHourEnd(value);
  date.setHours(23);
  return date;
};
export const closestMonthStart = (value: Date): Date => {
  const date = closestDayStart(new Date(value));
  date.setDate(1);
  return date;
};
export const closestMonthEnd = (value: Date): Date => {
  const date = closestMonthStart(value);
  date.setMonth(date.getMonth() + 1);
  return new Date(date.valueOf() - 1);
};
export const closestYearStart = (d: Date) => {
  const date = closestMonthStart(d);
  date.setMonth(0);
  return date;
};
export const closestYearEnd = (value: Date): Date => {
  const date = new Date(value);
  date.setMonth(11);
  return closestMonthEnd(date);
};

export const toYesterday = (d: Date): Date => {
  const date = new Date(d);
  date.setDate(date.getDate() - 1);
  return date;
};
export const toDateEnd = (d: Date): Date => {
  const date = new Date(d);
  date.setHours(23, 59, 59, 999);
  return date;
};
export const dateDayStart = closestDayStart;
export const dateYesterdayStart = (d: Date) => closestDayStart(toYesterday(d));
export const dateMonday = (d: Date) => {
  const date = closestDayStart(d);
  const day = date.getDay();
  date.setDate(date.getDate() - day + (day == 0 ? -6 : 1));
  return date;
};
export const dateMonthStart = closestMonthStart;
export const dateYearStart = closestYearStart;

export type DateFn = (d: Date) => Date;

export const barWidths = {
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  month: 1000 * 60 * 60 * 24 * 30,
  year: 1000 * 60 * 60 * 24 * 30 * 12,
} as const;

export const startEndFns: Record<string, [DateFn, DateFn]> = {
  hour: [closestHourStart, closestHourEnd],
  day: [closestDayStart, closestDayEnd],
  month: [closestMonthStart, closestMonthEnd],
  year: [closestYearStart, closestYearEnd],
};

const pad = (value: number) => ((value || 0).toString().length === 1 ? '0' + value : value);

export const formatHours = (value: number): string => {
  if (value <= 0) {
    return '';
  }

  return ['h', 'm']
    .map((part) => {
      switch (part) {
        case 'h':
          return pad(~~(value / 3600000));
        case 'm':
          return pad(~~((value % 3600000) / 60000));
      }
    })
    .join(':');
};
