// get list of all prime factors in asc order
// eg: 60: 2,2,3,5
// eg: 16: 2,2,2,2

function _getPrimeNosSieve(num) {
  const primeNos = new Array(num + 1).fill(1);
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

// modifying this for our usecase
// Here we are initally defining array with its values as its position than replacing all the nos with their smallest prime factor
function getSmallestPrimeNos(num) {
  const primeNos = [...new Array(num + 1)].map((_, index) => index);

  for (let i = 2; i * i <= num; i++) {
    if (primeNos[i] == i) {
      for (let j = i * i; j <= num; j += i) {
        if (primeNos[j] == j) {
          primeNos[j] = i;
        }
      }
    }
  }

  return primeNos;
}

function getPrimeFactors(arr) {
  const maxNum = Math.max(...arr);
  const primeNos = getSmallestPrimeNos(maxNum);
  arr.forEach((num) => {
    const result = [primeNos[num]];
    num = num / primeNos[num];
    while (num != 1) {
      result.push(primeNos[num]);
      num = num / primeNos[num];
    }
    console.log(result);
  });
}

getPrimeFactors([60, 16, 74, 84, 56, 48]);
