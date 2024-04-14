// Count primes for given range (botn low, high inclusive)

function getPrimeNosCount(num) {
  const primeNos = new Array(num + 1).fill(1);
  primeNos[0] = 0;
  primeNos[1] = 0;
  let cnt = 0;
  for (let i = 2; i <= num; i++) {
    if (primeNos[i] == 1) {
      cnt += 1;
      primeNos[i] = cnt;
      for (let j = i * i; j <= num; j += i) {
        primeNos[j] = 0;
      }
    }
  }
  return primeNos;
}

function _countPrimeInRange(low, high) {
  console.log(`Count of prime nos between ${low} - ${high} is `);
  let result = 0;
  const primeNosCount = getPrimeNosCount(high);
  // to avoid this complication
  // just calculate the sum till all
  // then do: result = primeNos(high) - primeNos(low-1)

  if (primeNosCount[low] > 0) result = 1;
  while (primeNosCount[low] == 0 && low > 1) {
    low--;
  }
  while (primeNosCount[high] == 0) {
    high--;
  }
  if (low == 1) {
    result = primeNosCount[high];
  } else {
    result += primeNosCount[high] - primeNosCount[low];
  }
  console.log(result);
}

// Better Solution
function getPrimeNos(num) {
  // TC: O(N * log(log N))
  let primeNos = new Array(num + 1).fill(1);
  primeNos[0] = 0;
  primeNos[1] = 0;
  for (let i = 2; i * i <= num; i++) {
    if (primeNos[i] == 1) {
      for (let j = i * i; j <= num; j += i) {
        primeNos[j] = 0;
      }
    }
  }
  return primeNos;
}

function countPrimeInRange(low, high) {
  const primeNos = getPrimeNos(high);
  let sum = 0;
  for (let i = 2; i <= high; i++) {
    sum += primeNos[i];
    primeNos[i] = sum;
  }
  console.log(
    `Count of prime nos between ${low} - ${high} is `,
    primeNos[high] - primeNos[low - 1]
  );
}

countPrimeInRange(3, 10); // 3 : 3,5,7
countPrimeInRange(8, 20); // 4: 11,13,17,19
countPrimeInRange(1, 5); // 3: 2,3,5
countPrimeInRange(3, 7); // 3: 3,5,7
countPrimeInRange(2, 11); // 5: 2,3,5,7,11
