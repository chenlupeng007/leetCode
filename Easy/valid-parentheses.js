const map = {
  "(": ")",
  "{": "}",
  "[": "]"
};

const isValid = function(s) {
  let stack = [];
  for (let parenthese of s) {
    if (parenthese in map) {
      stack.push(parenthese);
      continue;
    }
    if (stack.length == 0) return false;
    if (parenthese !== map[stack.pop()]) return false;
  }

  return stack.length == 0;
};

export default isValid;
