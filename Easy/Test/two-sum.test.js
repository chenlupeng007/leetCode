import twoSum from "../two-sum";

describe("two sum", () => {
  test("case 1", () => {
    let nums = [2, 7, 11, 15];
    let target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
    nums = [3, 3];
    target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});
