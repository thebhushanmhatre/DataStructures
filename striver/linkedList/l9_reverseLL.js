// const { Node, convertToLL, printLL } = require('./common');

// let head = convertToLL([7, 6, 1, 3, 4, 9]);
// printLL(head);

function reverseLL(head) {
  if (!head || !head.next) {
    return head;
  }

  let temp = head;
  let prev = null;

  while (temp) {
    let nextNode = temp.next;
    temp.next = prev;
    prev = temp;
    temp = nextNode;
  }

  return prev;
}

// head = reverseLL(head);
// printLL(head);

module.exports = {
  reverseLL,
};
