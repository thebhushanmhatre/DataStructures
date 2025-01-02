// Inorder Iterator

// hasNext - will return true if there exists next element, else false
// next - will return the next element in inorder

const bst1 = {
  val: 5,
  left: { val: 3, left: { val: 1, right: { val: 2 } }, right: { val: 4 } },
  right: { val: 7, left: { val: 6 }, right: { val: 8 } },
};

function BSTIterator(root) {
  this.stack = [];
  let currentNode = root;
  while (currentNode) {
    this.stack.push(currentNode);
    currentNode = currentNode.left;
  }

  // console.log('\nStack is ', this.stack);
}

BSTIterator.prototype.next = function () {
  let nextNode = this.stack.pop();
  if (nextNode.right) {
    let curr = nextNode.right;
    while (curr) {
      this.stack.push(curr);
      curr = curr.left;
    }
  }

  // console.log('\nNew Stack is ', this.stack);
  return nextNode.val;
};

BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

const bstIterator = new BSTIterator(bst1);

console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
console.log('next', bstIterator.next());
console.log('hasNext', bstIterator.hasNext());
