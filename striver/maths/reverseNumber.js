// Ignore the zeroes at the start aftr reverse

function reverseNumber_alternate(num) {
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  return Number(digits.join(''));
}

function reverseNumber(num) {
  let result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverseNumber(7789)); // 9877
console.log(reverseNumber(4500)); // 54
console.log(reverseNumber(753)); // 357

// To check if number is palindrome or not: use this reverse and compare with original
