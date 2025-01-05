// return the value of middle node
// or second middle incase of even nodes

const { Node, convertToLL, printLL } = require('./common');

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

let head1 = convertToLL([3, 1, 4, 6, 2]);
printLL(head1);
let middleNode1 = findMiddle(head1);
console.log(middleNode1); // 4

let head2 = convertToLL([9, 7, 6, 5, 3, 2, 1, 4]);
printLL(head2);
let middleNode2 = findMiddle(head2);
console.log(middleNode2); // 3
