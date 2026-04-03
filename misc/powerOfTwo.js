// Given +ve Integer n, determine if number id power of 2 or not
// eg: power of 2s:  1,2,4,8,16,32,64,...

function _isPowerOfTwo(num) {
  if (num === 1) return true;
  let result = true;
  let storedNum = num;
  while (result && storedNum > 1) {
    if (storedNum % 2 != 0) {
      result = false; // return false from here, abhi toh timepass
    } else {
      storedNum = storedNum / 2;
    }
  }

  console.log(num, result ? 'is' : 'is not', ' power of 2');
  return result;
}

// This was O(log n)

// Using bitwise we can solve this in constant time
// Here the idea is for power of two AND with its previous number (binary), it will always be zero
// Obviously na, since its binary, on power of two you increment the digit and rest is zero
// So number and its previous example: 1000 & 111 = 0

function isPowerOfTwo(num) {
  if (num < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1));
isPowerOfTwo(6);
isPowerOfTwo(8);
isPowerOfTwo(12);
isPowerOfTwo(22);
isPowerOfTwo(222);
isPowerOfTwo(400);
isPowerOfTwo(2048);
isPowerOfTwo(4096);
