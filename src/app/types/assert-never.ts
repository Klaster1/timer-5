export const assertNever = (value: never): never => {
  throw new Error(`This should never happen: ${value}`);
};
