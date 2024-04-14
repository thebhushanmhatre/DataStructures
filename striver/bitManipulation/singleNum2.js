// In an array every number is appearing thrice except one, find that one
// eg: nums = [5,4,4,5,2,4,5]: ans: 2

// Solution, We check if each bit index are in multiple of 3 or not
// if its multiple of 3 (0,3,6,..) then bit of our required bit is 0 at that index
// if its not multiple of 3 rather its 3x + 1, then required bit is 1 for that index

// TC: O(32 * N)
// SC: O(1)
function _findSingleNum(nums) {
  let result = 0;
  for (let bitIndex = 0; bitIndex < 32; bitIndex++) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      // count the set bit for each number
      if (nums[i] & (1 << bitIndex)) {
        // check if bitIndex is set
        count++;
      }
    }
    if (count % 3 == 1) {
      result = result | (1 << bitIndex); // set the bit
    }
  }
  console.log('result: ', result);
  return result;
}

// better: sort them and iterate for (i =1; i = i + 3)
// check previous and next
// TC: O(N * log N)
// logN = 32 when n= 2^32, hence logN is better than 32 (for n < 2^32)
function _findSingleNum(nums) {
  let result = 0;
  nums = nums.sort((a, b) => a - b);
  console.log('nums: ', nums.join(', '));
  for (let i = 1; i < nums.length; i += 3) {
    if (nums[i] != nums[i - 1]) {
      console.log('result: ', nums[i - 1]);
      return nums[i - 1];
    }
  }
  console.log('result: ', nums[nums.length - 1]);
  return nums[nums.length - 1];
}

// using concept of buckets
// - add in ones if not in twos
// - add in twos if in ones
// - add in threes if in twos (don't care)
function findSingleNum(nums) {
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    // 2nd time num will get deleted from ones hence ~ones
    twos = ~ones & (twos ^ nums[i]);
  }
  console.log('result: ', ones);
  return ones;
}

findSingleNum([5, 5, 4, 2, 4, 4, 5]); // 2
findSingleNum([3, 3, 7, 4, 7, 7, 3]); // 4
findSingleNum([8, 8, 7, 9, 7, 7, 8]); // 9
