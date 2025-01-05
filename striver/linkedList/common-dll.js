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

module.exports = {
  Node,
  printDLL,
  convertToDLL,
};
