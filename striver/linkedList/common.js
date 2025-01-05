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

module.exports = {
  Node,
  convertToLL,
  printLL,
};
