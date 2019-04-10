import longestCommonPrefix from "../longest-common-prefix";

describe("longest common prefix", () => {
  test("longest common prefix", () => {
    let input = ["flower", "flow", "flight"];
    expect(longestCommonPrefix(input)).toBe("fl");
    input = ["dog", "racecar", "car"];
    expect(longestCommonPrefix(input)).toBe("");
  });
});
