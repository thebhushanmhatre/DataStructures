// Uppoer Bound: Smallest index such that arr[index] > target

function upperBound(nums, target) {
  let low = 0,
    high = nums.length - 1;
  let result = nums.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > target) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

let arr = [2, 3, 6, 7, 8, 8, 11, 11, 11, 12];
// indexes 0  1  2  3  4  5   6   7   8   9
console.log(upperBound(arr, 6)); // 3
console.log(upperBound(arr, 11)); // 9
console.log(upperBound(arr, 12)); // 10
console.log(upperBound(arr, 13)); // 10
console.log(upperBound(arr, 0)); // 0
