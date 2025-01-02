// return the previous smallest element

const arr = [4, 5, 2, 10, 8];
// res: [-1,4,-1,2,2]

function pse(nums) {
  const result = [];
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0) {
      stack.push(nums[i]);
      result.push(-1);
    } else {
      // find the element smaller than current element
      while (stack[stack.length - 1] >= nums[i]) {
        stack.pop();
      }

      if (stack.length > 0) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }

      // current element is always added to the stack
      stack.push(nums[i]);
    }
  }

  console.log('Previous smallest elements are: ', result);
}

nse(arr);
