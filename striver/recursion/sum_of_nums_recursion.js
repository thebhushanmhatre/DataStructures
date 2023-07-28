// Sum of first N numbers using recursion

function sumOfNums(N) {
  if (N <= 0) { return 0;}
  return (N + sumOfNums(N-1));
}

// console.log(sumOfNums(3))

//  Factorial of N

function factorial(N) {
  if (N <= 1) return 1;
  return N * factorial(N - 1);
}

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));


function factorialPara(N, product=1) {
  if (N <= 1) {
    console.log(product);
  } else factorialPara(N - 1, product * N);
}

factorialPara(3);
factorialPara(4);
factorialPara(5);