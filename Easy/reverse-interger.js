const reverse = function(x) {
  let num =
    Math.sign(x) *
    parseInt(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  if (num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31)) return 0;
  return num;
};

export default reverse;
