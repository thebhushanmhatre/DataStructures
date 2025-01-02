const bst1 = {
  val: 5,
  left: { val: 2, left: { val: 1 }, right: { val: 4, left: { val: 3 } } },
  right: {
    val: 7,
    left: { val: 6 },
    right: { val: 9, left: { val: 8 }, right: { vak: 10 } },
  },
};

//         5
//   2          7
// 1    4     6     9
//    3           8    10

function findInorderSuccessor(root, nodeValue) {
  let currentNode = root;
  let successor = null;
  while (currentNode) {
    if (currentNode.val > nodeValue) {
      if (!successor) {
        successor = currentNode.val;
      } else if (successor && successor > currentNode.val) {
        successor = currentNode.val;
      }
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  console.log('Successor of', nodeValue, 'is', successor);
}

findInorderSuccessor(bst1, 5); // 6
findInorderSuccessor(bst1, 3); // 4
findInorderSuccessor(bst1, 8); // 9

// Also find predecessor

function findInorderPredecessor(root, nodeValue) {
  let currentNode = root;
  let predecessor = null;

  while (currentNode) {
    if (currentNode.val >= nodeValue) {
      currentNode = currentNode.left;
    } else {
      // nodeValue is greater than currentNode
      // and we need predecessor to be highest value but less than given nodeValue
      if (!predecessor) {
        predecessor = currentNode.val;
      } else if (predecessor && predecessor < currentNode.val) {
        // IMPORTANT CONDITION
        predecessor = currentNode.val;
      }

      currentNode = currentNode.right;
    }
  }

  console.log('Predecessor of', nodeValue, 'is', predecessor);
}

findInorderPredecessor(bst1, 5); // 4
findInorderPredecessor(bst1, 3); // 2
findInorderPredecessor(bst1, 8); // 7
