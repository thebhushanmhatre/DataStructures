// Online Stock Span

// Find the maximum consecutive days for which the stock price was less than on equal to current day

function findMaxDays(nums) {
  let maxLen = 1;
  // find pge
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    // top < current
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }

    if (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      let max = i - stack[stack.length - 1];
      if (max > maxLen) {
        maxLen = max;
      }
    }

    if (stack.length == 0) {
      let max = i + 1; // i - (-1)
      if (max > maxLen) {
        maxLen = max;
      }
    }

    stack.push(i);
  }

  console.log('Max days possible is ', maxLen);
}

findMaxDays([7, 2, 1, 3, 3, 1, 8]); // 7 i.e. for val = 8, all days <= 8
findMaxDays([7, 2, 1, 3, 3, 1]); // 4 i.e. for val = 3, [2, 1, 3, 3]
//           0  1  2  3  4  5  6
