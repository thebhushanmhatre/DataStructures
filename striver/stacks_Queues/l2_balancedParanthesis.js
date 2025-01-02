function isBalanced(str) {
  let result = false;
  let stack = [];
  let pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  str.split('').forEach((bracket) => {
    // if top == current pair, remove, else add to stack
    if (
      stack.length > 0 &&
      pairs[bracket] &&
      stack[stack.length - 1] == pairs[bracket]
    ) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  });

  if (stack.length == 0) {
    result = true;
  }
  console.log(str, result ? 'is' : 'is not', 'balanced');
}

let str1 = '()[{}()]';
let str2 = '()[{}(])';

isBalanced(str1);
isBalanced(str2);
