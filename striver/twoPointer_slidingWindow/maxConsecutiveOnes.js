// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

function _findMaxOnes(arr, k) {
  // better than brute
  let maxLen = k;
  let left = 0,
    right = 0;
  let zeroCount = 0;
  let zeroPositions = [];

  while (right < arr.length) {
    if (arr[right] == 0) {
      zeroPositions.push(right);
      zeroCount++;

      if (zeroCount > k) {
        left = zeroPositions[0] + 1;
        zeroCount--;
        zeroPositions = zeroPositions.slice(1);
      }
    } else {
      let onesLength = right - left + 1;
      if (right < arr.length && onesLength > maxLen) {
        maxLen = onesLength;
      }
    }
    right++;
  }

  console.log('Maximum ones length is ', maxLen);
}

function findMaxOnes(arr, k) {
  // optimal
  // idea is to not reduce the window size below maxLen
  let maxLen = k;
  // let left = 0,
  //   right = 0;
  // let zeroCount = 0;
  // let zeroPositions = [];

  // while (right < arr.length) {
  //   if (arr[right] == 0) {
  //     zeroPositions.push(right);
  //     zeroCount++;

  //     if (zeroCount > k) {
  //       left = zeroPositions[0] + 1;
  //       zeroCount--;
  //       zeroPositions = zeroPositions.slice(1);
  //     }
  //   } else {
  //     let onesLength = right - left + 1;
  //     if (right < arr.length && onesLength > maxLen) {
  //       maxLen = onesLength;
  //     }
  //   }
  //   right++;
  // }

  console.log('Maximum ones length is ', maxLen);
}

//           0  1  2  3  4  5  6  7  8  9  10
let nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k1 = 2;

let nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
let k2 = 3;

findMaxOnes(nums1, k1);
findMaxOnes(nums2, k2);
