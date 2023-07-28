// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// https://leetcode.com/problems/n-queens/

// https://www.youtube.com/watch?v=i05Ju7AftcM&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=14


/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
  let arr = [];
  let result = [];
  let leftRow = [];
  let lowerDiagonal = [];
  let upperDiagonal = [];

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      str += '.';
    }
    arr.push(str);
  }
  for (let i = 0; i < n; i++) {
    leftRow[i] = 0;
  }
  for (let i = 0; i < 2*n; i++) {
    lowerDiagonal[i] = 0;
    upperDiagonal[i] = 0;
  }

  addQueens(arr, n, result, 0, leftRow, lowerDiagonal, upperDiagonal);

  return result;
};

function addQueens(arr, n, result, col, leftRow, lowerDiagonal, upperDiagonal) {
  if (col === n) {
    result.push([...arr]);
    return;
  }
  for (let row = 0; row < n; row++) {
    if (
      leftRow[row] == 0 &&
      lowerDiagonal[row + col] == 0 &&
      upperDiagonal[n - 1 + col - row] == 0
    ) {
      leftRow[row] = 1;
      lowerDiagonal[row + col] = 1;
      upperDiagonal[n - 1 + col - row] = 1;
      arr[row] = arr[row].slice(0, col) + 'Q' + arr[row].slice(col+1, n);

      addQueens(arr, n, result, col + 1, leftRow, lowerDiagonal, upperDiagonal);

      // Reverting the changes for backtracking
      leftRow[row] = 0;
      lowerDiagonal[row + col] = 0;
      upperDiagonal[n - 1 + col - row] = 0;
      arr[row] = arr[row].slice(0, col) + '.' + arr[row].slice(col+1, n);
    }
  }
};


console.log(solveNQueens(4));
console.log('Ans should be [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]');
console.log()

console.log(solveNQueens(1));
console.log('Ans should be [["Q"]]');