// Reverse Node in K-group
// 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - x
// if k = 3
// 3 - 2 - 1 - 6 - 5 - 4 - 7 - 8 - x
// remaining nos not forming group will remain as it is

const { convertToLL, printLL } = require('./common');

let head = convertToLL([1, 2, 3, 4, 5, 6, 7, 8]);
printLL(head);

function reverseLL(head) {
  if (!head || !head.next) return head;

  let prev = null;
  while (head && head.next) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }

  head.next = prev;

  return head;
}

function findKthNode(head, k) {
  let counter = 1;
  let temp = head;
  while (counter < k && temp) {
    counter++;
    temp = temp.next;
  }

  if (counter == k) {
    return temp;
  } else return null;
}

function reverseNodesInGroup(head, k) {
  let temp = head;
  let prev = null;

  while (temp) {
    let kNode = findKthNode(temp, k);
    if (!kNode) {
      if (prev) {
        prev.next = temp;
      }
      break;
    }

    // unlink and reverse the k nodes
    let nextNode = kNode.next;
    kNode.next = null;
    reverseLL(temp);

    // update head if its first k nodes
    // else link prev to kNode for next group
    if (!prev) {
      // or if (temp == head)
      // change head only at first iteration
      head = kNode;
    } else {
      prev.next = kNode; // imp - kNode not nextNode
    }

    prev = temp; // imp
    temp = nextNode;
  }

  return head;
}

// head = reverseLL(head);
head = reverseNodesInGroup(head, 3);
printLL(head);
