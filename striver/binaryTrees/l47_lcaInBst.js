// Find LCA in BST

// Just find the node which lies in between the two nodes

const bst1 = {
  val: 6,
  left: {
    val: 2,
    left: { val: 0 },
    right: { val: 4, left: { val: 3 }, right: { val: 5 } },
  },
  right: { val: 8, left: { val: 7 }, right: { val: 9 } },
};

function findLCA(root, node1, node2) {
  if (!root) return null;

  let min, max;

  if (node1 > node2) {
    min = node2;
    max = node1;
  } else {
    min = node1;
    max = node2;
  }

  let currentNode = root;
  while (currentNode) {
    if (currentNode.val > max) {
      currentNode = currentNode.left;
    } else if (currentNode.val < min) {
      currentNode = currentNode.right;
    } else {
      return currentNode;
    }
  }
}

const lca1 = findLCA(bst1, 5, 0); // 2
console.log('\nLCA of bst1', lca1);

const lca2 = findLCA(bst1, 4, 9); // 6
console.log('\nLCA of bst1', lca2);

const lca3 = findLCA(bst1, 3, 5); // 4
console.log('\nLCA of bst1', lca3);
