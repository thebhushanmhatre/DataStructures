// XOR all the nums from 1 yo N

// TC: O(N)
// SC: O(1)
function _xorTillN(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result = result ^ i;
  }
  console.log('result: ', result);
}

// Purely by Observation
function xorTillN(num) {
  let result = 0;
  if (num % 4 == 1) result = 1;
  if (num % 4 == 2) result = num + 1;
  if (num % 4 == 3) result = 0;
  if (num % 4 == 0) result = num;
  console.log('xor of 1 to: ', num, ' is ', result);
  return result;
}

xorTillN(1);
xorTillN(2);
xorTillN(3);
xorTillN(4);
console.log();
xorTillN(5);
xorTillN(6);
xorTillN(7);
xorTillN(8);
console.log();
xorTillN(9);
xorTillN(10);
xorTillN(11);
xorTillN(12);
console.log();

// range : L to R
// eg: 4 - 7: 4^5^6^7

function xorOfRange(low, high) {
  return xorTillN(high) ^ xorTillN(low - 1);
}
console.log('xor of 3 - 7 is', xorOfRange(3, 7));
console.log('xor of 5 - 9 is', xorOfRange(5, 9));
