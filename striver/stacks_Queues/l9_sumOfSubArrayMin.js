// Find the minimum num of all the subarrays and sum those values

// brute: find all subarrays and then find min of all
// improve it by just keeping the min around and keeping adding that

function _findSumOfSubArrMin(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    total += min;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
      }

      total += min;
    }
  }

  console.log('Sum of min of all subarrays is', total);
  return total;
} // O(N^2)

// optimal
function findSumOfSubArrMin(nums) {
  const nse = findNSE(nums);
  const pse = findPSEE(nums);
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i] * (nse[i] - i) * (i - pse[i]);
  }

  console.log('[O]: Sum of min of all subarrays is', total);
  return total;
}

function findPSEE(nums) {
  const result = [];
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
      stack.pop(); // remove elements from stack greater than current element to find smallest
    }

    if (stack.length > 0) {
      result.push(stack[stack.length - 1]);
    } else {
      result.push(-1); // set it -1 if no smaller found
    }
    stack.push(i); // Make sure its index here and not nums[i]
  }

  return result;
}

function findNSE(nums) {
  const result = [];
  let stack = []; // indexes of smaller elements
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result.unshift(stack[stack.length - 1]);
    } else {
      result.unshift(nums.length);
    }

    stack.push(i);
  }

  return result; // note that we are storing the indexes
}

findSumOfSubArrMin([1, 4, 6, 7, 3, 7, 8, 1]); // 104
findSumOfSubArrMin([3, 1, 2, 4]); // 17

// Write the optimal again to pratice
