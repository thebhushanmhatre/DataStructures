// All possible permutations

var permute = function (nums) {
  let ans = [];
  permutations(nums, ans);
  return ans;
};

// function permutations(nums, ans, selections = [], taken=[]) {
//   if (selections.length === nums.length) {
//     ans.push([...selections]);
//     return;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (taken.indexOf(i) < 0) {
//       selections.push(nums[i]);
//       taken.push(i);
//       permutations(nums, ans, selections, taken);
//       selections.pop();
//       taken.pop();
//     }
//   }
// }


// Approach 2 - Swapping

function permutations(nums, ans, index=0, selections=[...nums]) {
  console.log({index, selections})
  if (index > nums.length - 1) {
    ans.push([...selections]);
  }
  for (let i=index; i < nums.length; i++) {
    swapItems(selections, index, i);
    permutations(nums, ans, index+1, selections);
    swapItems(selections, i, index);
  }
}

function swapItems (arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};


console.log(permute([1, 2, 3]));
console.log('Ans should be ', [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
console.log()

// console.log(permute([0, 1]));
// console.log('Ans should be ', [[0,1],[1,0]]);
// console.log()

// console.log(permute([1]));
// console.log('Ans should be ', [[1]]);
// console.log()