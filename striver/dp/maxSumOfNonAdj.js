// Maximum sum of non adjacent elements
// eg: 1,2,4    => ans =  5 => 1 + 4
// eg: 2,1,4,9  => ans = 11 => 2 + 9

// using normal recursion
function _maxNonAdjSum(nums, i) {
  if (i == 0) return nums[i];
  if (i < 0) return 0;

  let picked = nums[i] + maxNonAdjSum(nums, i - 2);
  let notPicked = maxNonAdjSum(nums, i - 1);

  return Math.max(picked, notPicked);
}

// using memoization to optimize (recursion)
function _maxNonAdjSum(nums, i, memo = []) {
  if (memo[i]) return memo[i];
  if (i == 0) return nums[i];
  if (i < 0) return 0;

  let picked = nums[i] + maxNonAdjSum(nums, i - 2, memo);
  let notPicked = maxNonAdjSum(nums, i - 1, memo);

  memo[i] = Math.max(picked, notPicked);
  return memo[i];
}

// converting recursion to loop - tabulation
function _maxNonAdjSum(nums) {
  const memo = [];
  memo[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let pickFirst = nums[i];
    if (i > 1) pickFirst = pickFirst + memo[i - 2];
    let pickSecond = memo[i - 1];
    memo[i] = Math.max(pickFirst, pickSecond);
  }
  return memo[memo.length - 1];
}

// space optimizing the tabulated solution
function maxNonAdjSum(nums) {
  let prev = nums[0];
  let prev2 = 0;
  for (let i = 1; i < nums.length; i++) {
    let pickFirst = nums[i];
    if (i > 1) pickFirst += prev2;
    let pickSecond = prev;
    prev2 = prev;
    prev = Math.max(pickFirst, pickSecond);
  }
  return prev;
}

let arr = [2, 1, 4, 9];
const ans = maxNonAdjSum(arr);

console.log('ans: ', ans);
