// Sum of all possible Subsets

function subsetSum(arr) {
  let sums = new Set();
  findSubsets(arr, 0, sums);
  return [...sums].sort((a, b) => a - b);
}

function findSubsets (arr, index, result, subset=[]) {
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
