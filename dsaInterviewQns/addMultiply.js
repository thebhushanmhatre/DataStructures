// You are given two non-empty arrays representing two non-negative integers. Add the two numbers and return the sum as an array.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// 342 + 465 = 807

function addNums(num1, num2) {
  let n1 = num1.length,
    n2 = num2.length;
  let n = Math.max(n1, n2);
  let carry = 0,
    result = [];

  for (let i = 0; i < n; i++) {
    let ans = carry;
    if (num1[i]) {
      ans += num1[i];
    }
    if (num2[i]) {
      ans += num2[i];
    }

    if (ans > 9) {
      ans = ans % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result.push(ans);
  }

  if (carry == 1) {
    result.push(carry);
  }

  return result;
}
// Time Complexity: O(N)
// Space Complexity: O(1): Ignoring the space required for result.

let l1 = [2, 4, 3],
  l2 = [5, 6, 4];
console.log(addNums(l1, l2));

console.log(addNums([0], [0]));

console.log(addNums([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// now multiply two nos
// 3 4 2
// 4 6 5
//

function multiplyNums(num1, num2) {
  let n1 = num1.length,
    n2 = num2.length;
  let result = 0;

  for (let i = 0; i < n1; i++) {
    let a = num1[i] * Math.pow(10, i);
    let carry = 0,
      product = [];
    for (let j = 0; j < n2; j++) {
      let ans = a * num2[j] + carry;
      if (ans > 9) {
        carry = 1;
      } else {
        carry = 0;
      }
    }

    // sum
  }
}

// Time Complexity: O(N^2)
// Space Complexity: O(N): Ignoring the space required for result. -
