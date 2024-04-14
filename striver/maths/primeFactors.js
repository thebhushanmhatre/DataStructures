// All the divisors that are prime nos are its prime factors
// eg: For 60, pf: [2, 3, 5]

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

function getAllDivisors(num) {
  const result = [];
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      result.push(i);
      if (num / i != i) {
        result.push(num / i);
      }
    }
  }
  return result;
}

// naive
function naive_printAllPrimeFactors(num) {
  const divisors = getAllDivisors(num);
  const result = divisors.filter((item) => isPrime(item));
  console.log('Prime factors of ', num, 'are: ', result);
}

// still naive: TC = root(N) * root(N)
function still_naive_printAllPrimeFactors(num) {
  const result = [];
  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) {
      if (isPrime(i)) result.push(i);
      if (num / i != i && isPrime(num / i)) result.push(num / i);
    }
  }
  console.log('Prime factors of ', num, 'are: ', result);
}

// TC: O(root(N))
function printAllPrimeFactors(num) {
  const result = [];
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      result.push(i);
      while (num % i == 0) {
        num = num / i;
      }
    }
  }
  if (num != 1) result.push(num);
  console.log('Prime factors of ', num, 'are: ', result);
}

printAllPrimeFactors(17);
printAllPrimeFactors(60);
printAllPrimeFactors(35);
printAllPrimeFactors(780);
