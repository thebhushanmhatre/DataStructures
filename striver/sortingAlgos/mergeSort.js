// Merge Sort
// Divide and Merge

function mergeSort(nums, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);

  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);

  mergeArrays(nums, low, mid, high);
}

function mergeArrays(nums, low, mid, high) {
  let i = low,
    j = mid + 1,
    temp = [];

  while (i <= mid && j <= high) {
    if (nums[i] > nums[j]) {
      temp.push(nums[j]);
      j++;
    } else {
      temp.push(nums[i]);
      i++;
    }
  }

  while (i > mid && j <= high) {
    // note i > mid, or you will miss nos
    temp.push(nums[j]);
    j++;
  }

  while (j > high && i <= mid) {
    // note j > high, or you will miss nos
    temp.push(nums[i]);
    i++;
  }

  for (x = 0; x < temp.length; x++) {
    nums[low + x] = temp[x];
  }
}

let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
let arr2 = [3, 2, 4, 1, 3];
let arr3 = [9, 8, 7, 6, 5, 4, 3];
let arr4 = [1, 2, 4, 6, 7, 9, 0];

mergeSort(arr, 0, arr.length - 1);
mergeSort(arr2, 0, arr2.length - 1);
mergeSort(arr3, 0, arr3.length - 1);
mergeSort(arr4, 0, arr4.length - 1);

console.log('arr sorted after merge sort algo: ', {
  arr: arr.join(', '),
  arr2: arr2.join(', '),
  arr3: arr3.join(', '),
  arr4: arr4.join(', '),
});

// Time Complexity: O(n * log(n)): Worst
// Space Complexity: O(n)

// cleaner
function mergeSort(nums, high, low = 0) {
  if (low >= high) {
    return;
  }

  const mid = (low + high) >> 1;
  mergeSort(nums, mid, low);
  mergeSort(nums, high, mid + 1);

  merge(nums, low, mid, high);
}

function merge(nums, low, mid, high) {
  // two pointer approach to merge in sorted way
  let left = low,
    right = mid + 1,
    temp = [];
  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      right++;
    }
  }

  // filling in the remaining elements
  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }
  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }

  // copying temp in original
  for (let i = low; i <= high; i++) {
    nums[i] = temp[i - low];
  }
}

let arrx = [4, 3, 6, 9, 7, 1];

console.log('arr before sorting: ', arrx);
mergeSort(arrx, arrx.length - 1);
console.log('arr before sorting: ', arrx);
