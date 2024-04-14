// 22 / 3: 7
// return the integer value

// naive: keep adding to sum until value exceeds numerator and count no of additions

// better:
function divide(numerator, denominator) {
  // handle sign and edge cases
  let remainder = numerator;
  let result = 0;
  while (remainder >= denominator) {
    let count = 0;
    while (remainder >= denominator << (count + 1)) {
      count++;
    }
    result += 1 << count;
    remainder = remainder - denominator * (1 << count);
  }
  console.log('result: ', result);
}

divide(23, 3);
divide(20, 3);
divide(81, 9);
divide(81, 7);
