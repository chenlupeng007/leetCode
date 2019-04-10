const twoSum = function(nums, target) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[target - nums[i]] > -1) return [cache[target - nums[i]], i];
    cache[nums[i]] = i;
  }
};

export default twoSum;
