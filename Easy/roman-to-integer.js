const map = {
  A: 0,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = function(s) {
  let result = 0;
  let pre = "A";
  let cur = null;
  for (let i = s.length - 1; i >= 0; i--) {
    cur = s[i];
    map[cur] >= map[pre] ? (result += map[cur]) : (result -= map[cur]);
    pre = cur;
  }
  return result;
};

export default romanToInt;
