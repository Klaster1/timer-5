export const isTruthy = <T>(value: T): value is NonNullable<T> => !!value;

export const assertNever = (value: never): never => {
  throw new Error(`This should never happen: ${value}`);
};

export const deepEquals = (a: any, b: any): boolean => JSON.stringify(a) === JSON.stringify(b);

export const isNumber = (value: any): value is number => typeof value === 'number';
