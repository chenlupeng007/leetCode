import isValid from "../valid-parentheses";

describe("isValid", () => {
  test("isValid", () => {
    let input = "()";
    expect(isValid(input)).toBeTruthy();
    input = "()[]{}";
    expect(isValid(input)).toBeTruthy();
    input = "(]";
    expect(isValid(input)).toBeFalsy();
    input = "([)]";
    expect(isValid(input)).toBeFalsy();
  });
});
