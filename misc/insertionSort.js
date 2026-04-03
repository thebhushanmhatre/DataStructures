// Left part is sorted
// take a element and insert it into its right position
// logic: swap to left until it reaches its position

function insertionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i;
    while (j >= 0 && nums[j] > nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
      j--;
    }
  }
  return nums;
}

console.log('sorted: ', insertionSort([9, 8, 1, 2, 3, 4, 5]).join(','));
console.log('sorted: ', insertionSort([14, 6, 7, 15, 2, 40, 16]).join(','));
console.log('sorted: ', insertionSort([5, 9, 3, 36, 81, 2, 6, 4]).join(','));
