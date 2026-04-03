// Find the next permutation

let arr0 = [3, 1, 2];
let arr = [2, 1, 5, 4, 3, 0, 0];

// If arr is in descending order, reverse it i.e. ascendin order of numbers is the next (first) permutation

// Find the maximum prefix which will stay same
// look from back, where curve changes, i.e. prior digit is lesser than next digit

// function findNextPermutation(arr) {
//   // find the index where there is a dip
//   let index = -1;
//   for (let i = arr.length - 2; i > 0; i--) {
//     if (arr[i] < arr[i + 1]) {
//       index = i;
//       break;
//     }
//   }

//   // if no index then its last permutation, reverse the number
//   if (index == -1) {
//     return arr.sort((a, b) => a - b);
//   }

//   // if index is found, look for smallest digit on right but greater than index
//   let rIndex;
//   for (let i = arr.length - 1; i > index; i--) {
//     if (arr[i] > arr[index]) {
//       rIndex = i;
//       break;
//     }
//   }

//   // swap the digits on indexes
//   swap(arr, index, rIndex);

//   // reverse rest of digits after index
//   // reverse as in they are in descending, so will become ascending
//   reverseRest(arr, index + 1);
// }

// console.log('givenP: ', arr.join(' '));
// findNextPermutation(arr);
// console.log('next P: ', arr.join(' '));

// // helper function
// function swap(nums, left, right) {
//   let temp = nums[left];
//   nums[left] = nums[right];
//   nums[right] = temp;
// }

// function reverseRest(nums, start) {
//   let ascending = [];
//   for (let i = nums.length - 1; i >= start; i--) {
//     ascending.push(nums[i]);
//   }

//   for (let i = 0; i < ascending.length; i++) {
//     nums[start + i] = ascending[i];
//   }
// }

function nextPermutation(nums) {
  // from right, go to the left
  // find index such that there is a dip => nums[i+1] > nums[i]
  let n = nums.length - 1;
  if (n == 0) return;

  let index = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      // dip
      index = i;
      break;
    }
  }

  if (index == -1) {
    nums.sort((a, b) => a - b);
    return;
  }

  // look for min to the right of index which is also greater than nums[i]
  for (let i = n; i > index; i--) {
    if (nums[i] > nums[index]) {
      // return on first as remaining nums are in descending order
      // swap
      [nums[index], nums[i]] = [nums[i], nums[index]];
      break;
    }
  }

  // rearrange the numbers to the right in the ascending order
  // sort from index+1 to n or rather reverse it
  for (let i = index + 1, j = 0; n - j > i; i++, j++) {
    [nums[i], nums[n - j]] = [nums[n - j], nums[i]];
  }
}

console.log('givenP: ', arr.join(' '));
nextPermutation(arr);
console.log('next P: ', arr.join(' '));