const getPrefix = (pre, next) => {
  let result = "";
  for (let index = 0; index < pre.length; index++) {
    if (pre[index] == next[index]) result += pre[index];
    else return result;
  }
  return result;
};
const longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  return strs.reduce(getPrefix);
};

export default longestCommonPrefix;
