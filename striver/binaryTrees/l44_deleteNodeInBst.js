// Delete a node in BST

const bst1 = {
  val: 5,
  left: { val: 3, left: { val: 2 }, right: { val: 4 } },
  right: { val: 6, right: { val: 7 } },
};

function deleteNodeInBst(root, key) {
  console.log('Deleting a node', key, '...');
  let currentNode = root;

  while (currentNode && currentNode.val != key) {
    if (key > currentNode.val) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }

  // // Find the highest node value in left subtree i.e. rightmost leaf node
  // let highestLeafNode = currentNode.left;
  // let parentToDelete = currentNode;

  // while (highestLeafNode && highestLeafNode.left && highestLeafNode.right) {
  //   parentToDelete = highestLeafNode;
  //   highestLeafNode = highestLeafNode.right;
  // }

  // currentNode.val = highestLeafNode.val;
  // if (highestLeafNode == currentNode) {
  //   delete currentNode.left;
  // } else {
  //   delete parentToDelete.right;
  // }

  // Alternate:
  // Alternate or rather better solution is to attach the right subtree to rightmost element in the left subtree
  // Write down

  console.log(root);
}

deleteNodeInBst(bst1, 3);
deleteNodeInBst(bst1, 5);
