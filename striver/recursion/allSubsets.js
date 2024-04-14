// Find all possible subsets without any duplicates

function findAllSubsets(arr) {
  let uniqueStrs = new Set();
  let sortedArr = arr.sort((a, b) => a - b);
  possibilities(sortedArr, 0, uniqueStrs);
  let results = [];
  uniqueStrs.forEach((item) => {
    results.push(item.split('').map(Number));
  });
  return results;
}

function possibilities(arr, index, uniqueStrs, selections = []) {
  uniqueStrs.add(selections.join(''));
  for (let i = index; i < arr.length; i++) {
    if (!(i != index && arr[i] === arr[i - 1])) {
      selections.push(arr[i]);
      possibilities(arr, i + 1, uniqueStrs, selections);
      selections.pop();
    }
  }
}

console.log(findAllSubsets([1, 2, 5]));
// console.log(findAllSubsets([2, 3]));

// Cleaner

// return all possible unique subsets
function allSubsets(nums, ans, ds = [], index = 0) {
  console.log({ ds, index });
  if (index >= nums.length) {
    console.log('pushed');
    ans.push(ds);
    return;
  }

  // select the element at current index
  allSubsets(nums, ans, [...ds, nums[index]], index + 1);

  // do not select
  // also do not select the next element if its same as current one that we are not selecting
  while (nums[index] == nums[index + 1]) {
    index++;
  }
  if (index < nums.length) {
    allSubsets(nums, ans, ds, index + 1);
  }
}

const ans = [];
allSubsets([3, 2, 2], ans);

console.log('ans: ', ans);
