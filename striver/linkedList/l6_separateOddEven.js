// Group odd and even INDEXED nodes
// return odd nodes -> even nodes

const { Node, convertToLL, printLL } = require('./common');

let nums1 = convertToLL([1, 3, 4, 2, 5, 6]);
printLL(nums1);

head1 = segregateOddEven(nums1);
printLL(head1);

console.log();

let nums2 = convertToLL([8, 5, 3, 7, 9, 1]);
printLL(nums2);

head2 = segregateOddEven(nums2);
printLL(head2);

// brute force
// use a list, add all odds in it and then all even ones
// then use list to replace the data of existing ll

// lets solve without using list
// assuming 1 based indexing

function segregateOddEven(head) {
  if (!head || !head.next) {
    return head;
  }

  let evenHead = head.next;
  let tempOdd = head;
  let tempEven = evenHead;

  while (tempOdd && tempEven) {
    let nextOdd = tempEven.next;
    if (nextOdd) {
      tempEven.next = nextOdd.next;
      tempEven = tempEven.next; // set to null incase it doesn't exists
      tempOdd.next = nextOdd;
      tempOdd = tempOdd.next;
    } else {
      tempEven.next = null;
      tempEven = null;

      tempOdd.next = evenHead;
    }
  }

  return head;
}
