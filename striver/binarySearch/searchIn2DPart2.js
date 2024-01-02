// https://www.youtube.com/watch?v=9ZbB397jU4k&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&index=27

// note here row and columns are sorted but if you flatten all is not sorted

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

function findTarget(matrix, target) {
  let m = matrix.length-1;
  let n = matrix[0].length-1
  let row = 0;
  let col = n;
  while (row <= m && col >= 0) {
    let cell = matrix[row][col];
    if (cell === target) {
      return [row, col]
    } else if (cell > target) {
      col--;
    } else {
      row++
    }
  }
  return -1;
}

console.log(findTarget(matrix, 14)); // 3,2
console.log(findTarget(matrix, 5)); // 1,1
console.log(findTarget(matrix, 26)); // 4,3