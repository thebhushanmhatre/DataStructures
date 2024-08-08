// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Not the best solution because of memory
function _jumpGame(nums) {
  if (nums.length == 1) return true;

  let steps = new Array(nums.length).fill(0);
  steps[0] = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0 && steps[i] > 0) {
      for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
        steps[i + j] = 1;
      }
    }

    if (steps[nums.length - 1]) {
      console.log('Jump to last step possible');
      return;
    }
  }
  console.log('Jump to last step not possible');
}

function jumpGame(nums) {
  if (nums.length == 1) return true;
  let maxReach = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 0 && maxReach <= i) {
      console.log('Jump to last step NOT possible');
      return;
    } else if (i + nums[i] > maxReach) {
      maxReach = i + nums[i];
    }
    console.log(i, ', maxReach', maxReach);

    if (maxReach >= nums.length - 1) {
      console.log('Jump to last step possible');
      return;
    }
  }

  console.log('Jump to last step NOT possible');
}

let nums1 = [2, 3, 1, 1, 4];
let nums2 = [3, 2, 1, 0, 4];
let nums3 = [1, 2, 3, 1, 1, 0, 2, 5];
//           0  1  2  3  4  5  6  7

jumpGame(nums1);
jumpGame(nums2);
jumpGame(nums3);
