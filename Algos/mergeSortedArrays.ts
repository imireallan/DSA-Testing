export const mergeSortedArrays = (
  firstArray: number[],
  secondArray: number[]
): number[] => {
  return [...firstArray, ...secondArray].sort((a, b) => a - b);
};
