// Given a row-wise sorted matrix of size r*c,
// where r is no. of rows and c is no. of columns,
// find the median in the given matrix.
// Assume r*c is odd

// Example 1:
// Input:
// r = 3 , c = 3
// 1 4 9
// 2 5 6
// 3 8 7
// Output: Median = 5
// Explanation: If we find the linear sorted array, the array becomes 1 2 3 4 5 6 7 8 9
// So, median = 5

// Example 2:
// Input:
// r = 3 , c = 3
// 1 3 8
// 2 3 4
// 1 2 5
// Output: Median = 3
// Explanation: If we find the linear sorted array, the array becomes 1 1 2 2 3 3 4 5 7 8
// So, median = 3

function medianOfMatrix(matrix) {}

// Brute will be flatten the array and sort it and find the middle element
// Better would probably be sort while flattening

let matrix = [
  [1, 4, 9],
  [2, 5, 6],
  [3, 8, 7],
];

let matrix2 = [
  [1, 3, 8],
  [2, 3, 4],
  [1, 2, 5],
];

console.log(medianOfMatrix(matrix)); // 5
console.log(medianOfMatrix(matrix2)); // 3

// Reference: https://www.youtube.com/watch?v=Q9wXgdxJq48&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&index=29
