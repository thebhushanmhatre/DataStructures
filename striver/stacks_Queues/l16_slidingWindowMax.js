// Sliding window maximum
// in window of [1, 3, -1], max val = 3
// in window of [ 3, -1, -3], max val = 3
// Return all max values from each window

function findMaxInWindow(nums, k) {
  const result = [];
  let queue = []; // store the indexes of the nums

  for (let i = 0; i < nums.length; i++) {
    // maintain the window
    if (queue.length > 0 && queue[0] <= i - k) {
      // top index should be less than i - k
      queue.shift();
    }

    // remove the smaller element indexes from back
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    // add the current element
    queue.push(i);
    if (i >= k - 1) {
      // current index > k -1 for a valid window to begin
      result.push(nums[queue[0]]);
    }
  }

  console.log('Max values are', result);
  return result;
}

findMaxInWindow([1, 3, -1, -3, 5, 3, 2, 1, 6], 3); // [3, 3, 5, 5, 5, 3, 6];
//  indexes:     0  1   2   3  4  5  6  7  8
