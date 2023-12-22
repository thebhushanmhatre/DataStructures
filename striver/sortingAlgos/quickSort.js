// Quick Sort
// Better Space complexity than merge sort

// Pick a pivot and place it in its correct place in sorted array
// Smaller on the left, larger on the right

function quickSort (nums, low, high) {
  if (low >= high) {
    return
  }
  // console.log('---------------------------------------------')
  // console.log('start ',{low, high, nums: nums.slice(low, high+1).join(',')})
  
  // palce the pivot in its correct place
  let pivotPos = low;
  let i = low, j = high;

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

  quickSort(nums, low, pivotPos-1);
  quickSort(nums, pivotPos+1, high);
}


// let arr = [4,6,2,5,7,9,1,3];
let arr = [9, 8, 7, 6, 5, 4, 3];
// let arr = [1, 2, 3, 4, 50, 8, 61];

quickSort(arr, 0, arr.length-1);

console.log('arr sorted after quick sort algo: ', arr.join(','));

// Time Complexity: O(n * log(n)): Worst
// Space Complexity: O(1)