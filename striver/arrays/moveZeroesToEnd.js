let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

let expected = [1, 2, 3, 2, 4, 5, 1, 0, 0, 0];

let i = 0;
let j = 1;
console.log('Starting to move zeroes to the end...', arr.join(' '));
while (i < arr.length) {
  // console.log({i, j, ai: arr[i], aj: arr[j], arr: arr.join(' ') })
  if (j >= arr.length) {
    arr[i] = 0;
    i++;
  } else if (arr[i] == 0 && arr[j] != 0) {
    // console.log('swapped')
    arr[i] = arr[j];
    arr[j] = 0;
    i++;
    j++;
  } else if (arr[i] == 0 && arr[j] == 0) {
    // console.log('j++')
    j++;
  } else {
    i++;
    j++;
  }
}
console.log('Done.');
console.log(arr.join(' '));

// Alternate

let nums = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(nums);

function swapNos(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}

function moveZeroesToEnd(nums) {
  let nonZeroIndex = 0;
  let zeroIndex = -1;

  while (nonZeroIndex < nums.length) {
    // look for first zero index
    if (zeroIndex == -1 && nums[nonZeroIndex] == 0) {
      zeroIndex = nonZeroIndex;
    }

    if (nums[zeroIndex] == 0 && nums[nonZeroIndex] > 0) {
      // look for zero index and non zero index
      swapNos(nums, zeroIndex, nonZeroIndex);
      zeroIndex++;
    }

    // else both are zeros
    nonZeroIndex++;
  }
}

moveZeroesToEnd(nums);

console.log(nums);
