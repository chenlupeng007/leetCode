const v = [20, 5, 10, 40, 15, 25];
const w = [1, 2, 3, 8, 7, 4];
const W = 10;

// function knapSack(v, w, n, W){
//   if(W < 0) return -Infinity;
//   if(n < 0 || W == 0) return 0
//   let include = v[n] + knapSack(v, w, n-1, W-w[n])
//   let exclude = knapSack(v, w, n-1, W)
//   return Math.max(include, exclude)
// }

function knapSack(v, w, n, W) {
  let table = new Array();
  for (let i = 0; i <= n; i++) {
    table.push([]);
  }
  for (let i = 0; i <= W; i++) {
    table[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (j = 0; j <= W; j++) {
      if (j < w[i - 1]) table[i][j] = table[i - 1][j];
      else
        table[i][j] = Math.max(
          table[i - 1][j],
          table[i - 1][j - w[i - 1]] + v[i - 1]
        );
    }
  }

  return table;
}
console.log(knapSack(v, w, v.length, W));
