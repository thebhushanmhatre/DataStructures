// Leetcode 48
function rotate(matrix) {
  let n = matrix[0].length; // given: nxn
  // transpose
  // Iterate on elements to the right of diagonal only,
  // so we don't transpose them back
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // i, j => j, i : swap
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse every row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      // i, j => j, i : swap
      [matrix[i][j], matrix[i][n - j - 1]] = [
        matrix[i][n - j - 1],
        matrix[i][j],
      ];
    }
  }
}

/*
1 2 3
4 5 6
7 8 9

// transpose: i,j => j,i
1 4 7
2 5 8
3 6 9

// reverse every row
7 4 1
8 5 2
9 6 3

*/
