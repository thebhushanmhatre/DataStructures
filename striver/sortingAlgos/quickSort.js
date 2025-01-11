// Quick Sort
// Better Space complexity than merge sort

// Pick a pivot and place it in its correct place in sorted array
// Smaller on the left, larger on the right

function quickSort(nums, low, high) {
  if (low >= high) {
    return;
  }
  // console.log('---------------------------------------------')
  // console.log('start ',{low, high, nums: nums.slice(low, high+1).join(',')})

  // palce the pivot in its correct place
  let pivotPos = low;
  let i = low,
    j = high;

  while (j > i) {
    // Finding leftmost element larger than pivot element
    while (i < high && nums[pivotPos] >= nums[i]) i++;
    // console.log('greater: ', nums[i], { i, pivotPos })

    // Finding rightmost element smaller than pivot element
    while (j > low && nums[pivotPos] <= nums[j]) j--;
    // console.log('smaller: ', nums[j], { j, pivotPos })

    if (j > i) {
      // swapping
      // console.log('swapping i & j')
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      // console.log('swapping low & j')
      let temp = nums[j];
      nums[j] = nums[low];
      nums[low] = temp;
      pivotPos = j;
    }
    // console.log('end ', {numsAfterSwap: nums.slice(low, high+1).join(','), i, j, low, high, pivotPos})
    // console.log('---------------------------------------------')
  }

  quickSort(nums, low, pivotPos - 1);
  quickSort(nums, pivotPos + 1, high);
}

// let arr = [4,6,2,5,7,9,1,3];
let arr = [9, 8, 7, 6, 5, 4, 3];
// let arr = [1, 2, 3, 4, 50, 8, 61];

quickSort(arr, 0, arr.length - 1);

console.log('arr sorted after quick sort algo: ', arr.join(','));

// Time Complexity: O(n * log(n)): Worst
// Space Complexity: O(1)

//
//
// Cleaner
//
//

function quickSort(nums, high, low = 0) {
  if (low > high) {
    return;
  }
  let partitionIndex = getPIndex(nums, low, high);
  quickSort(nums, partitionIndex - 1, low);
  quickSort(nums, high, partitionIndex + 1);
}

function getPIndex(nums, low, high) {
  let left = low,
    right = high,
    pivot = nums[low];

  while (left < right) {
    // finding first element from left greater than pivot
    // and making sure left doesn't exceeds high
    while (pivot >= nums[left] && left < high) left++;

    // finding first element from right smaller than pivot
    // and making sure right doesn't subceed low
    while (pivot < nums[right] && right > low) right--;

    if (left < right) {
      // swap if they have not crossed each other
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    } else {
      // swap: pivot and right
      let temp = nums[low];
      nums[low] = nums[right];
      nums[right] = temp;
    }
  }

  return right;
}

let arrx = [4, 3, 6, 9, 7, 1];

console.log('arr before sorting: ', arrx);
quickSort(arrx, arrx.length - 1);
console.log('arr after sorting: ', arrx);

// note: do not use bit wise operators for swapping
// It fails if numbers are same

//
//
// writing again
//
//

function swap(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

function findPartitionIndex(nums, low, high) {
  let pivot = arr[low];
  let left = low,
    right = high;

  // swap higher elements on left with lower elements on right
  while (left < right) {
    // find higher than or equal to pivot on left
    while (left < high && nums[left] <= pivot) {
      left++;
    }

    // find lower than pivot on right
    while (right > low && nums[right] > pivot) {
      right--;
    }

    // swap if left < right
    if (left < right) {
      swap(nums, left, right);
    }
  }

  // why right, because its smaller than pivot, can be moved to the left of partition
  swap(nums, low, right);
  return right;
}

function qs(nums, low, high) {
  if (low < high) {
    let pIndex = findPartitionIndex(nums, low, high);

    qs(nums, low, pIndex - 1);
    qs(nums, pIndex + 1, high);
  }
}

function quickSort(nums) {
  qs(nums, 0, nums.length - 1);
}

let arr = [3, 4, 1, 6, 2, 4, 5, 7];
quickSort(arr);

console.log('sorted Arr:', arr);
