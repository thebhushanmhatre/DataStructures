// Triangle
// Return min path sum to reach from top to bottom of a triangular array
// every row i, it contains i+1 elements
// From every row, if you are on index j, then you can move to next row only on index j or j + 1;

function rec_minPathSum(mat, n, i = 0, j = 0) {
  if (i == n) return mat[i][j];

  let bottom = mat[i][j] + rec_minPathSum(mat, n, i + 1, j);
  let right = mat[i][j] + rec_minPathSum(mat, n, i + 1, j + 1);

  return Math.min(bottom, right);
}
// let arr = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]];
// let ans = rec_minPathSum(arr, arr.length - 1);
// console.log('\nans: ', ans);

// optimizing this using memoization
function memo_minPathSum(mat, n, mem, i = 0, j = 0) {
  if (i == n) return mat[i][j];
  if (mem[i][j] >= 0) return mem[i][j];

  let bottom = mat[i][j] + minPathSum(mat, n, mem, i + 1, j);
  let right = mat[i][j] + minPathSum(mat, n, mem, i + 1, j + 1);

  return (mem[i][j] = Math.min(bottom, right));
}
// let arr = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]];
// let mem = Array(arr.length).fill()
//             .map((_,i) => Array(arr[i].length).fill(-1))

// let ans = minPathSum(arr, arr.length - 1, mem);

// tabulation
function tabu_minPathSum(mat) {
  let mem = Array(mat.length)
    .fill()
    .map((_, i) => Array(mat[i].length).fill(-1));
  mem[0][0] = mat[0][0];

  for (let i = 1; i < mat.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      let top = j != i ? mat[i][j] + mem[i - 1][j] : Number.MAX_SAFE_INTEGER;
      let prevTop =
        j > 0 ? mat[i][j] + mem[i - 1][j - 1] : Number.MAX_SAFE_INTEGER;
      // console.log({ top,
      //     prevTop,
      //     curr: mat[i][j],
      //     topEl: mem[i-1][j],
      //     prevEl: mem[i-1][j-1]
      // })
      mem[i][j] = Math.min(top, prevTop);
    }
  }
  console.log({ mem });

  return Math.min(...mem[mem.length - 1]);
}

// space optimizing
function minPathSum(mat) {
  let dp = Array(mat.length).fill(-1);
  dp[0] = mat[0][0];
  let previous = dp[0];

  for (let i = 1; i < mat.length; i++) {
    previous = dp[0];
    for (let j = 0; j < i + 1; j++) {
      let top = j != i ? mat[i][j] + dp[j] : Number.MAX_SAFE_INTEGER;
      let prevTop = j > 0 ? mat[i][j] + previous : Number.MAX_SAFE_INTEGER;
      if (j > 0) previous = dp[j];
      dp[j] = Math.min(top, prevTop);
    }
  }

  return Math.min(...dp);
}
// let arr = [[1], [2, 3], [3, 6, 7], [8, 9, 6, 10]];
// let ans = minPathSum(arr);
let arr2 = [[1], [2, 1], [3, 6, 1], [8, 9, 6, 1]];
let ans = minPathSum(arr2);
console.log('\nans: ', ans);

// 1
// 2 3
// 3 6 7
// 8 9 6 10

// mem:
// 1
// 3 4
// 6 9 14
// 14 15 ...

// 1
// 3, 4
// 6, 9, 10, 11
// 14, 15, 18, 15, 16, 17, 21 => min 14
