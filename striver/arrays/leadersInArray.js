// Leaders in array
// https://www.youtube.com/watch?v=cHrH9CQ8pmY

// example: for arr = [10, 22, 12, 3, 0, 6] => result = [22, 12, 6]
// i.e. Everything to the right of the element should be smaller
// order of elements is not relevant

let arr = [10, 22, 12, 3, 0, 6];
let expected = [22, 12, 6];


let result = [];
let max = Number.MIN_SAFE_INTEGER;
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > max) {
    result.push(arr[i]);
    max = arr[i];
  }
}

console.log('result=', result);
console.log('And the answer is ', expected.sort().join('') === result.sort().join(''));
