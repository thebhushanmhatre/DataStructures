// Find the starting point of the loop

const { Node, convertToLL, printLL } = require('./common');

let head1 = convertToLL([3, 1]);
let head2 = convertToLL([5, 4, 13, 6, 7, 8, 9]);

// creating a loop
head1.next.next = head2;
printLL(head1);

let tempHead2 = head2;
while (tempHead2.next) {
  tempHead2 = tempHead2.next;
}
tempHead2.next = head2;

function findStartingPointOfLoopInLL(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      break;
    }
  }

  if (!fast || !fast.next) {
    console.log(`Loop doesn't exists`);
    return -1;
  }

  // distance of starting node from head is same as distance of starting node from meeting pointing node inside loop

  if (fast == slow) {
    slow = head;
  }

  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  console.log('Staring node val', slow.val);
  return slow.val;
}

findStartingPointOfLoopInLL(head1);
