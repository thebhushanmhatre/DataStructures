// Given an array of integers arr of even length n and an integer k.
// We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.
// Return true if such a partitioning is possible or false otherwise.

// Example 1
// Input: arr = [1,2,3,4,5,6,7,8,9,10], k = 5
// Output: true
// Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).

// Example 2
// Input: arr = [1,2,3,4,5,6], k = 7
// Output: true
// Explanation: Pairs are (1,6),(2,5) and (3,4).

// Example 3
// Input: arr = [1,2,3,4,5,6], k = 10
// Output: false
// Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.

// {
//     1: 0
//     5: 4
//     [1, 6]
//     value: index
//     moduleValue: value
// }

function arePairsPossible(nums, k) {  
  let n = nums.length;
  let set = {};

  for (let i = 0; i < n; i++) {
    let num = nums[i] % k;
    let remainder = k - num;

    if (map[remainder]) {
      delete map[remainder];
    } else {
      map[num] = i; // element: index
    }
  }

  console.log(map);

  if (Object.keys(map).length > 0) {
    return false;
  }

  return true;
}
// 1 4
console.log(arePairsPossible([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(arePairsPossible([1,2,3,4,5,6], 7))
// console.log(arePairsPossible([1,2,3,4,5,6], 10))
