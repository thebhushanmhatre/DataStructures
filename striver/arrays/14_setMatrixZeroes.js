// Leetcode 73
function setZeroes(matrix) {
  let m = matrix.length,
    n = matrix[0].length;

  let row = Array.from({ length: m }, () => 1);
  let column = Array.from({ length: n }, () => 1);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 0;
        column[j] = 0;
      }
    }
  }

  // set rows to zeroes
  row.forEach((val, rowIndex) => {
    if (val == 0) {
      for (let i = 0; i < n; i++) {
        matrix[rowIndex][i] = 0;
      }
    }
  });

  // set columns to zeroes
  column.forEach((val, colIndex) => {
    if (val == 0) {
      for (let i = 0; i < m; i++) {
        matrix[i][colIndex] = 0;
      }
    }
  });
} // O(m x n)


// This is not optimized