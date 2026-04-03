// Given an array, sort the array in ascending orde

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let noSwap = true;
    for (j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      return nums;
    }
  }
  return nums;
}

console.log('sorted: ', bubbleSort([9, 8, 1, 2, 3, 4, 5]).join(','));
console.log('sorted: ', bubbleSort([14, 6, 7, 15, 2, 40, 16]).join(','));
console.log('sorted: ', bubbleSort([5, 9, 1, 3, 7, 36, 81, 2, 6, 4]).join(','));
