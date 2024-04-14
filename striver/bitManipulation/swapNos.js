// swap numbers

// using thried variable

// using addition n subtraction
function _swapNos(a, b) {
  console.log();
  console.log({ a, b });
  a = a + b; // a = a + b
  b = a - b; // a + b - b => b = a
  a = a - b; // a + b - a
  console.log('=>', { a, b });
}

// using xor
function swapNos(a, b) {
  console.log();
  console.log({ a, b });
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log('=>', { a, b });
}

swapNos(1, 2);
swapNos(5, 7);
swapNos(3, 9);
