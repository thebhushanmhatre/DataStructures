// Copy list with random pointer
// every node has additional property 'pointer' that points to random nodes

const { Node, convertToLL, printLL } = require('./common');

let head = convertToLL([7, 13, 11, 10, 1]);
head.random = null;
head.next.random = head; // 13
head.next.next.random = head.next.next.next.next; // 11
head.next.next.next.random = head.next.next; // 10
head.next.next.next.next.random = head; // 1

// console.log(head);
// console.log();
// console.log(head.next);
// console.log();
// console.log(head.next.next);
// console.log();
// console.log(head.next.next.next);
// console.log();
// console.log(head.next.next.next.next);
// console.log();

printLL(head);

// brute
function createCopy(head) {
  // create all the nodes before assigning them copy
  let prevOfHead = new Node(-1);
  let dummyNode = prevOfHead;
  let temp = head;
  let nodeMap = {};

  // saving all the nodes in a hash map
  while (temp) {
    let newNode = new Node(temp.val);
    dummyNode.next = newNode;
    nodeMap[temp.val] = newNode;
    temp = temp.next;
    dummyNode = dummyNode.next;
  }

  // adding random pointers to all nodes
  temp = head;
  while (temp) {
    let newNode = nodeMap[temp.val];
    if (temp.random) {
      newNode.random = nodeMap[temp.random.val];
    } else {
      newNode.random = null;
    }
    temp = temp.next;
  }

  return prevOfHead.next;
}
// TC: O(2N)
// SC: O(N) - hash map

// optimize, remove hashmap
function createCopy(head) {
  // create copy nodes in between original nodes with proper next pointers
  // on 2nd iteration assign them random pointers
  // on 3rd iteration, separate them

  // 1st iteration
  let temp = head;
  while (temp) {
    let nextNode = temp.next;

    let newNode = new Node(temp.val, nextNode);
    temp.next = newNode;

    temp = nextNode;
  }

  // 2nd iteration
  temp = head;
  while (temp) {
    let nextNode = temp.next.next;

    // copynode should point to its next copied node
    let copyNode = temp.next;
    // copyNode.next = copyNode.next ? copyNode.next.next : null;
    copyNode.random = temp.random ? temp.random.next : null;

    // temp.next = nextNode;
    temp = nextNode;
  }

  // needs a 3rd iteation to separate copy nodes and original
  let newHead = head.next;

  temp = head;
  while (temp) {
    let nextNode = temp.next.next;

    // copynode should point to its next copied node
    let copyNode = temp.next;
    copyNode.next = copyNode.next ? copyNode.next.next : null;
    // copyNode.random = temp.random ? temp.random.next : null;

    temp.next = nextNode;
    temp = nextNode;
  }

  return newHead;
}
// TC: O(3N)
// SC: O(1) not considering result

let copyList = createCopy(head);

// console.log(copyList);
// console.log();
// console.log(copyList.next);
// console.log();
// console.log(copyList.next.next);
// console.log();
// console.log(copyList.next.next.next);
// console.log();
// console.log(copyList.next.next.next.next);
// console.log();

printLL(copyList);
