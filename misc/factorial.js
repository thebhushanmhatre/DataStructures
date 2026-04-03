// Given n, find the factorial of n i.e. n!

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  console.log('factorial of ', num, ' is ', result);
  return result;
}

// O(n)

factorial(0);
factorial(1);
factorial(2);
factorial(3);
factorial(5);
factorial(6);
factorial(7);

// Recursive
function recursiveFactorial(num) {
  if (num < 2) return 1;
  return num * recursiveFactorial(num - 1);
}

console.log(0, '! is', recursiveFactorial(0));
console.log(1, '! is', recursiveFactorial(1));
console.log(2, '! is', recursiveFactorial(2));
console.log(3, '! is', recursiveFactorial(3));
console.log(5, '! is', recursiveFactorial(5));
console.log(6, '! is', recursiveFactorial(6));
console.log(7, '! is', recursiveFactorial(7));
