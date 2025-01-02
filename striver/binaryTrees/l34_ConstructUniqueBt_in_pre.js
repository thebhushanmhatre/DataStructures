// Construct Unique BT using given inorder and preorder

const inorder = [40, 20, 50, 10, 60, 30]; //  left, root, right
const preorder = [10, 20, 40, 50, 30, 60]; // root, left, right

function constructBt(inorder, preorder) {
  if (!inorder.length || !preorder.length) return;

  const result = {};
  result.val = preorder[0];
  const rootPos = inorder.indexOf(preorder[0]);

  const leftTreeInOrder = inorder.slice(0, rootPos);
  const leftTreePreOrder = preorder.slice(1, leftTreeInOrder.length + 1);

  if (leftTreeInOrder.length && leftTreePreOrder.length) {
    result.left = constructBt(leftTreeInOrder, leftTreePreOrder);
  }

  const rightTreeInOrder = inorder.slice(rootPos + 1);
  const rightTreePreOrder = preorder.slice(leftTreePreOrder.length + 1); // length should be that of leftPreOrder

  if (rightTreeInOrder.length && rightTreePreOrder.length) {
    result.right = constructBt(rightTreeInOrder, rightTreePreOrder);
  }

  return result;
}

const root = constructBt(inorder, preorder);
console.log('\nBT constructed is ', root);
