let testTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: {
          val: 5,
          left: null,
          right: null,
        },
        right: {
          val: 6,
          left: null,
          right: null,
        },
      },
    },
    right: null,
  },
  right: {
    val: 7,
    left: null,
    right: {
      val: 8,
      left: {
        val: 9,
        left: {
          val: 10,
          left: null,
          right: null,
        },
        right: {
          val: 11,
          left: null,
          right: null,
        },
      },
      right: null,
    },
  },
};

//        1
//    2      7
//  3   _     _  8
// _  4        9   _
//  5  6     10  11

// Boundary Traversal (Anticlockwise)
// 1 2 3 4 5 6 10 11 9 8 7

// Inutition to solve:
// get 1 2 3 4 - Get left boundary excluding leaf node
// then get 5 6 10 11 - Get Leaf nodes
// then get 9 8 7 - Get the right boundar in reverse order (bottom to up)

function isLeafNode(node) {
  if (!node.left && !node.right) {
    return true;
  }
  return false;
}

function getLeftBoundary(node, result) {
  // // Recursive
  // if (node.left && !isLeafNode(node.left)) {
  //   result.push(node.left.val);
  //   getLeftBoundary(node.left, result);
  // }
  // if (!node.left && node.right && !isLeafNode(node.right)) {
  //   result.push(node.right.val);
  //   getLeftBoundary(node.right);
  // }

  // // Iterative
  node = node.left; // Skip the root
  while (node) {
    if (!isLeafNode(node)) result.push(node.val);
    if (node.left) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
}

function getLeafNodes(node, result) {
  if (!node) return;
  if (isLeafNode(node)) {
    result.push(node.val);
  }
  getLeafNodes(node.left, result);
  getLeafNodes(node.right, result);
}

function getRightBoundary(node, result) {
  let reverseNodes = [];
  node = node.right; // Skip the root
  while (node) {
    if (!isLeafNode(node)) reverseNodes.push(node.val);
    if (node.right) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  while (reverseNodes.length > 0) {
    result.push(reverseNodes.pop());
  }
}

function boundaryTraversal(root) {
  let result = [];
  if (!root) {
    return [];
  }
  if (!isLeafNode(root)) {
    result.push(root.val);
  } // Adding root once here
  getLeftBoundary(root, result); // Excluding leaf nodes
  getLeafNodes(root, result);
  getRightBoundary(root, result); // Excluding leaf nodes
  return result;
}

// console.log(isLeafNode({ val: 4, left: null, right: null }));
// console.log(isLeafNode({ val: 4, left: { val: 45 }, right: null }));

console.log('Boundary Traversal: ', ...boundaryTraversal(testTree));
