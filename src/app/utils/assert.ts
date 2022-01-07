export function isTruthy<T>(value: T): value is NonNullable<T> {
  return !!value;
}

export const assertNever = (value: never): never => {
  throw new Error(`This should never happen: ${value}`);
};
