// All possible permutations
// eg: [1,2,3]
// result: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function (nums) {
  let ans = [];
  permutations(nums, ans);
  return ans;
};

// Approach 1
// Keep a list to note already selected elements - taken
// And loop other elements adding them once and recurse

// TC: O(n! * n) : n! permutations and looping n
// SC: O(n) : for "taken" and "selections"

function _permutations(nums, ans, selections = [], taken = {}) {
  if (selections.length === nums.length) {
    ans.push([...selections]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!taken[i]) {
      selections.push(nums[i]);
      taken[i] = 1;
      permutations(nums, ans, selections, taken);
      selections.pop();
      delete taken[i];
    }
  }
}

// Approach 2 - Swapping

function permutations(nums, ans, index = 0, selections = [...nums]) {
  console.log({ index, selections });
  if (index > nums.length - 1) {
    ans.push([...selections]);
  }
  for (let i = index; i < nums.length; i++) {
    swapItems(selections, index, i);
    permutations(nums, ans, index + 1, selections);
    swapItems(selections, i, index);
  }
}

function swapItems(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(permute([1, 2, 3]));
console.log('Ans should be ', [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
]);
console.log();

// console.log(permute([0, 1]));
// console.log('Ans should be ', [[0,1],[1,0]]);
// console.log()

// console.log(permute([1]));
// console.log('Ans should be ', [[1]]);
// console.log()

////////////////////////////////////////////////////////////////////////////

// Cleaner
// permutations means we have to select all the elements but in different orders
// total permutaions: n!

// not cleaner, indexOf => O(N)

function x_allPermutations(nums, ans, selected = []) {
  if (selected.length == nums.length) {
    ans.push(selected);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (selected.indexOf(nums[i]) == -1) {
      allPermutations(nums, ans, [...selected, nums[i]]);
    }
  }
}
