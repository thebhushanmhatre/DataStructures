// Sort an array containing only 0s, 1s and 2s in linear time and using constant space.
// leetcode 75

function sort0s1s2s(nums) {
  // 0s: 0 to low-1
  // 1s: low to mid-1
  // unsorted: mid to high
  // 2s: high+1 to n
  // now try to reduce the unsorted

  let n = nums.length - 1,
    low = 0,
    mid = 0,
    high = n;

  while (mid <= high) {
    if (nums[mid] == 0) {
      // swap with low-1 and increase low and mid
      // add to 0s by swapping 0 with first 1
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      // increase mid
      mid++;
    } else {
      // 2
      // swap with high-1 and decrease high
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

let arr = [1, 2, 0, 2, 1, 0, 2, 1, 2, 1, 0, 2, 1, 2, 1, 0, 2, 0, 1, 2, 0, 1, 0];
sort0s1s2s(arr);
console.log('on Sorting', arr);
