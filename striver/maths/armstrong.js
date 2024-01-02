// Armstrong number
// sum of digits raised to power no. of digits of number === number
// eg: 1^3 + 3^3 + 5^3 = 153
// 1^4 + 6^4 + 3^4 + 4^4 = 1634

function checkArmstrong(num) {
  let count = 0;
  let digits = [];
  let item = num;
  while (item > 0) {
    digits.push(item % 10);
    item = Math.floor(item / 10);
    count++;
  }
  let sum = digits.reduce((acc, val) => acc + Math.pow(val, count), 0);
  console.log(`${num} ${sum === num ? 'is' : 'is not an'} armstrong number`);
  return sum === num;
}

checkArmstrong(153); // true
checkArmstrong(1634); // true
checkArmstrong(121); // false
checkArmstrong(35); // false
