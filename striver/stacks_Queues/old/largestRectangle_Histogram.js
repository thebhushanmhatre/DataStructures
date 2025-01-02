//  https://leetcode.com/problems/largest-rectangle-in-histogram/
// https://www.youtube.com/watch?v=X0X6G-eWgQ8&list=PLgUwDviBIf0oSO572kQ7KCSvCUh1AdILj&index=20

var largestRectangleArea2 = function (heights) {
  // using next smaller element arr and previous smaller element arr
  let nextSmallerArr = getNSE(heights);
  let previousSmallerArr = getPSE(heights);
  let max = 0;
  for (let i=0; i < heights.length; i++) {
    let area = (nextSmallerArr[i] - previousSmallerArr[i]) * heights[i];
    console.log({
      i,
      prev: previousSmallerArr[i],
      next: nextSmallerArr[i],
      val: heights[i],
      area,
    });
    if (area > max) {
      max = area;
    }
  }
  return max;
};

function getNSE(arr) {
  let nse = [];
  let indexStack = [];
  let top = -1;
  for (let i = arr.length-1; i > -1; i--) {
    // console.log('in for', {i, arrEl: arr[i], indexStack, top, nse})
    while (top >= 0 && arr[indexStack[top]] >= arr[i]) {
      indexStack.pop();
      top--;
    }
    if (top == -1) {
      nse[i] = -1;
      indexStack.push(i);
      top++;
    } else if (top >= 0 && arr[indexStack[top]] < arr[i] ) {
      nse[i] = indexStack[top];
      indexStack.push(i);
      top++;
    }
  }
  return nse.map((i) => {
    if (i == -1) {
      return nse.length;
    } else return i;
  });
};


function getPSE(arr) {
  let pse = [];
  let indexStack = [];
  let top = -1;
  for (let i=0; i < arr.length; i++) {
    // console.log({val: arr[i], pse, indexStack})
    while (top >= 0 && arr[indexStack[top]] >= arr[i]) {
      indexStack.pop();
      top--;
    }
    if (top >= 0 && arr[indexStack[top]] < arr[i]) {
      pse[i] = indexStack[top];
      indexStack.push(i);
      top++;
    } else {
      indexStack.push(i);
      pse[i] = -1;
      top++;
    }
  }
  return pse.map(i => ((i == -1) ? (0) : i+1));
};

console.log(largestRectangleArea2([2, 1, 5, 6, 2, 3, 1])); // 10

console.log(largestRectangleArea2([2, 4])); // 4


// Try again with just one Iteration
// https://www.youtube.com/watch?v=jC_cWLy7jSI&list=PLgUwDviBIf0oSO572kQ7KCSvCUh1AdILj&index=12
