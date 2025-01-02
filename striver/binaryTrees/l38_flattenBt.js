// Flatten a binary tree to a linked list
// in preorder, without creating a new linkedin list
// just rearrange the nodes

const bt1 = {
  val: 40,
  left: { val: 10, left: { val: 2 }, right: { val: 5 } },
  right: { val: 20, left: { val: 30 }, right: { val: 15 } },
};

//         40
//       /    \
//    10         20
//  /  \        /  \
// 2    5     30     15

// preorder: 40 10 2 5 20 30 15

// ll: 40 - 10 - 2 - 5 - 20 - 30 - 15

// recursive

function findRightmostNodeInLeftSubtree(currentNode) {
  // console.log('\nIn findRightmostNodeInLeftSubtree', currentNode);

  while (currentNode && currentNode.left && currentNode.right) {
    if (currentNode.right) {
      currentNode = currentNode.right;
    } else if (currentNode.left) {
      currentNode = currentNode.left;
    }
  }

  // console.log('In findRightmostNodeInLeftSubtree, returning', currentNode);
  return currentNode;
}

function flattenRecursive(root) {
  // console.log('\nIn flattenRecursive', root);

  if (!root) {
    return;
  } else if (!root.left) {
    // left doesn't exists
  } else {
    // left exists
    if (!root.right) {
      // left exists, right doesn't exists
      root.right = root.left;
      delete root.left;
    } else {
      // left exists, right exists
      let rightSubtree = root.right;
      let rightmostNodeInLeftSubtree = findRightmostNodeInLeftSubtree(
        root.left
      );
      rightmostNodeInLeftSubtree.right = rightSubtree;
      root.right = root.left;
      delete root.left;
    }
  }
  return flattenRecursive(root.right);
}

flattenRecursive(bt1);
console.log('\nBT after flattening: ', JSON.stringify(bt1));

const bt2 = {
  val: 1,
  left: { val: 2, left: { val: 3 }, right: { val: 4 } },
  right: { val: 5, right: { val: 6, left: { val: 7 } } },
};

flattenRecursive(bt2); // 1 2 3 4 5 6 7
console.log('\nBT after flattening: ', JSON.stringify(bt2));

const bt3 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: { val: 4, left: { val: 5, left: { val: 6 } } } },
  },
  right: {
    val: 7,
    left: { val: 8, right: { val: 9, left: { val: 10 } } },
  },
};

//                 1
//               /   \
//             2       7
//            /        /
//           3        8
//          /          \
//         4            9
//        /            /
//       5            10
//     /
//    6
// pre order: 1 2 3 4 5 6 7 8 9 10 (root, left, right)

flattenRecursive(bt3);
console.log('\nBT after flattening: ', JSON.stringify(bt3));

// iterative

// optimize using morris traversal
