// Given two Stringsm check if they are anagram
// Two string are anagram if they are made of same characters ands same frequencies
// ex: garden, danger

function isAnagram(str1, str2) {
  console.log(`Testing: ${str1} & ${str2}`);
  if (str1.length === str2.length) {
    let chars1 = str1.split('').sort();
    let chars2 = str2.split('').sort();

    for (let i = 0; i < chars1.length; i++) {
      if(chars1[i] != chars2[i]) {
        return false;
      }
    }

    return true;

  } else {
    return false;
  }
}

// Sorting takes O(n^2) or nlog(n) ?



function isAnagram_alternate(str1, str2) {
  console.log(`Testing: ${str1} & ${str2}`);
  if (str1.length == str2.length) {
    let hash1 = {};
    str1.split('').forEach(char => {
      if (hash1[char]) {
        hash1[char] = hash1[char] + 1;
      } else {
        hash1[char] = 1;
      }
    });

    let hash2 = {};
    str2.split('').forEach((char) => {
      if (hash2[char]) {
        hash2[char] = hash2[char] + 1;
      } else {
        hash2[char] = 1;
      }
    });

    Object.keys(hash1).forEach(key => {
      if (!hash2[key] || (hash1[key] != hash2[key])) {
        return false;
      }
    });
    return true;
  } else {
    return false;
  }
}


console.log(isAnagram('car', 'rat'));
console.log(isAnagram('garden', 'danger'));
console.log(isAnagram('promise', 'compromise'));
console.log(isAnagram('car', 'ray'));
