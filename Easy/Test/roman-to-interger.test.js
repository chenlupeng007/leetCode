import romanToInt from '../roman-to-integer'

describe('roman-to-interger', () => {
  test('roman-to-interger', () => {
    let input = "III"
    expect(romanToInt(input)).toBe(3);
    input = "IV"
    expect(romanToInt(input)).toBe(4);
    input = "IX"
    expect(romanToInt(input)).toBe(9);
    input = "LVIII"
    expect(romanToInt(input)).toBe(58);
    input = "MCMXCIV"
    expect(romanToInt(input)).toBe(1994);
  })
})