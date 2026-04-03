// Given number n, check if its prime or not

function isPrime(num) {
  let result = true; // just for console
  let i = 2;
  while (i * i <= num && result) {
    if (num % i == 0) {
      result = false; // return false from here
    }
    i++;
  }
  console.log(num, ' is ', result ? '' : 'not ', 'a  prime number');
  return result;
}

isPrime(3);
isPrime(4);
isPrime(5);
isPrime(27);
isPrime(11);
isPrime(13);
isPrime(16);
