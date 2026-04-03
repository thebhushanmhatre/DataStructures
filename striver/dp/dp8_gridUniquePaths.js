// Grid unique Paths
// start: 0,0; destination: m-1,n-1
// moving in matrix m x n
// only moves allowed are: right or down

// using just recursion
function r_findAllPaths(m, n, i = 0, j = 0) {
  console.log(i, j);
  if (i == m - 1 && j == n - 1) {
    return 1;
  }

  let right = j < n - 1 ? r_findAllPaths(m, n, i, j + 1) : 0;
  let left = i < m - 1 ? r_findAllPaths(m, n, i + 1, j) : 0;

  return left + right;
}
// console.log('Paths for 0,0 to 2,2 are', r_findAllPaths(2, 2));
// console.log('Paths for 0,0 to 3,3 are', r_findAllPaths(3, 3));

// optimizing using memoization
function m_findAllPaths(m, n, dp, i = 0, j = 0) {
  console.log(i, j); // To see the reduction in number of calls
  if (i == m - 1 && j == n - 1) {
    return 1;
  }

  let right =
    j < n - 1
      ? dp[i]?.[j + 1] >= 0
        ? dp[i]?.[j + 1]
        : findAllPaths(m, n, dp, i, j + 1)
      : 0;
  let left =
    i < m - 1
      ? dp[i + 1]?.[j] >= 0
        ? dp[i + 1]?.[j]
        : findAllPaths(m, n, dp, i + 1, j)
      : 0;

  return (dp[i][j] = left + right);
}

// let dp2 = Array(2).fill().map(() => Array(2).fill(-1));
// console.log('Paths for 0,0 to 2,2 are', findAllPaths(2, 2, dp2));

// const dp3 = new Array(3).fill().map(() => new Array(3).fill(-1));
// console.log('Paths for 0,0 to 3,3 are', findAllPaths(3, 3, dp3));

// tabulating the recursion
function tab_findAllPaths(m, n) {
  let dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        dp[0][0] = 1;
      } else {
        let top = i > 0 ? dp[i - 1][j] : 0;
        let left = j > 0 ? dp[i][j - 1] : 0;
        dp[i][j] = top + left;
      }
    }
  }

  return dp[m - 1][n - 1];
}

// space optimization
// we just the left element and entire above row instead of m x n matrix
function findAllPaths(m, n) {
  const prevRow = [1]; // starting (0,0) = 1
  let prevLeft = 1; // setting this outside loop for it to be used as return value
  for (let i = 0; i < m; i++) {
    prevLeft = prevRow[0]; // first element of row would be equal to above element
    for (let j = 1; j < n; j++) {
      let current = prevLeft;
      if (i > 0) {
        current += prevRow[j];
      }
      prevRow[j] = current;
      prevLeft = current;
    }
  }
  return prevLeft;
}

console.log('Paths for 0,0 to 2,2 are', findAllPaths(2, 2));
console.log('Paths for 0,0 to 3,3 are', findAllPaths(3, 3));
