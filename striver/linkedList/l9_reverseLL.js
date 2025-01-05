// const { Node, convertToLL, printLL } = require('./common');

// let head = convertToLL([7, 6, 1, 3, 4, 9]);
// printLL(head);

function reverseLL(head) {
  if (!head || !head.next) {
    return head;
  }

  let nextNode = head.next;
  let prev = -1;

  while (nextNode) {
    if (prev == -1) {
      prev = head;
      prev.next = null;
    } else {
      prev = head;
    }

    // ORDER MATTERS
    head = nextNode;
    nextNode = nextNode.next;
    head.next = prev;
  }

  head.next = prev;
  return head;
}

// head = reverseLL(head);
// printLL(head);

module.exports = {
  reverseLL,
};
