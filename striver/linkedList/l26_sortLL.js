const { Node, convertToLL, printLL } = require('./common');

let head = convertToLL([2, 4, 8, 10, 9, 7, 3, 6, 1, 5]);
printLL(head);

function findMiddleOfLL(head) {
  let fast = head.next; // Don't forget this, for finding the first middle incase of even nums
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function merge2SortedLL(head1, head2) {
  let dummyNode = new Node(-1);
  let temp = dummyNode;

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next; // Don't forget this
  }

  if (head1) {
    temp.next = head1;
  } else {
    temp.next = head2;
  }

  return dummyNode.next;
}

function sortLL(head) {
  if (!head || !head.next) {
    return head;
  }

  let middle = findMiddleOfLL(head);

  let leftList = head;
  let rightList = middle.next;
  middle.next = null;

  leftList = sortLL(leftList);
  rightList = sortLL(rightList);

  return merge2SortedLL(leftList, rightList);
}

head = sortLL(head);
printLL(head);
