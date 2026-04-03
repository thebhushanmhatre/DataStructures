function maxSubArray(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0; // empty subarray
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}
