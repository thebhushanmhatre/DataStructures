// 2D Arrays
// Find the row (index) with the maximum 1's
// Here rows are sorted

// Example 1:
// Input Format: n = 3, m = 3,
// mat[] =
// 1 1 1
// 0 0 1
// 0 0 0
// Result: 0
// Explanation: The row with the maximum number of ones is 0 (0 - indexed).

// Example 2:
// Input Format: n = 2, m = 2 ,
// mat[] =
// 0 0
// 0 0
// Result: -1
// Explanation:  The matrix does not contain any 1. So, -1 is the answer.

function findRowWithMaxOnes(matrix) {
  let maxCount = 0;
  let result = -1;
  let m = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    let count = m - findOnesStartPos(matrix[i]);

    if (count > maxCount) {
      maxCount = count;
      result = i;
    }
  }
  console.log('result: ', result);
  return result;
}

function findOnesStartPos(nums) {
  if (nums[0] == 1) return 0;
  if (nums[nums.length - 1] == 0) return nums.length;

  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] == 1 && nums[mid - 1] == 0) {
      return mid;
    } else if (nums[mid] == 1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

let matrix1 = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 0],
];

let matrix2 = [
  [0, 0],
  [0, 0],
];

let matrix3 = [
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];

let matrix4 = [
  [0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1],
];

let matrix5 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

let matrix6 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
];

findRowWithMaxOnes(matrix1); // 0
findRowWithMaxOnes(matrix2); // -1
findRowWithMaxOnes(matrix3); // 2
findRowWithMaxOnes(matrix4); // 1
findRowWithMaxOnes(matrix5); // -1
findRowWithMaxOnes(matrix6); // 2
