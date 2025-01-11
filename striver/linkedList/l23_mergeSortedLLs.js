const { Node, convertToLL, printLL } = require('./common');

let l1 = convertToLL([2, 4, 8, 10]);
let l2 = convertToLL([1, 3, 3, 6, 11, 14]);
printLL(l1);
printLL(l2);

function _mergeLL(l1, l2) {
  let newHead;
  if (l1.val > l2.val) {
    newHead = l2;
    other = l1;
  } else {
    newHead = l1;
    other = l2;
  }

  let temp = newHead;

  while (temp) {
    if (!temp.next && other) {
      temp.next = other;
      break;
    }

    if (temp.next.val <= other.val) {
      temp = temp.next;
    } else {
      let nextNode = temp.next;
      temp.next = other;
      other = nextNode;
      temp = temp.next;
    }
  }

  return newHead;
}

// solve using dummy node to make it look better
function mergeLL(head1, head2) {
  let dummyNode = new Node(-1);

  let temp = dummyNode;
  while (head1 && head2) {
    if (head1.val > head2.val) {
      temp.next = head2;
      head2 = head2.next;
    } else {
      temp.next = head1;
      head1 = head1.next;
    }
    temp = temp.next;
  }

  // remaining nodes when one of Ll is exhausted
  if (head1) {
    temp.next = head1;
  } else {
    temp.next = head2;
  }

  return dummyNode.next;
}

let l3 = mergeLL(l1, l2);
printLL(l3);
