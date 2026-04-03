// count of possible pairs such that left element is greater than right

// example:
// arr = [5,3,2,4,1]
// ans: 8
// explanation: pairs:
// (5,3), (5,2), (5,4), (5,1)
// (3,2), (3,1)
// (2,1)
// (4,1)


let arr = [5,3,2,4,1];
let expectedResult = 8;

// // brute
// let bruteCount = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       bruteCount++
//     }
//   }
// }

// console.log('brute ans: ', bruteCount)


// optimal
// using the merge sort algo

// try again later

// try this afterwards: https://www.youtube.com/watch?v=0e4bZaP3MDI&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB&index=29
// leetcode link: https://leetcode.com/problems/reverse-pairs/description/

