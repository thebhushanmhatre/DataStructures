// grid: m x n has points
// ninjaA is at 0,0  top left
// ninjaB is at 0,n-1 top right
// can only move down left, directly below or to right
// i.e. from i,j to i+1 th row on cell: j-1, j, j+1
// if both are on same cell, points cannot be doubled
// Find max path sum in grid

let arr = [
  [2, 3, 1, 2],
  [3, 4, 2, 2],
  [5, 6, 3, 5],
]; // ans = 21

// recursion
function rec_maxPathSum(mat, a = 0, b = mat[0].length - 1, index = 0) {
  if (index == mat.length - 1) {
    return mat[index][a] + mat[index][b];
  }

  let maxSum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (
        a + i >= 0 &&
        b + j > a + i &&
        a + i < b + j &&
        b + i < mat[0].length
      ) {
        let sum =
          mat[index][a] +
          mat[index][b] +
          rec_maxPathSum(mat, a + i, b + j, index + 1);

        // Note : You made the mistake to add a+i, b+j th element in sum, instead of current element

        if (sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }

  return maxSum;

  // a can be a - 1, a, a + 1
  // b can be b - 1, b, b + 1
  // given a != b, so 9 possibilities on every index + 1;
}
// let ans = maxPathSum(arr);
// console.log('ans: ', ans);

// memoization
function maxPathSum(mat, mem, a = 0, b = mat[0].length - 1, index = 0) {
  if (index == mat.length - 1) {
    return (mem[index][a][b] = mat[index][a] + mat[index][b]);
  }

  if (mem[index][a][b] >= 0) {
    return mem[index][a][b];
  }

  let maxSum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (a + i >= 0 && a + i < b + j && b + j < mat[0].length) {
        sum =
          mat[index][a] +
          mat[index][b] +
          maxPathSum(mat, mem, a + i, b + j, index + 1);

        if (sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }
  return (mem[index][a][b] = maxSum);
}

arr = [
  [20, 3, 1, 2],
  [1, 1, 30, 20],
  [20, 60, 3, 10],
];
// (20, 1, 20) 41 + 92 (2, 30, 60) = 133 => ans
// 80 + 31 (111) + 22(133) = 133

let mem = Array(arr.length)
  .fill()
  .map(() =>
    Array(arr[0].length)
      .fill()
      .map(() => Array(arr[0].length).fill(-1))
  );
//  row `x column x column
// index x   a    x   b

let ans = maxPathSum(arr, mem);
console.log('ans: ', ans, mem);
