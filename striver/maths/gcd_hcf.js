// GCD: Greatest Common Divisor
// HCF: Highest Common Factor
// Calculated for 2 numbers
// eg: 9, 12 => 3
// eg: 11, 13 => 1
// eg: 24, 16 => 8
// eg: 20, 10 => 10

function gcd_brute(a, b) {
  let result = 1;
  if (a % b == 0) return b;
  if (b % a == 0) return a;
  let min = Math.floor(Math.min(a, b) / 2);
  for (let i = 2; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  console.log('GCD of nums:', a, b, ' is ', result);
  return result;
}

// gcd(9, 12);
// gcd(11, 13);
// gcd(24, 16);
// gcd(20, 10);

// Euclidean Algorithm
// gcd(a, b) = gcd(a-b, b) (note a > b)
// keep iterating on this, when one of the number is zero, another is gcd

// Even better version:
// gcd(a, b) = gcd(a % b, b) (note a > b)

function gcd(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;

  if (a > b) {
    return gcd(a % b, b);
  } else return gcd(b % a, a);
}

console.log(gcd(9, 12));
console.log(gcd(11, 13));
console.log(gcd(24, 16));
console.log(gcd(20, 10));
