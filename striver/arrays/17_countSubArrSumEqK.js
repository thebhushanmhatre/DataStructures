// leetcode 560
function subarraySum(nums, k) {
  let totalCount = 0,
    n = nums.length;
  let prefixSumCount = {};
  prefixSumCount[0] = 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    let remainder = sum - k;

    if (prefixSumCount[remainder]) {
      totalCount += prefixSumCount[remainder];
    }

    if (prefixSumCount[sum]) {
      prefixSumCount[sum]++;
    } else {
      prefixSumCount[sum] = 1;
    }
  }

  return totalCount;
}
