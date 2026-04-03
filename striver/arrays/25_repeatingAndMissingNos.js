// Find the repeating and missing Number
// Given integers from 1 to n
// example: [1,2,3,4,6,1], n=6
// Ans: [1,5]

// let arr = [1, 2, 3, 4, 6, 1],
//   n = 6;

// brute force
// skipping this

// better
/*
let repeated, missing;
// Aray with index representing number and value representing frequency
let numArr = new Array(n).fill(0);


for (let i=0; i<arr.length; i++) {
  numArr[arr[i]-1]++;
  if (numArr[arr[i]-1] > 1) {
    repeated = arr[i];
  }
}

for (let i=0; i<n; i++) {
  if (numArr[i] === 0) {
    missing = i+1;
    break;
  }
}

console.log('better approach: ', { repeated, missing })

*/

// maths solution
/*
let sumOfN = n*(n+1)/2;
let sumOfNums = arr.reduce((sum, num) => sum + num, 0);
let xPlusY = sumOfNums - sumOfN;

let sumOfNSquared = n*(n+1)*(2*n+1)/6;
let sumOfSquaredNums = arr.reduce((sum, num) => sum + num*num, 0);
let xMinusY = (sumOfSquaredNums - sumOfNSquared) / xPlusY;

let x = Math.abs((xPlusY +  xMinusY) / 2);
let y = Math.abs(xPlusY - x);

let missing, repeating;
if (arr.indexOf(x) >= 0) {
  repeating = x;
  missing = y;
} else {
  repeating = y;
  missing = x;
}
console.log('maths approach: ', { repeating, missing })
*/

// xor solution

// let xorOfN, xorOfNums;

// for (let i = 1; i <= n; i++) {
//   xorOfN ^= i;
//   xorOfNums ^= arr[i - 1];
// }

// let xXorY = xorOfN ^ xorOfNums; // you could have done this in for loop only directly in one variable

// You will need more knowledge of bit manipulation before solving this

// https://www.youtube.com/watch?v=2D0D8HE6uak

// console.log({
//   xorOfN,
//   xorOfNums,
//   xXorY,
// });

function findMissingNRepeatingNos(nums) {
  // let x = repeating, y = missing
  // Sum - SumN = x - y : a
  // SquaresSum - SquaresSumN = x2 - y2 = (x-y)(x+y): b
  // x + y = b / a : c
  // x = (a + c) / 2
  // y = c - x

  let n = nums.length;
  let sn = (n * (n + 1)) / 2;
  let s2n = (sn * (2 * n + 1)) / 3;

  let sum = 0,
    ss = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    ss += nums[i] * nums[i];
    // we can also calculate the sn and s2n here if you didn't know the formulae
  }

  let a = sum - sn;
  let b = ss - s2n;
  let c = b / a;

  let x = (a + c) / 2;
  let y = c - x;

  return [y, x];
}

let arr2 = [4, 3, 6, 2, 1, 1];
console.log(findMissingNRepeatingNos(arr2)); // [5, 1]
