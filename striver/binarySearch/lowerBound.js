// Lower Bound is the smallest index such that arr[index] >= x

// Array has to be sorted (for all binary search)

function lowerBound(nums, target) {
  let low = 0,
    high = nums.length - 1;
  let result = nums.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] >= target) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

let arr = [3, 5, 8, 15, 19];
// indexes 0  1  2   3   4
// let x = 8; // result = 2
// let x = 9 // result = 3
// let x = 16 // result = 4
// let x = 20 // result = 5

let arr2 = [1, 2, 3, 3, 7, 8, 9, 9, 9, 11];
// indexes  0 1 2 3 4 5 6 7 8 9
// let x2 = 10; // result = 9
// let x2 = 9; // result = 6

console.log(lowerBound(arr, 8));
console.log(lowerBound(arr, 9));
console.log(lowerBound(arr, 16));
console.log(lowerBound(arr, 20));
console.log(lowerBound(arr2, 10));
console.log(lowerBound(arr2, 9));

// Binary Search implementation - just for pratice
function findUsingBinarySearch(nums, target, low, high) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    return lowerBound(nums, target, low, mid - 1);
  } else {
    return lowerBound(nums, target, mid + 1, high);
  }
}
