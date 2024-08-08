// Longest substring with at most k distinct characters

function _longestSubstrWithKDistinct(word, k) {
  // brute: all substrings
  let result = '';
  for (let i = 0; i < word.length - k; i++) {
    let subStr = word[i];
    let uniqueChars = new Set([word[i]]);
    for (let j = i + 1; j < word.length; j++) {
      subStr += word[j];
      uniqueChars.add(word[j]);
      if (uniqueChars.size > k) {
        break;
      }

      if (subStr.length > result.length) {
        result = subStr;
      }
    }
  }

  console.log('Longest substring is ', result);
}

// Using sliding window and two pointer

function _longestSubstrWithKDistinct(word, k) {
  // better
  let result = '';
  let left = 0,
    right = 0;
  let freq = {};

  while (right >= left && right < word.length) {
    if (freq[word[right]]) {
      freq[word[right]] = freq[word[right]] + 1;
    } else {
      freq[word[right]] = 1;
    }
    right++;

    while (Object.keys(freq).length > k) {
      if (freq[word[left]] == 1) {
        delete freq[word[left]];
      } else {
        freq[word[left]] = freq[word[left]] - 1;
      }
      left++;
    }

    let substr = word.slice(left, right);
    if (substr.length > result.length) {
      result = substr;
    }
  }

  console.log('Longest substring is ', result);
}

function longestSubstrWithKDistinct(word, k) {
  // optimal: do not reduce the window
  let result = '';
  let left = 0,
    right = 0;
  let freq = {};
  // let counter = 0;

  while (right >= left && right < word.length) {
    // console.log('counter', counter++)
    if (freq[word[right]]) {
      freq[word[right]] = freq[word[right]] + 1;
    } else {
      freq[word[right]] = 1;
    }
    right++;

    if (Object.keys(freq).length > k) {
      if (freq[word[left]] == 1) {
        delete freq[word[left]];
      } else {
        freq[word[left]] = freq[word[left]] - 1;
      }
      left++;

      let substr = word.slice(left, right);
      if (substr.length < result.length) {
        if (freq[word[right]]) {
          freq[word[right]] = freq[word[right]] + 1;
        } else {
          freq[word[right]] = 1;
        }
        right++;
      }
    }

    let substr = word.slice(left, right);
    if (substr.length > result.length && Object.keys(freq).length <= k) {
      result = substr;
    }
  }

  console.log('Longest substring is ', result);
}

// counter dropped from 20 to 13 for 2nd test case

let word1 = 'aaabbccd',
  k1 = 2; // aaabb
let word2 = 'abcttuuiivvvfg',
  k2 = '3'; // uuiivvv

longestSubstrWithKDistinct(word1, k1);
longestSubstrWithKDistinct(word2, k2);
