//       1
//   2      3
// 4  5    6  7

// zigzag: 1  3 2  4 5 6 7

let testTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

function zigzag(root) {
  let result = [];
  let nodes = [root];
  let leftToRight = true;
  while (nodes.length > 0) {
    let currentLevelNodes = [...nodes];
    nodes = [];
    for (let currentNode of currentLevelNodes) {
      if (currentNode.left) {
        nodes.push(currentNode.left);
      }
      if (currentNode.right) {
        nodes.push(currentNode.right);
      }
    }
    if (!leftToRight) {
      currentLevelNodes.reverse();
    }
    for (let node of currentLevelNodes) {
      result.push(node.val);
    }
    leftToRight = !leftToRight;
  }
  return result;
}

console.log('zig zag traversal: ', zigzag(testTree));
