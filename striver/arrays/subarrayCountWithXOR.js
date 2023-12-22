let arr = [4, 2, 2, 6, 4];
let k = 6;
// ans: 4

let arr2 = [5, 6, 7, 8, 9];
let k2 = 5;
// ans: 2

function subarrCount(nums, target) {
  let count = 0

  // // brute
  // for (let i = 0; i < nums.length; i++) {
  //   let xor = 0;
  //   for (let j = i; j < nums.length; j++) {
  //     xor ^= nums[j];
  //     if (xor === target) {
  //       count++;
  //     }
  //   }
  // }

  // optimal: using hash like 2Sum
  let xorHash = { 0: 1 }
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
    // if (xor === target) {
    //   count++;
    // } // Not required since 0:1 is already added in Hash, that will cover this
    let remainder = target ^ xor;
    if (remainder in xorHash) {
      count += xorHash[remainder];
    }

    if (xor in xorHash) {
      xorHash[xor]++;
    } else {
      xorHash[xor] = 1;
    }
  }

  return count;
}

console.log('Count of ', arr, ' is ', subarrCount(arr, k), ' and should be 4');
console.log('Count of ', arr2, ' is ', subarrCount(arr2, k2), ' and should be 2');
