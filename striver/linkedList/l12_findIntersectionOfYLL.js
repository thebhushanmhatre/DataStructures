// Find the intersection point of Y LL

// 3 - 1
//                - 4 - 6 - 2 - x
// 1 - 2 - 4 - 5

// return:  4 - 6 - 2 - x

// method1: store one of the list of nodes in hash, then check other list if node exists

// method2: traverse and find lengths, then traverse the longer one by difference of lengths then traverse and compare every node

// method3: optimal:

function findIntersectionPoint(head1, head2) {
  let temp1 = head1;
  let temp2 = head2;

  // iterate till the first end
  while (temp1 && temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  if (!temp1 && !temp2) {
    console.log('LLs never intersect');
    return null;
  }

  if (!temp1) {
    temp1 = head2;
  } else {
    temp2 = head1;
  }

  // iterate till the other list ends
  while (temp1 && temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  // other list ends
  if (!temp1) {
    temp1 = head2;
  } else {
    temp2 = head1;
  }

  // now iterate while comparing
  while (temp1 != temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  // return any one
  return temp1;
}

const { Node, convertToLL, printLL } = require('./common');

let head = convertToLL([3, 1, 4, 6, 2]);
printLL(head);

let head2 = convertToLL([1, 2, 4, 5]);

// creating a intersection to test
tempHead2 = head2;
while (tempHead2.next) {
  tempHead2 = tempHead2.next;
}
tempHead2.next = head.next.next;
printLL(head2);

let itersectionPoint = findIntersectionPoint(head, head2);
printLL(itersectionPoint);
