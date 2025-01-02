// arr: [3, 2, 10, 11, 5, 10, 6, 3]
// Find rectangle with max area

// result: 25: width: 5, ht: 5

// optimal
function findMaxArea(nums) {
  let maxArea = 0;

  let stack = [];

  for (let i = 1; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      // top > curr
      let topIndex = stack.pop();
      let ht = nums[topIndex];
      let pse = stack.length == 0 ? -1 : stack[stack.length - 1];
      let nse = i;
      let area = ht * (nse - pse - 1);
      if (area > maxArea) {
        maxArea = area;
      }
    }
    stack.push(i);
  }

  // iterate over remaining elements remaining in stack
  // not having nse, so if assume it to be N
  while (stack.length > 0) {
    let topIndex = stack.pop();
    let ht = nums[topIndex];
    let pse = stack.length == 0 ? -1 : stack[stack.length - 1];
    let nse = nums.length;
    let area = ht * (nse - pse - 1);
    if (area > maxArea) {
      maxArea = area;
    }
  }

  console.log('Max Area:', maxArea);
  return maxArea;
}

findMaxArea([3, 2, 10, 11, 5, 10, 6, 3]); // 25
findMaxArea([3, 2, 10, 11, 5, 10, 6, 3, 40]); // 40
