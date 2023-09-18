import { expect, test, describe } from "bun:test";
import { mergeSortedArrays } from "./mergeSortedArrays";

describe("mergeSortedArrays Test suite", () => {
  test("Given two sorted arrays, it returns a merged sorted array", () => {
    expect(mergeSortedArrays([3,6], [2,4])).toEqual([2,3,4,6]);
  });
});
