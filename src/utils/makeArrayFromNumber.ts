export const makeArrayFromNumber = (number: number) =>
  Array.from({ length: number }, (v, k) => k + 1);
