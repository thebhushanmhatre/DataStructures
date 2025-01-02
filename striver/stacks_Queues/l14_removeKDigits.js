// remove k digits from num to get the smallest possible num

function removeDigits(numStr, k) {
  if (numStr.length == k) {
    return '0';
  }

  let stack = [];
  for (let i in numStr) {
    while (stack.length > 0 && stack[stack.length - 1] > numStr[i] && k > 0) {
      stack.pop();
      k--;
    }

    stack.push(numStr[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  minNum = stack.join('');
  console.log('Minimum num possible is', minNum);
  return minNum;
}

removeDigits('1432219', 3); // 1219
removeDigits('1432219', 4); // 119
removeDigits('9912145', 3); // 1145
removeDigits('3456789', 3); // 3456
