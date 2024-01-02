// Count Digits

function countDigits(item) {
  let count = 0,
    num = item;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log(`Digits in number ${item} is ${count}`);
  return count;
}

// Alternative: using log
// 1 + log num (base 10)
// Code :
// 1 + Math.floor(Math.log10(num))

countDigits(7789); // ans = 4
countDigits(11000); // ans = 5
countDigits(123); // ans = 3
