// m x n matrix
// start from any cell in 1st row, destination: any cell in last cell
// can move directly below, below to the right, or below to left

// trying to directly solve using tabulation + space optimzation
function maxPathSum(mat) {
  let m = mat.length,
    n = mat[0].length;
  let prevRowSums = [...mat[0]];

  for (let i = 1; i < m; i++) {
    let currentRow = [...mat[i]];
    for (let j = 0; j < n; j++) {
      let prev = j > 0 ? prevRowSums[j - 1] : -1;
      let curr = prevRowSums[j];
      let next = j < n - 1 ? prevRowSums[j + 1] : -1;

      currentRow[j] = currentRow[j] + Math.max(prev, curr, next);
    }
    prevRowSums = [...currentRow];
  }

  return Math.max(...prevRowSums);
}

let arr = [
  [1, 2, 10, 4],
  [100, 3, 2, 1],
  [1, 1, 20, 2],
  [1, 2, 2, 1],
];
// ans = 105 (2, 100, 1, 2)

let ans = maxPathSum(arr);
console.log('ans: ', ans);
