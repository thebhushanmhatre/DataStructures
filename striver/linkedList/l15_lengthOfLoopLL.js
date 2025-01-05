// Find the length of loop in ll

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

function loopLength(head) {
  // find loop element;
  let slow = head.next,
    fast = head.next.next;

  while (slow && fast && fast.next && slow != fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (!fast) {
    console.log('There is no loop');
    return 0;
  }

  console.log('Confirming, There is a loop at', slow.val);

  // loop while counting until el.next == temp
  let loopElement = slow;
  let result = 1;
  while (slow.next != loopElement) {
    // console.log('comparing', slow.next.val, 'and', loopElement.val);
    slow = slow.next;
    result++;
  }
  console.log('The length of loop is', result);

  return result;
}

let len = loopLength(head1);
