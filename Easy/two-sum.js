const twoSum = function (nums, target) {
  let cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    let remainer = target - nums[i];
    if (cache.get(remainer) > -1) return [cache.get(remainer), i]
    cache.set(nums[i], i)
  }
};

export default twoSum;