// Print all prime nos till N

// naive
// for loop and check isPrime for all the nums
// TC: O( N * root(N) )

// We are using a concept called: Sieve of Eratostheness

// Optimal: TC: O(N)
function printAllPrimeNosTillN(num) {
  const result = [];
  const primeCheck = new Array(num + 1).fill(1); // 1 = prime
  // .fill => O(N)

  // pre-computation => O(N * log( log N ))
  for (let i = 2; i * i <= num; i++) {
    // Here going till root(N) is optimization
    if (primeCheck[i] == 1) {
      // mark multiples of i as not a prime
      for (let j = i * i; j <= num; j += i) {
        // Here, j = i * i is the optimization
        primeCheck[j] = 0;
      }
    }
  }

  // => O(N)
  for (let i = 2; i <= num; i++) {
    if (primeCheck[i] == 1) {
      result.push(i);
    }
  }
  console.log('Prime nos till ', num, ' are: ', result.join(', '), '\n');
}

printAllPrimeNosTillN(8);
printAllPrimeNosTillN(19);
printAllPrimeNosTillN(90);
printAllPrimeNosTillN(200);
