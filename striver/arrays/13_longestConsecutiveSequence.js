let arr = [102, 4, 100, 1, 101, 3, 2, 1, 1, 103, 99];
// longest consecutive sequence is 1, 2, 3, 4 => its length = 4

function longestConsecutiveSeqLen(nums) {
  let longest = 0;

  let numSet = new Set(nums);

  for (const value of numSet) {
    if (!numSet.has(value - 1)) {
      // check for consecutive numbers only for starting indexes
      let count = 1,
        num = value;
      while (numSet.has(num + 1)) {
        num++;
        count++;
      }

      if (count > longest) {
        longest = count;
      }
    }
  }

  console.log('longest', longest);
  return longest;
}

longestConsecutiveSeqLen(arr);
