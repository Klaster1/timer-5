export const toYesterday = (d: Date): Date => {
  const date = new Date(d);
  date.setDate(date.getDate() - 1);
  return date;
};
export const toDateEnd = (d: Date): Date => {
  const date = new Date(d);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  date.setMilliseconds(999);
  return date;
};
export const dateDayStart = (d: Date) => {
  const date = new Date(d);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};
export const dateYesterdayStart = (d: Date) => {
  const date = toYesterday(d);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};
export const dateMonday = (d: Date) => {
  const date = new Date(d);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  const day = date.getDay();
  const diff = date.getDate() - day + (day == 0 ? -6 : 1);
  date.setDate(diff);
  return date;
};
export const dateMonthStart = (d: Date) => {
  const date = new Date(d);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};
export const dateYearStart = (d: Date) => {
  const date = new Date(d);
  date.setMonth(0);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
};
