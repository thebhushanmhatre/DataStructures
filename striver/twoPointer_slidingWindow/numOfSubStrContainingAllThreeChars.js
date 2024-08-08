// Number of substrings containsing all three characters - a,b,c

// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:
// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).

// Example 2:
// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".

// Example 3:
// Input: s = "abc"
// Output: 1

// Helper function for brute
function allThreeExists(word) {
  if (word.indexOf('a') == -1) return false;
  if (word.indexOf('b') == -1) return false;
  if (word.indexOf('c') == -1) return false;
  return true;
}

// brute
function _numOfSubstr(word) {
  let count = 0;
  let counter = 0;
  for (let i = 0; i < word.length - 2; i++) {
    for (let j = i + 3; j <= word.length; j++) {
      console.log(counter++);
      let substring = word.slice(i, j);
      if (allThreeExists(substring)) {
        count++;
        // Can optimize this by adding the future values and break;
      }
    }
  }

  console.log('Number of substrings are', count);
} // 9 iterations //  j  starting from i+3 was an optimization without that 21 iterations

// brute - optimizing
function _numOfSubstr(word) {
  let count = 0;
  let counter = 0;

  for (let i = 0; i < word.length - 2; i++) {
    let hash = { a: 0, b: 0, c: 0 };
    let substring = '';
    for (let j = i; j <= word.length; j++) {
      console.log(counter++);
      substring += word[j];
      if (!hash[word[j]]) {
        hash[word[j]] = 1;
      }
      if (hash['a'] + hash['b'] + hash['c'] == 3) {
        count += word.length - j;
        break;
      }
    }
  }

  console.log('Number of substrings are', count);
} // 12 iterations

// using sliding window
function numOfSubstr(word) {
  // let counter = 0;
  let count = 0;
  let n = word.length;
  let a = -1,
    b = -1,
    c = -1;
  let left = 0,
    right = 0;
  while (right < n) {
    // console.log(counter++);
    if (word[right] == 'a') {
      a = right;
    }
    if (word[right] == 'b') {
      b = right;
    }
    if (word[right] == 'c') {
      c = right;
    }
    if (a > -1 && b > -1 && c > -1) {
      let min = Math.min(a, b, c);
      // console.log({ right, min });
      count += min + 1;
      left = min + 1;
    }
    right++;
  }
  console.log('Number of substrings are', count);
} // iterations = 5
// there was no need of keeping a track of left

let word1 = 'abcabc';
let word2 = 'aaacb';
let word3 = 'abc';
let word4 = 'bbacba'; // bbac bbacb bbacba bac bacb bacba acb acba cba // 9
let word5 = 'aabbccabc'; // 21
//           012345678 // 4-2, 5-2, 6-4, 7-6, 8-7 (right - min+1 - combinations)
// abbc aabbc
// abbcc aabbcc
// bcca bbcca abbcca aabbcca
// cab ccab bccab bbcab abbcab aabbccab
// abc cabc ccabc bccabc bbccabc abbccabc aabbccabc

numOfSubstr(word1); // 10
numOfSubstr(word2); // 3
numOfSubstr(word3); // 1
numOfSubstr(word5); // 21
