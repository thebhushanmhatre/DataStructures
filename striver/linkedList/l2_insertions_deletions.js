// linked list

// print Linked List

// convert array to linked list

// insert and delete, each with 4 cases:
// 1. start
// 2. end
// 3. at position k
// 4. before value k

function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

function printLL(head) {
  let strToPrint = '=> ';
  while (head) {
    strToPrint += head.val + ' -> ';
    head = head.next;
  }
  strToPrint += 'x';
  console.log(strToPrint);
}

function convertToLL(array) {
  if (array.length == 0) return null;
  let head = new Node(array[0]);
  if (array.length == 1) {
    return head;
  }

  let temp = head;
  for (let i = 1; i < array.length; i++) {
    let nextNode = new Node(array[i]);
    temp.next = nextNode;
    temp = nextNode;
  }
  return head;
}

function insertAtHead(head, val) {
  if (!head || !head.next) return new Node(val, head);

  return new Node(val, head);
}

function insertAtEnd(head, val) {
  if (!head) return new Node(val);
  let temp = head;

  while (temp.next != null) {
    temp = temp.next;
  }

  temp.next = new Node(val);
  return head;
}

function insertAtPos(head, val, pos) {
  if (!head) return head;

  let prev = head;
  while (prev && pos > 2) {
    pos--;
    prev = prev.next;
  }

  if (pos == 2) {
    // pos = 1 if 0 based indexed addition
    let temp = new Node(val, prev.next);
    prev.next = temp;
  }

  return head;
}

// assuming el exists
function insertBeforeElement(head, val, el) {
  if (head.val == el) {
    return new Node(val, head);
  }

  let prev = head;
  while (prev.next.val != el) {
    prev = prev.next;
  }

  let temp = new Node(val, prev.next);
  prev.next = temp;

  return head;
}

function deleteAtHead(head) {
  if (!head || !head.next) {
    return null;
  }

  let prev = head;
  head = head.next;
  prev.next = null;

  return head;
}

function deleteAtEnd(head) {
  if (!head || !head.next) {
    return null;
  }

  let temp = head;
  while (temp.next.next) {
    temp = temp.next;
  }

  temp.next = null;
  return head;
}

// 1 based index
function deleteAtPos(head, pos) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    if (pos == 1) {
      return null;
    }
    console.log('Deletion not possible');
    return head;
  }

  let prev = head;
  while (pos > 2) {
    pos--;
    prev = prev.next;
  }

  let nodeToDelete = prev.next;
  prev.next = nodeToDelete.next;
  nodeToDelete.next = null;

  return head;
}

function deleteElement(head, el) {
  if (!head) return null;
  if (head.val == el) return head.next;

  let prev = head;
  while (prev.next.val != el) {
    prev = prev.next;
  }

  let nodeToDelete = prev.next;
  prev.next = nodeToDelete.next;
  nodeToDelete.next = null;

  return head;
}

// Testing
let numsArr = [
  [4, 6, 8, 2],
  // [1], []
];

for (let i = 0; i < numsArr.length; i++) {
  let nums = numsArr[i];
  console.log('\n', nums);
  let head = convertToLL(nums);
  printLL(head);

  // head = insertAtHead(head, 7);
  // head = insertAtEnd(head, 7);
  // head = insertAtPos(head, 7, 2);
  // head = insertBeforeElement(head, 7, 4);

  // head = deleteAtHead(head);
  // head = deleteAtEnd(head);
  // head = deleteAtPos(head, 2);
  // head = deleteElement(head, 2);

  printLL(head);
}
