// All the number that can divide the number
// eg: 36 => 1,2,3,4,6,9,12,18,36

function getAllDivisors(num) {
  let result = [1, num];
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
      if (num / i != i) {
        result.push(num / i);
      }
    }
  }

  console.log(
    'Divisors of ',
    num,
    'are: ',
    result.sort((a, b) => a - b).join(',')
  );
  return result;
}

getAllDivisors(36);
getAllDivisors(31);
getAllDivisors(42);
getAllDivisors(24);
getAllDivisors(17);

// Check if number is prime or not

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(36));
console.log(isPrime(31));
console.log(isPrime(42));
console.log(isPrime(24));
console.log(isPrime(17));
console.log(2, isPrime(2));
console.log(3, isPrime(3));
console.log(5, isPrime(5));
