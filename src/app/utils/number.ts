export const pad2 = (value: number) => ((value || 0).toString().length === 1 ? '0' + value : value);
