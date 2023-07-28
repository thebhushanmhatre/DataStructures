// using recursion

function fibonacci(N) {
  if (N <= 1) {
    return 1;
  }
  return (fibonacci(N-1) + fibonacci(N-2));
}

console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(11));
console.log(fibonacci(12));