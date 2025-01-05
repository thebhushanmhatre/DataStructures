// Check if LL is palindrome

const { Node, convertToLL, printLL } = require('./common');
const { reverseLL } = require('./l9_reverseLL');

function checkIfPalindrome(head) {
  let flag = true;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow should now be at middle or middle 1
  let temp = head;
  // reversing next half and returning its head
  let nextHalfHead = reverseLL(slow.next); // NEXT is IMPORTANT
  let rTemp = nextHalfHead;

  while (rTemp) {
    if (rTemp.val != temp.val) {
      flag = false;
      break;
    }
    rTemp = rTemp.next;
    temp = temp.next;
  }

  // // revert the reverse ll so that linked list remain as it is
  slow.next = reverseLL(nextHalfHead); // not necessary maybe

  flag ? console.log('Its a palindrome') : console.log('Not a palindrome');
  return flag;
}

let head = convertToLL([7, 6, 1, 3, 1, 6, 7]);
printLL(head);
checkIfPalindrome(head); // true;
printLL(head);
console.log();

let head2 = convertToLL([7, 6, 2, 3, 3, 2, 6, 7]);
printLL(head2);
checkIfPalindrome(head2); // true
printLL(head2);
console.log();

let head3 = convertToLL([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
printLL(head3);
checkIfPalindrome(head3); // false
printLL(head3);
