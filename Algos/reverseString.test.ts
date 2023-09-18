import { expect, test, describe } from "bun:test";
import { reverseString } from "./reverseString";

describe("reversString Test suite", () => {
  test("Given a string, it reverses correctly", () => {
    expect(reverseString("Hi")).toBe("iH");
  });
});
