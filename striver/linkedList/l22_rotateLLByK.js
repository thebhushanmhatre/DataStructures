// Rotate LL by k
// 1 - 2 - 3 - 4 - 5 - x

// by k = 1
// 5 - 1 - 2 - 3 - 4 - x shifted right by 1

// by k = 2
// 4 - 5 - 1 - 2 - 3 - x shifted right by 2

const { convertToLL, printLL } = require('./common');

let head = convertToLL([1, 2, 3, 4, 5, 6, 7, 8]);
printLL(head);

function rotateByK(head, k) {
  let temp = head;
  let counter = 0;

  // if k > sizeOfLL, then recompute k as k mod sizeOfLL
  while (counter < k && temp) {
    counter++;
    temp = temp.next;
  }

  // IMP
  if (!temp && counter == k) {
    // sizeOfLL == k
    return head;
  }

  if (!temp && counter < k) {
    // k > sizeOfLL
    // sizeOfLL = counter
    k = k % counter;

    // IMP
    if (k == 0) {
      return head;
    }

    // reset counter and traverse to new k
    counter = 0;
    temp = head;
    while (counter < k && temp) {
      counter++;
      temp = temp.next;
    }
  }

  // now we are at k from head;
  // find k from back;
  let curr = head;

  while (temp.next) {
    temp = temp.next;
    curr = curr.next;
  }

  // when temp is at tail, curr would be on kth node from tail
  let newHead = curr.next;
  curr.next = null;
  temp.next = head;

  return newHead;
}

head = rotateByK(head, 7);
printLL(head);
