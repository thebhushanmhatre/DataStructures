// Minimum path sum
// start: 0,0; destination: m-1,n-1;
// each cell has cost, right and bottom are only moves allowed
// Find the minimum cost path

// Recursive solution
function rec_minPathSum(grid, m, n) {
  // console.log(m, n) // 19 calls
  if (m == 0 && n == 0) {
    return grid[m][n];
  }

  let top =
    m > 0
      ? grid[m][n] + rec_minPathSum(grid, m - 1, n)
      : Number.MAX_SAFE_INTEGER;
  let left =
    n > 0
      ? grid[m][n] + rec_minPathSum(grid, m, n - 1)
      : Number.MAX_SAFE_INTEGER;
  return Math.min(top, left);
}

/* 
// let ans = minPathSum(matrix, matrix.length-1, matrix[0].length-1);
// console.log('1. ans', ans)

matrix = [
    [10, 8, 2], 
    [10, 5, 100],
    [ 1, 1, 2]
];
ans = rec_minPathSum(matrix, matrix.length-1, matrix[0].length-1);
console.log('2. ans', ans)
*/

// Memoization
function memo_minPathSum(grid, m, n, mem) {
  console.log(m, n); // 13 calls
  if (m == 0 && n == 0) {
    return grid[m][n];
  }
  if (mem[m][n] >= 0) {
    return mem[m][n];
  }

  let top =
    m > 0
      ? grid[m][n] + memo_minPathSum(grid, m - 1, n, mem)
      : Number.MAX_SAFE_INTEGER;
  let left =
    n > 0
      ? grid[m][n] + memo_minPathSum(grid, m, n - 1, mem)
      : Number.MAX_SAFE_INTEGER;
  return (mem[m][n] = Math.min(top, left));
}

/*
let matrix = [
    [ 5, 9, 6], 
    [11, 5, 2]
]; // 2 x 3
let mem = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(-1));
// console.log({ mem })

// let ans = minPathSum(matrix, matrix.length-1, matrix[0].length-1, mem);
// console.log('1. ans', ans)

matrix = [
    [10, 8, 2], 
    [10, 5, 100],
    [ 1, 1, 2]
];
mem = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(-1));

ans = minPathSum(matrix, matrix.length-1, matrix[0].length-1, mem);
console.log('\n2. ans', ans)

*/

// tabularization
function tab_minPathSum(grid, m, n) {
  let mem = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(-1));
  mem[0][0] = grid[0][0];

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i != 0 || j != 0) {
        let top = i > 0 ? grid[i][j] + mem[i - 1][j] : Number.MAX_SAFE_INTEGER;
        let left = j > 0 ? grid[i][j] + mem[i][j - 1] : Number.MAX_SAFE_INTEGER;
        mem[i][j] = Math.min(top, left);
      }
    }
  }

  return mem[m][n];
}

// space optimizing
function minPathSum(grid, m, n) {
  let memRow = Array(n + 1).fill(-1);
  memRow[0] = grid[0][0];
  let prevLeftVal = memRow[0];

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i != 0 || j != 0) {
        let top = i > 0 ? grid[i][j] + memRow[j] : Number.MAX_SAFE_INTEGER;
        let left = j > 0 ? grid[i][j] + prevLeftVal : Number.MAX_SAFE_INTEGER;
        prevLeftVal = Math.min(top, left);
        memRow[j] = prevLeftVal;
      }
    }
  }

  return prevLeftVal;
}

let matrix = [
  [5, 9, 6],
  [11, 5, 2],
]; // 2 x 3
let ans = minPathSum(matrix, matrix.length - 1, matrix[0].length - 1);
console.log('1. ans', ans);

matrix = [
  [10, 8, 2],
  [10, 5, 100],
  [1, 1, 2],
];
ans = minPathSum(matrix, matrix.length - 1, matrix[0].length - 1);
console.log('2. ans', ans);

// 00 01 02
// 10 11 12
