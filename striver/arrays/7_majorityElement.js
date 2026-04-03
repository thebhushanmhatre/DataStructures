// leetcode 169

function majorityElement(nums) {
  let element = nums[0];
  let count = 1,
    n = nums.length;

  for (let i = 1; i < n; i++) {
    if (count == 0) {
      count = 1;
      element = nums[i];
    } else if (nums[i] == element) {
      count++;
    } else {
      count--;
    }
  }

  return element;
}

// leetcode 229: majority element 2
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

function majorityElement(nums) {
  let num1,
    num2,
    count1 = 0,
    count2 = 0;
  let n = nums.length,
    reqdCount = Math.floor(n / 3);

  for (let i = 0; i < n; i++) {
    if (count1 == 0 && nums[i] != num2) {
      count1++;
      num1 = nums[i];
    } else if (count2 == 0 && nums[i] != num1) {
      count2++;
      num2 = nums[i];
    } else if (num1 == nums[i]) {
      count1++;
    } else if (num2 == nums[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
    // console.log({num1, num2, count1, count2})
  }

  // verification step required to confirm
  // reset counts and count again
  ((count1 = 0), (count2 = 0));
  for (let i = 0; i < n; i++) {
    if (nums[i] == num1) {
      count1++;
    } else if (nums[i] == num2) {
      count2++;
    }
  }

  // console.log({num1, num2, count1, count2})

  if (count1 > reqdCount && count2 > reqdCount) {
    return [num1, num2];
  } else if (count1 > reqdCount) {
    return [num1];
  } else if (count2 > reqdCount) {
    return [num2];
  } else {
    return [];
  }
}
