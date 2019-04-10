import reverse from "../reverse-interger";

describe("reverse", () => {
  test("reverse", () => {
    let input = 123;
    expect(reverse(input)).toBe(321);
    input = -123;
    expect(reverse(input)).toBe(-321);
    input = 120;
    expect(reverse(input)).toBe(21);
  });
});
