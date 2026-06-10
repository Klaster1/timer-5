export const pad2 = (value: number) => ((value || 0).toString().length === 1 ? '0' + value : value.toString());

/**
 * `input()` transform that parses an optional route/query param into a number.
 * Returns `undefined` for nullish, empty, or non-numeric values.
 */
export const optionalNumber = (value: unknown): number | undefined => {
  if (value == null || value === '') return undefined;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};
