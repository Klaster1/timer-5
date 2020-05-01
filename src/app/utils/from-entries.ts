export const fromEntries = <T>(entries: [string, T][]) =>
  entries.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as { [key: string]: T });
