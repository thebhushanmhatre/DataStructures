// Sum of all possible Subsets

function subsetSum(arr) {
  let sums = new Set();
  findSubsets(arr, 0, sums);
  return [...sums].sort((a, b) => a - b);
}

function findSubsets(arr, index, result, subset = []) {
  if (index > arr.length - 1) {
    result.add(subset.reduce((i, sum) => sum + i, 0));
    return;
  }
  subset.push(arr[index]);
  findSubsets(arr, index + 1, result, subset);
  subset.pop();
  findSubsets(arr, index + 1, result, subset);
}

console.log(subsetSum([2, 3]));
console.log(subsetSum([5, 2, 1]));

// Cleaner

// print sums of all subet in increasing order of sum
function subsetSums_asc(nums, index = 0, sum = 0) {
  if (index == nums.length) {
    console.log(sum);
    return;
  }

  // do not select
  subsetSums_asc(nums, index + 1, sum);

  // select the element at current index
  subsetSums_asc(nums, index + 1, sum + nums[index]);
}

// print sums of all subet in decreasing order of sum
function subsetSums_dsc(nums, index = 0, sum = 0) {
  if (index == nums.length) {
    console.log(sum);
    return;
  }

  // select the element at current index
  subsetSums_dsc(nums, index + 1, sum + nums[index]);

  // do not select
  subsetSums_dsc(nums, index + 1, sum);
}

let arr = [3, 1, 2];

console.log('Subset sums in increasing order');
subsetSums_asc(arr.sort((a, b) => b - a));

console.log('Subset sums in decreasing order');
subsetSums_dsc(arr.sort((a, b) => b - a));

// Note in both cases, the arrays are sorted in descending order
