// Sort LL having just 0s, 1s and 2s

const { Node, convertToLL, printLL } = require('./common');

let nums1 = convertToLL([1, 0, 1, 2, 0, 2, 1]);
printLL(nums1);

function sortNos(head) {
  let zeroes = new Node(-1);
  let ones = new Node(-1);
  let twos = new Node(-1);

  let zerosHead = zeroes;
  let onesHead = ones;
  let twosHead = twos;

  let temp = head;
  while (temp) {
    if (temp.val == 0) {
      zeroes.next = temp;
      zeroes = zeroes.next;
    } else if (temp.val == 1) {
      ones.next = temp;
      ones = ones.next;
    } else {
      twos.next = temp;
      twos = twos.next;
    }

    temp = temp.next;
  }

  zeroes.next = onesHead.next ? onesHead.next : twosHead.next; // DONT FORGET THIS CONDITION
  ones.next = twosHead.next;
  twos.next = null; // DONT FORGET THIS

  return zerosHead.next;
}

let head = sortNos(nums1);
printLL(head);

console.log();
let nums2 = convertToLL([2, 2, 2]);
printLL(nums2);

let head2 = sortNos(nums2);
console.log(head2);
printLL(head2);
