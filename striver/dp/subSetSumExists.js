// Dp on Subsequences or Subset
// Subsequences - Contigous part of array r string
// Subset - Contigous/Non-Contingous part of array r string

// Check if a Subsequences Sum exists with target
// Recursion
function subSeqSumHelper(nums, target, index = 0) {
  console.log({ target, index });
  if (target == 0) return true;
  if (target < 0) return false;

  if (index === nums.length) {
    return false;
  }

  let pick = subSeqSumHelper(nums, target - nums[index], index + 1);
  return pick;
}

function subSeqSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let result = subSeqSumHelper(nums, target, i);
    if (result) {
      return true;
    }
  }
  return false;
}

let arr = [1, 2, 3, 4];
let k = 1;

let ans = subSeqSum(arr, k);
console.log('ans: ', ans);

// For a subset - take and non-take case would arise
