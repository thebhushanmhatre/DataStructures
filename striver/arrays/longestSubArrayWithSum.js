
// let sum = 3;
// let arr = [1, 2, 3, 1, 1, 1, 4, 2, 3, 5];

// result = 3         =>  [1, 1, 1]


// // Brute Force
// let maxLength = 0;
// for (let i = 0; i < arr.length; i++) {
//   let subArraySum = sum;
//   let j = i;
//   while (subArraySum > 0 && j < arr.length) {
//     subArraySum -= arr[j];
//     if (subArraySum === 0) {
//       if (j - i + 1  > maxLength) {
//         maxLength = j - i + 1;
//         // console.log('temp max [start, end]: [', i, ',', j, ']')
//       }
//     }
//     j++
//   }
// }
// console.log('maxLength: ', maxLength);

// Better Solution - Use Hasmap (use sum, index)
// Becomes best if numbers are non-postive too

// --------------------------------------------------------------------
// Try to implement on your own now

// let desiredSum = 3;
// let arr = [1, 2, 3, 1, 1, 1, 4, 2, 3, 5];
// let expectedResult = 3         // =>  [1, 1, 1]

let desiredSum = 6;
let arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];
let expectedResult = 4;

let hashMap = {};
let maxLength = 0;
let sum = 0;

for (let i=0; i < arr.length; i++) {
  sum += arr[i];
  
  if (!hashMap[sum]) {
    hashMap[sum] = i;
  }

  if (sum === desiredSum) {
    if ((i + 1) > maxLength) {
      maxLength = i + 1;
    }
  } else if (sum > desiredSum) {
    // check for remainder
    let remainder = sum - desiredSum;
    if (hashMap[remainder]) {
      // remainder exists - subarray starts after that
      if ((i - hashMap[remainder]) > maxLength) {
        maxLength = i - hashMap[remainder];     // think =>  (i + 1) - (hashMap[remainder] + 1)
      }
    }
  }
}

console.log('maxLength: ', maxLength)
console.log('Answer is ', expectedResult === maxLength)


// // Striver's solution
// let n = a.length; // size of the array

// let preSumMap = new Map();
// let sum = 0;
// let maxLen = 0;
// for (let i = 0; i < n; i++) {
//   // calculate the prefix sum till index i
//   sum += a[i];

//   // if the sum = k, update the maxLen
//   if (sum === k) {
//       maxLen = Math.max(maxLen, i + 1);
//   }

//   // calculate the sum of remaining part i.e. x - k
//   let rem = sum - k;

//   // calculate the length and update maxLen
//   if (preSumMap.has(rem)) {
//       let len = i - preSumMap.get(rem);
//       maxLen = Math.max(maxLen, len);
//   }

//   // update the map checking the conditions
//   if (!preSumMap.has(sum)) {
//       preSumMap.set(sum, i);
//   }
// }

return maxLen;


// You can try Leetcode: 560. Subarray Sum Equals K





// --------------------------------------------------------------------
// // Using 2 pointer - Only for Positive numbers

// let desiredSum = 6;
// let arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];

// let expectedResult = 4;

// let start = 0, end = 0, maxLength = 0;
// let sum = arr[start];

// while (end < arr.length) {
//   console.log({start, end, sum, maxLength})
//   if (sum === desiredSum) {
//     if ((end - start + 1) > maxLength) {
//       maxLength = end - start + 1;
//     }
//     end++;
//     sum += arr[end];
//   } else if (sum > desiredSum) {
//     sum -= arr[start];
//     start++;
//   } else {
//     end++;
//     sum += arr[end];
//   }
// }

// console.log('maxLength: ', maxLength)
// console.log('Answer is ', expectedResult === maxLength)
