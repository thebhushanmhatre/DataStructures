// Return array of next greater element in array for every Element

// O(N^2) if we just use loop inside loop, lets skip it for now

// Better way to use Stack here:
function nextGreaterElement(arr) {
  let largerElementStack = [];
  let result = [];
  for (let i=arr.length-1; i >= 0; i--) {
    if (largerElementStack.length == 0) {
      result[i] = -1;
      largerElementStack.push(arr[i]);
    } else {
      while (
        largerElementStack.length > 0 &&
        largerElementStack[largerElementStack.length-1] <= arr[i]
      ) {
        largerElementStack.pop();
      }
      if (largerElementStack.length == 0) {
        result[i] = -1;
        largerElementStack.push(arr[i]); 
      } else if (largerElementStack[largerElementStack.length - 1] > arr[i]) {
        result[i] = largerElementStack[largerElementStack.length - 1];
        largerElementStack.push(arr[i]);
      }
    }
  }
  return result;
}

// console.log(nextGreaterElement([4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]));

// console.log(nextGreaterElement([1, 2, 3, 4, 5, 6, 4]));
// console.log(nextGreaterElement([8, 9, 95, 4, 7]));
// console.log(nextGreaterElement([7, 5, 3, 1, 5, 9, 12, 45, 89]));



function nextGreaterElementCircular(arr) {
  let helpStack = [];
  let result = [];
  for (let i = arr.length*2 - 1; i >= 0; i--) {
    if (helpStack.length == 0) {
      result[i] = -1;
      helpStack.push(arr[i % arr.length]);
    } else {
      while (helpStack.length > 0 && arr[i % arr.length] >= helpStack[helpStack.length-1]) {
        helpStack.pop()
      }
      if (helpStack.length == 0) {
        result[i] = -1;
        helpStack.push(arr[i % arr.length]);
      } else {
        result[i] = helpStack[helpStack.length - 1];
        helpStack.push(arr[i % arr.length]);
      }
    }
  }
  return result.slice(0, arr.length);
}

console.log(nextGreaterElementCircular([2, 10, 12, 1, 11]));

console.log(nextGreaterElementCircular([4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]));
console.log(nextGreaterElementCircular([1, 2, 3, 4, 5, 6, 4]));
console.log(nextGreaterElementCircular([8, 9, 95, 4, 7]));
console.log(nextGreaterElementCircular([7, 5, 3, 1, 5, 9, 12, 45, 89]));
