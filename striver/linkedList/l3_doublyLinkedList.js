// Doubly linked list

// convert array to doubly linked list

// insert and delete, each with 4 cases:
// 1. start
// 2. end
// 3. at position k
// 4. before value k

function Node(val, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

function printDLL(head) {
  let str = 'x - ';
  while (head) {
    str += head.val + ' - ';
    head = head.next;
  }
  str += 'x';

  console.log(str);
}

function convertToDLL(nums) {
  if (nums.length == 0) return null;
  let head = new Node(nums[0]);

  let temp = head;
  for (let i = 1; i < nums.length; i++) {
    temp.next = new Node(nums[i], null, temp);
    temp = temp.next;
  }
  return head;
}

function insertAtHead(head, val) {
  let newNode = new Node(val, head);
  head.prev = newNode;

  return newNode;
}

function insertAtEnd(head, val) {
  if (!head) return new Node(val);

  if (!head.next) {
    head.next = new Node(val, null, head);
    return head;
  }

  let temp = head;
  while (temp.next) {
    temp = temp.next;
  }

  let newNode = new Node(val, null, temp);
  temp.next = newNode;

  return head;
}

function insertAtPos(head, val, pos) {
  if (pos == 1) {
    return insertAtHead(head, val);
  }
  if (!head) return null;

  let temp = head;
  let counter = 1;
  while (counter < pos) {
    temp = temp.next;
    counter++;
  }

  if (!temp.next) {
    temp = insertAtEnd(temp, val);
    return head;
  }

  let prevNode = temp.prev;
  let newNode = new Node(val, temp, prevNode);
  prevNode.next = newNode;
  temp.prev = newNode;

  return head;
}

function insertBeforeElement(head, val, el) {
  if (head.val == el) {
    let newNode = new Node(val, head);
    head.prev = newNode;
    return newNode;
  }

  let temp = head;
  while (temp.val != el) {
    temp = temp.next;
  }

  let prevNode = temp.prev;
  let newNode = new Node(val, temp, prevNode);
  prevNode.next = newNode;
  temp.prev = newNode;

  return head;
}

function deleteAtHead(head) {
  if (!head) return null;

  let newHead = head.next;
  head.next = null;
  newHead.prev = null;

  return newHead;
}

function deleteAtEnd(head) {
  if (!head || !head.next) return null;

  let temp = head;
  while (temp.next) {
    temp = temp.next;
  }

  let lastNode = temp.prev;
  temp.prev = null;
  lastNode.next = null;

  return head;
}

function deleteAtPos(head, pos) {
  if (!head) return null;
  if (pos == 1) {
    return deleteAtHead(head);
  }

  let counter = 1;
  let temp = head;
  while (counter < pos) {
    temp = temp.next;
    counter++;
  }

  if (!temp.next) {
    let prevNode = temp.prev;
    prevNode.next = null;
    temp.prev = null;
    return head;
  }

  let prevNode = temp.prev;
  let nextNode = temp.next;
  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  temp.next = null;
  temp.prev = null;
  return head;
}

function deleteElement(head, el) {
  if (head.val == el) {
    let newHead = head.next;
    newHead.prev = null;
    head.next = null;

    return newHead;
  }

  let temp = head;
  while (temp.val != el) {
    temp = temp.next;
  }

  let prevNode = temp.prev;
  let nextNode = temp.next;
  if (nextNode) {
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  } else {
    prevNode.next = null;
  }
  temp.next = null;
  temp.prev = null;

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
  let head = convertToDLL(nums);
  printDLL(head);

  // head = insertAtHead(head, 7);
  // head = insertAtEnd(head, 7);
  // head = insertAtPos(head, 7, 3);
  // head = insertBeforeElement(head, 7, 6);

  // head = deleteAtHead(head);
  // head = deleteAtEnd(head);
  // head = deleteAtPos(head, 4);
  head = deleteElement(head, 2);

  printDLL(head);
}
