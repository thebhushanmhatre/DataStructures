// Return sum of subarray ranges

// arr: [1,4,3,2]
// return sum of range of every subarr = 13

// range of [1,4] = 3 (max - min)
// range of [ 4 ] = 0 (no range, so range = 0)

// brute
function _sumOfSubArrRanges(nums) {
  let sum = 0;
  // i to go from 0 to n-2
  for (let i = 0; i < nums.length - 1; i++) {
    let min = nums[i],
      max = nums[i];

    // j to go from 1 to n-1
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
      if (nums[j] < min) {
        min = nums[j];
      }

      console.log({ i, j, min, max, add: max - min });
      sum += max - min;
    }
  }

  console.log('Sum of Subarray ranges is', sum);
  return sum;
}

// Optimal: Try this
function sumOfSubArrRanges(nums) {}

sumOfSubArrRanges([1, 4, 3, 2]);
