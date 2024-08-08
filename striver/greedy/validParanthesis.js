// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "(*)"
// Output: true

// Example 3:
// Input: s = "(*))"
// Output: true

// recursive
function isValid(string, index = 0, count = 0) {
  if (count < 0) return false;

  if (index == string.length) {
    return count == 0;
  }

  if (string[index] == '(') {
    return isValid(string, index + 1, count + 1);
  } else if (string[index] == ')') {
    return isValid(string, index + 1, count - 1);
  }

  return (
    isValid(string, index + 1, count + 1) ||
    isValid(string, index + 1, count - 1) ||
    isValid(string, index + 1, count)
  );
}
// TC: 3^N
// SC: N

// Can be optimized further using DP concepts
// TC: N^2
// SC: N^2

// Optimal
function isValid(string) {
  let min = 0,
    max = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == '(') {
      min = min + 1;
      max = max + 1;
    } else if (string[i] == ')') {
      min = min - 1;
      max = max - 1;
    } else {
      min = min - 1;
      max = max + 1;
    }

    if (min < 0) {
      min = 0;
    }
    if (max < 0) {
      return false;
    }
  }

  if (min == 0) {
    return true;
  }

  return false;
}
// TC: N
// SC: 1

let s1 = '()';
let s2 = '(*)';
let s3 = '(*))';
let s4 = '(**(';
let s5 = '((*)';
let s6 = '(()()*()*)())))'; // false

console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));
