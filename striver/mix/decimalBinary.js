
function decimalToBinary (num) {
  if (num > 255) {
    console.log('Numbers beyond 255 cannot be converted to decimal for this testing')
    return false;
  }
  let result = '';
  let i = 8;
  let numValue = num;
  while (i > 0) {
    let digitValue = Math.pow(2, i-1);
    if (numValue >= digitValue) {
      numValue -= digitValue;
      result += '1';
    } else {
      result += '0'
    }
    i--;
  }

  console.log(num, '\'s binary representation would be ', result);
  return result;
}

function binaryToDecimal (num) { // num: in String format
  let n = num.length;
  let result = 0;
  const decimalDigits = num.split('')
  for (let i = n-1; i >= 0; i--) {
    result += decimalDigits[i] * Math.pow(2, n-1-i)
  }
  console.log(num, '\'s decimal would be ', result);
  return result;
}

binaryToDecimal('0000011'); // 3
binaryToDecimal('0000101'); // 5
binaryToDecimal('0011010'); // 26
binaryToDecimal('0010001'); // 17

decimalToBinary(3)
decimalToBinary(5)
decimalToBinary(26)
decimalToBinary(17)
decimalToBinary(300)