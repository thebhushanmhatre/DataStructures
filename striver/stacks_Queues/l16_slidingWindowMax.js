// Sliding window maximum
// in window of [1, 3, -1], max val = 3
// in window of [ 3, -1, -3], max val = 3
// Return all max values from each window

function findMaxInWindow(nums, k) {
  const result = [];
  let queue = []; // store the indexes of the nums - use it as deque - add/remove from both ends

  for (let i = 0; i < nums.length; i++) {
    // maintain the window - remove from start if required
    if (queue.length > 0 && queue[0] <= i - k) {
      // start index should be less than i - k  i.e. in the range of the current window
      queue.shift();
    }

    // remove the smaller then current element indexes from back
    while (queue.length > 0 && nums[queue.at(-1)] <= nums[i]) {
      // nums[queue.at(-1)] INSTEAD OF nums[queue[queue.length - 1]]
      queue.pop();
    }

    // add the current element
    queue.push(i);

    // skip for intial iteration until window is valid/completed
    if (i >= k - 1) {
      // current index > k-1 for a valid window to begin - to skip intial values
      result.push(nums[queue[0]]); // top of the queue is the max element index for the current window
    }
  }

  console.log('Max values are', result);
  return result;
}

findMaxInWindow([1, 3, -1, -3, 5, 3, 2, 1, 6], 3); // [3, 3, 5, 5, 5, 3, 6];
//  indexes:     0  1   2   3  4  5  6  7  8

// Using Monotonic queue
// # nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// #
// # i  Window position             Monotonic queue  max
// # 0                              [1]              -
// # 1                              [3]              -
// # 2  [1  3  -1] -3  5  3  6  7   [3, -1]          3
// # 3   1 [3  -1  -3] 5  3  6  7   [3, -1, -3]      3
// # 4   1  3 [-1  -3  5] 3  6  7   [5]              5
// # 5   1  3  -1 [-3  5  3] 6  7   [5, 3]           5
// # 6   1  3  -1  -3 [5  3  6] 7   [6]              6
// # 7   1  3  -1  -3  5 [3  6  7]  [7]              7

// # nums = [1, 3, -1, 8, 5, 3, 6, 7], k = 3
// #
// # i  Window position            Monotonic queue  max
// # 0                             [1]              -
// # 1                             [3]              -
// # 2  [1  3  -1] 8  5  3  6  7   [3, -1]          3
// # 3   1 [3  -1  8] 5  3  6  7   [8]              8
// # 4   1  3 [-1  8  5] 3  6  7   [8, 5]           5
// # 5   1  3  -1 [8  5  3] 6  7   [8, 5, 3]        5
// # 6   1  3  -1  8 [5  3  6] 7   [6]              6
// # 7   1  3  -1  8  5 [3  6  7]  [7]              7

// note we are adding indexes in the monotonic queue and not the element itself in the code
