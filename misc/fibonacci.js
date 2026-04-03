// Given n, find first n elements of fibonacci

function fibonacci(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  let result = [0, 1];
  for (let i = 1; i < num - 1; i++) {
    result.push(result[i - 1] + result[i]);
  }
  console.log('fibonacci of ', num, ' is ', result.join(', '));
  return result;
}

fibonacci(2);
fibonacci(3);
fibonacci(7);
fibonacci(20);

// Find the nth element in Fibonacci Sequence

function nthElement(num) {
  if (num < 2) return num;
  return nthElement(num - 1) + nthElement(num - 2);
}

console.log(0, 'th Element in Fibonacci Sequence is', nthElement(0));
console.log(1, 'th Element in Fibonacci Sequence is', nthElement(1));
console.log(2, 'th Element in Fibonacci Sequence is', nthElement(2));
console.log(3, 'th Element in Fibonacci Sequence is', nthElement(3));
console.log(4, 'th Element in Fibonacci Sequence is', nthElement(4));
console.log(5, 'th Element in Fibonacci Sequence is', nthElement(5));
console.log(6, 'th Element in Fibonacci Sequence is', nthElement(6));
console.log(7, 'th Element in Fibonacci Sequence is', nthElement(7));

// This requires 2 ^ n which is even worse than iterative - O(n)
