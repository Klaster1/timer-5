import { isValid } from 'date-fns/isValid';
import { parseISO } from 'date-fns/parseISO';

/**
 * `input()` transform that parses an optional URI-encoded ISO route/query param into a Date.
 * Returns `undefined` for nullish, empty, or invalid values.
 */
export const optionalDate = (value: unknown): Date | undefined => {
  if (value == null || value === '') return undefined;
  const parsed = parseISO(decodeURIComponent(String(value)));
  return isValid(parsed) ? parsed : undefined;
};
