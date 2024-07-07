export const isTruthy = <T>(value: T): value is NonNullable<T> => !!value;

export const assertNever = (value: never): never => {
  throw new Error(`This should never happen: ${value}`);
};

export const deepEquals = <T>(a: T, b: T): boolean => JSON.stringify(a) === JSON.stringify(b);

export const isNumber = (value: any): value is number => typeof value === 'number';

export const option = <T, U>(value: T | null | undefined) => ({
  map: <U>(fn: (value: T) => U) => (!!value ? fn(value) : null),
});
