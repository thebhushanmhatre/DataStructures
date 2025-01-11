// Flattening a LL
// Given a Linked List, where every node represents a sub-linked-list and contains two pointers:
// (i) a next pointer to the next node,
// (ii) a bottom pointer to a linked list where this node is head.
// Each of the sub-linked lists is in sorted order.
// Flatten the Link List so all the nodes appear in a single level while maintaining the sorted order.
// The resultant linked lists has every node in a single level. (no next pointers, all with bottom pointer)

// eg:
// 5 - 10 - 19 - 28
// 7   20   22   35
// 8        50   40
// 30            45
//
// result
// 5  7  8  10  19  20  22  28  30  35  40  45  50
// all these one below another connected with bottom pointers (and not next)

function Node(val, next = null, bottom = null) {
  this.val = val;
  this.next = next;
  this.bottom = bottom;
}

let n45 = new Node(45);
let n40 = new Node(40, null, n45);
let n35 = new Node(35, null, n40);
let n28 = new Node(28, null, n35);

let n50 = new Node(50);
let n22 = new Node(22, null, n50);
let n19 = new Node(19, n28, n22);

let n20 = new Node(20);
let n10 = new Node(10, n19, n20);

let n30 = new Node(30);
let n8 = new Node(8, null, n30);
let n7 = new Node(7, null, n8);
let n5 = new Node(5, n10, n7);

let head = n5;

// helper functions

// print linked list with just bottom nodes
function printLLB(head) {
  let str = '';
  while (head) {
    str += head.val + ' > ';
    head = head.bottom;
  }
  str += 'x';
  console.log(str);
}

// merge two sorted list whose nodes are on bottom not next
function merge2SortedLL(head1, head2) {
  let dummyNode = new Node(-1);

  let temp = dummyNode;
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      temp.bottom = head1;
      head1 = head1.bottom;
    } else {
      temp.bottom = head2;
      head2 = head2.bottom;
    }
    temp = temp.bottom;
  }

  if (head1) {
    temp.bottom = head1;
  } else {
    temp.bottom = head2;
  }

  return dummyNode.bottom;
}

// flatten a ll with next and bottom pointer
// note all bottom pointer are sorted

function flattenLL(head) {
  if (!head || !head.next) {
    return head;
  }

  let sortedList = flattenLL(head.next);
  return merge2SortedLL(head, sortedList);
}

head = flattenLL(head);
printLLB(head);
