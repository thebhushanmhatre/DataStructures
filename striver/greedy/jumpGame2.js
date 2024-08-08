// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

/*
function _findMinSteps(nums, start, minSteps) {
  if (start >= nums.length - 1) return minSteps;

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= nums[start]; i++) {
    min = Math.min(findMinSteps(nums, start + i, minSteps + 1), min);
  }

  return min;
}

function _minStepsRequired(nums) {
  let minSteps = 0;
  minSteps = findMinSteps(nums, 0, minSteps);

  console.log('Max steps required are', minSteps);
}
*/

// Rewriting the above code in just one func
function _minStepsRequired(nums, start = 0, minSteps = 0) {
  if (start >= nums.length - 1) return minSteps;

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= nums[start]; i++) {
    min = Math.min(jump(nums, start + i, minSteps + 1), min);
  }

  return min;
}
// TC: N^N
// SC: N
// This is still not the most optimal solution
// Can be further optimzed using DP

// Use range
function minStepsRequired(nums) {
  let jumps = 0,
    left = 0,
    right = 0;

  while (right < nums.length - 1) {
    let maxReach = right;
    for (let i = left; i <= right; i++) {
      if (nums[i] + i > maxReach) {
        maxReach = nums[i] + i;
      }
    }
    left = right + 1;
    right = maxReach;
    jumps++;
  }

  console.log('Minimum jumps required are ', jumps);
}
// TC: O(N)
// SC: O(1)

let nums1 = [2, 3, 1, 1, 4];
let nums2 = [2, 3, 0, 1, 4];
let nums4 = [2, 3, 1, 1, 4, 1, 1, 1, 2];
let nums3 = [2, 4, 1, 1, 1, 3, 4, 1, 1, 1, 2, 8, 0, 0];
//              1           2  3           4  5     6
minStepsRequired(nums1);
minStepsRequired(nums2);
minStepsRequired(nums4);
minStepsRequired(nums3);
