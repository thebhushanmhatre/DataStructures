// Given a string str, write a function to determine the longest substring containing only two unique characters.

// Example:
function uniqueSubstr(str) {
  console.log('\nchecking for ', str);

  if (str.length < 3) return str;

  let result = str.slice(0, 2);
  let i = 0,
    j = 2;

  let currentStr = result;
  let charSet = new Set(currentStr.split('')); // mistake: arr no required sine split returns arr

  while (j < str.length) {
    const currentChar = str.slice(j, j + 1);
    if (charSet.has(currentChar)) {
      // keep adding, iterate j
      currentStr += currentChar;
    } else {
      // go back to 2 unique chars, iterate i
      i = j - 1;
      currentStr = str.slice(i, j + 1);
      charSet = new Set(currentStr.split(''));
      i--;
      const currentChar = str.slice(i, i + 1);
      while (i > 0) {
        if (charSet.has(currentChar)) {
          i--;
          currentStr = currentChar + currentStr;
        } else {
          break;
        }
      }
    }

    j++;
    // check if this is max
    if (currentStr.length > result.length) {
      result = currentStr;
    }
  }
  console.log('result ', result);
}

uniqueSubstr('eceba');
// > 3 // "ece"

uniqueSubstr('ccaabbb');
// > 5 // "aabbb"

uniqueSubstr('abcabcabc');
// > 2 // "ab", "bc", or "ca"
