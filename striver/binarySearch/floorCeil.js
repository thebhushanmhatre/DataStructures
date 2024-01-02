// Find floor and ceil in sorted array
// floor: largest number in array <= x
// ceil: smallest number in array >= x

function findFloorCeil(nums, target) {
  let floor = -1,
    ceil = -1;

  let low = 0,
    high = nums.length - 1;
  // floor
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] <= target) {
      floor = nums[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // ceil: lowerbound
  low = 0;
  high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      ceil = nums[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return { floor, ceil };
}

let arr = [10, 20, 30, 40, 50];
// x = 25, floor = 20, ceil = 30

console.log(findFloorCeil(arr, 25));
