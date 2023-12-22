// Merge Sort
// Divide and Merge

function mergeSort(nums, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);

  mergeSort(nums, low, mid);
  mergeSort(nums, mid+1, high);
  
  mergeArrays(nums, low, mid, high);
}

function mergeArrays(nums, low, mid, high) {
  let i = low, j = mid+1, temp = [];

  while (i <= mid && j <= high) {
    if (nums[i] > nums[j]) {
      temp.push(nums[j]);
      j++;
    } else {
      temp.push(nums[i]);
      i++;
    }
  }

  while(i > mid && j <= high) { // note i > mid, or you will miss nos
    temp.push(nums[j]);
    j++;
  }

  while(j > high && i <= mid) { // note j > high, or you will miss nos
    temp.push(nums[i]);
    i++;
  }

  for (x=0; x < temp.length; x++) {
    nums[low + x] = temp[x];
  }
}


let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
let arr2 = [3,2,4,1,3];
let arr3 = [9, 8, 7, 6, 5, 4, 3];
let arr4 = [1,2,4,6,7,9,0];

mergeSort(arr, 0, arr.length-1);
mergeSort(arr2, 0, arr2.length-1);
mergeSort(arr3, 0, arr3.length-1);
mergeSort(arr4, 0, arr4.length-1);

console.log('arr sorted after merge sort algo: ', {
  arr: arr.join(', '),
  arr2: arr2.join(', '),
  arr3: arr3.join(', '),
  arr4: arr4.join(', '),
});

// Time Complexity: O(n * log(n)): Worst
// Space Complexity: O(n)