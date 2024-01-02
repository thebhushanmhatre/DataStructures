// Find n th root of M

// Input Format: N = 3, M = 27
// Result: 3
// Explanation: The cube root of 27 is equal to 3.

// Example 2:
// Input Format: N = 4, M = 69
// Result: -1
// Explanation: The 4th root of 69 does not exist. So, the answer is -1.

function findNthRoot(num, n) {
  if (num === 1) return 1;
  let low = 1;
  let high = num;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nPower(mid, n) == num) {
      ans = mid;
      break;
    } else if (nPower(mid, n) < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log('=========================');
  console.log(n, 'root of ', num, ' is ', ans);
  console.log('=========================');

  return -1;
}

function nPower(num, pow) {
  let ans = 1;
  for (let i = 0; i < pow; i++) {
    ans *= num;
  }
  return ans;
}

findNthRoot(27, 3);
findNthRoot(69, 4);
findNthRoot(81, 4);
findNthRoot(80, 4);
