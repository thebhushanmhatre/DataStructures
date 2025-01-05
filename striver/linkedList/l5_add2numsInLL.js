// Add two numbers in LL

function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

function printLL(head) {
  let str = '';
  while (head) {
    str += head.val + ' -> ';
    head = head.next;
  }
  str += 'x';

  console.log(str);
}

function convertToLL(nums) {
  if (nums.length == 0) return null;
  let head = new Node(nums[0]);

  let temp = head;
  for (let i = 1; i < nums.length; i++) {
    temp.next = new Node(nums[i]);
    temp = temp.next;
  }
  return head;
}

let num1 = convertToLL([2, 4, 6]);
let num2 = convertToLL([3, 8, 7]);
printLL(num1);
printLL(num2);

function _calculateSum(num1, num2) {
  let sumArr = [];
  let carry = 0;

  while (num1 || num2) {
    let a = num1.val || 0;
    let b = num2.val || 0;
    let tempSum = a + b + carry;
    if (tempSum > 9) {
      tempSum = tempSum % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    sumArr.unshift(tempSum);
    num1 = num1.next;
    num2 = num2.next;
  }

  if (carry == 1) {
    sumArr.unshift(1);
  }

  return convertToLL(sumArr);
}

// optimizing to remove the convert To Array function call
function calculateSum(num1, num2) {
  let sumLL;
  let carry = 0;
  let currNode;

  while (num1 || num2) {
    let a = num1 ? num1.val : 0;
    let b = num2 ? num2.val : 0;
    let tempSum = a + b + carry;
    if (tempSum > 9) {
      tempSum = tempSum % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    if (!sumLL) {
      // first iteration, for head
      sumLL = new Node(tempSum);
      currNode = sumLL;
    } else {
      currNode.next = new Node(tempSum);
      currNode = currNode.next;
    }

    num1 = num1 ? num1.next : null; // note this - dont miss it i.e. ? :
    num2 = num2 ? num2.next : null; // note this - dont miss it i.e. ? :
  }

  if (carry == 1) {
    if (!sumLL) {
      sumLL = new Node(1);
      currNode = sumLL;
    } else {
      currNode.next = new Node(1);
      currNode = currNode.next;
    }
  }

  return sumLL;
}

let sum1 = calculateSum(num1, num2);
console.log('Sum: ');
printLL(sum1);
console.log('\n');

let num3 = convertToLL([3, 5]);
let num4 = convertToLL([4, 5, 9, 9]);
printLL(num3);
printLL(num4);
let sum3 = calculateSum(num3, num4);
console.log('Sum: ');
printLL(sum3);

// for cleaner implmentation, use summynode
// and return dummyNode.next as ans
