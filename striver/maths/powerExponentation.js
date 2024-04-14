// x = 2, n = 5
// return x^n

// TC: O(N)
function naive_powExpo(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  console.log(x, '^', n, ' = ', result);
}

// TC:
function powExpo(x, n) {
  const m = n;
  if (n < 0) {
    n = n * -1;
  }

  let result = 1;
  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
      x = x * x;
    } else {
      result = result * x;
      n = n - 1;
    }
  }
  result = result * x;

  if (m > 0) {
    console.log(result);
  } else {
    console.log(1 / result);
  }
}

powExpo(2, 5);
powExpo(2, 4);
powExpo(3, 3);
powExpo(4, 2);
powExpo(2, -2);
console.log('math.pow, 2 ^ -2 = ', Math.pow(2, -2));

powExpo(4, 1.5);
console.log('math.pow, 4 ^ 1.5 = ', Math.pow(4, 1.5));
console.log('math.pow, 4 **1.5 = ', 4 ** 1.5);

// For decimal, try this
// Math.exp( n * Math.log(x))
