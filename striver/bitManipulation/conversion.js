function convertDecimalToBinary(num) {
  const bin = [];
  let n = num;
  while (n != 1) {
    bin.unshift(n % 2);
    n = Math.floor(n / 2);
  }
  bin.unshift(1);
  console.log(`Binary of num: ${num} is: ${bin.join('')}`);
  return Number(bin.join(''));
}

function convertBinaryToDecimal(num) {
  const digits = String(num).split('');
  const len = digits.length - 1;
  const deciNum = digits.reduce((acc, item, index) => {
    acc += item * 2 ** (len - index);
    return acc;
  }, 0);
  console.log(`Decimal of num: ${num} is: ${deciNum}`);
}

[17, 7, 20, 23].forEach((num) => {
  console.log();
  const biNum = convertDecimalToBinary(num);
  convertBinaryToDecimal(biNum);
});

// 1's compliment
// Convert number to its binary and then flip the digits
// eg: 13 => 1101
// 1's compliment: 0010

// 2' compliment: 1's compliment of a number + 1
// 13's 2' copliment: 0010 + 0001 => 0011

// Operators

// AND:
// All true: true
// 1 false: false

// OR:
// 1 true: true
// All false: false

// XOR:
// Number of 1's odd: 1
// Number of 1's even: 0

// SHIFT:
// Right shift: >>
// Remove last two digits

// Left Shift: <<
// Remove left digits from 32 bit number and add zeroes to the right

// NOT:
