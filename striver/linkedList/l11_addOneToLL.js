// add One to LL
// LL is representation of digits of a number
// we are adding to tail

// eg : 1 - 6 - 9 - x
// 1 + 169 = 170
// res: 1 - 7 - 0 - x

const { Node, convertToLL, printLL } = require('./common');

function helper(temp) {
  if (!temp) return 1;

  let carry = helper(temp.next);
  temp.val = temp.val + carry;

  if (temp.val < 10) return 0;

  temp.val = 0;
  return 1;
}

function addOne(head) {
  let carry = helper(head);
  if (carry == 1) {
    return new Node(1, head);
  }

  return head;
}

let head = convertToLL([1, 6, 9]);
printLL(head);
head = addOne(head);
printLL(head);
console.log();

let head2 = convertToLL([9, 9, 9, 9]);
printLL(head2);
head2 = addOne(head2);
printLL(head2);
  