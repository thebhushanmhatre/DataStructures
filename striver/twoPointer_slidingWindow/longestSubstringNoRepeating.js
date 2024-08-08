// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

let s1 = 'abcabcbb';
let s2 = 'bbbb';
let s3 = 'pwwkew';
let s4 = 'aaaertyxrruiopbbb';
let s5 = 'aaaertyrruiopbbb';

function _longestSubStr(word) {
  let longSubStr = '';
  let maxLen = 0;
  for (let startIndex = 0; startIndex < word.length; startIndex++) {
    let result = '';
    let uniqueChars = [];
    for (let i = startIndex; i < word.length; i++) {
      let char = word[i];
      if (uniqueChars.indexOf(char) == -1) {
        result += char;
        uniqueChars.push(char);
      } else {
        break;
      }
    }
    if (result.length > maxLen) {
      maxLen = result.length;
      longSubStr = result;
    }
  }
  console.log('Longest substring is ', longSubStr);
}

function longestSubStr(word) {
  let longSubStr = '';
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let ssLen = 0;
  let uniqueChars = new Map();

  while (right < word.length) {
    let char = word[right];

    if (uniqueChars.has(char)) {
      left = uniqueChars.get(char) + 1;
    }

    ssLen = right - left + 1;
    if (ssLen > maxLen) {
      maxLen = ssLen;
      longSubStr = word.slice(left, right + 1);
    }

    uniqueChars.set(char, right);
    right++;
  }
  console.log('Longest substring is ', longSubStr);
}

longestSubStr(s1);
longestSubStr(s2);
longestSubStr(s3);
longestSubStr(s4);
longestSubStr(s5);
