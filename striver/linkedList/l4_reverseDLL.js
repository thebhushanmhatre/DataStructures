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

function reverseDLL(head) {
  if (!head || !head.next) {
    return head;
  }

  while (head) {
    let temp = head;
    head = head.next;

    let nextNode = temp.next;
    let prevNode = temp.prev;

    temp.next = prevNode;
    temp.prev = nextNode;

    if (!head) {
      head = temp;
      break;
    }
  }

  return head;
}

let head = convertToDLL([4, 6, 8, 2]);
printDLL(head);

head = reverseDLL(head);
console.log('On reversing: ');
printDLL(head);

console.log(head);
