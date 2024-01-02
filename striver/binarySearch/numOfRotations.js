// Find the number of times array has been rotated

// eg: [3, 4, 5, 1, 2]
// ans: 3

function findRotationsNum(nums) {
  let low = 0,
    high = nums.length - 1;
  let minIndex = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[low] <= nums[mid]) {
      // left half is sorted
      // pick the minimum
      if (nums[minIndex] > nums[low]) {
        minIndex = low;
      }
      // eliminate the left
      low = mid + 1;
    } else {
      // righ half is sorted
      // pick the minimum
      if (nums[minIndex] > nums[mid]) {
        minIndex = mid;
      }
      // eliminate the right
      high = mid - 1;
    }
  }

  return minIndex;
}

let arr = [3, 4, 5, 1, 2];

console.log(findRotationsNum(arr)); // 3
console.log(findRotationsNum([7, 8, 9, 1, 2, 3, 4, 5])); // 3
console.log(findRotationsNum([7, 8, 9, 10, 2, 3, 4, 5])); // 4
console.log(findRotationsNum([7, 8, 9, 10, 20, 3, 4, 5])); // 5
