// Remove duplicates from DLL
const { Node, convertToDLL, printDLL } = require('./common-dll');

function removeDuplicates(head) {
  let temp = head;
  let nextNode = temp.next;

  while (temp && nextNode) {
    while (temp && nextNode && temp.val == nextNode.val) {
      let toDeleteNode = nextNode;
      nextNode = nextNode.next;

      toDeleteNode.prev = null;
      toDeleteNode.next = null;
    }

    temp.next = nextNode;
    if (nextNode) nextNode.prev = temp;

    temp = temp.next;
  }

  return head;
}

let nums = [1, 1, 1, 2, 3, 3, 4];
let head = convertToDLL(nums);
printDLL(head);

head = removeDuplicates(head);
printDLL(head);

console.log();

let nums2 = [1, 1, 1, 1];
let head2 = convertToDLL(nums2);
printDLL(head2);

head2 = removeDuplicates(head2);
printDLL(head2);
