// https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&themeRefresh=1

// // representation
let Node = {
  val: null,
  left: null,
  right: null,
};

// Example:
//     1
//  2     3
// 4 5   6  7

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

// Depth First search

// In order traversal (left root right)

function inorder(root) {
  // console.log('Calculating inorder for root=', root);
  if (root == null) return;

  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

function inorderVals(root, ans = []) {
  if (root == null) return;

  inorderVals(root.left, ans);
  ans.push(root.val);
  inorderVals(root.right, ans);
  return ans;
}

// Iterative - Non-recursive  ----  Difficult
function iterativeInorder(root) {
  let ans = [];
  let stack = [];
  let currentNode = root;
  // console.log({ root, currentNode, same: root === currentNode });
  while (true) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      if (stack.length <= 0) {
        // console.log({ root, currentNode, same: root === currentNode });
        return ans;
      }
      currentNode = stack.pop();
      ans.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }
}

// // Testing
// inorder(testTree);
// console.log('Return (recursive) inorder values: ', ...inorderVals(testTree));
console.log('iterative inorder values: ', ...iterativeInorder(testTree));
// console.log('testTree is still pointing to root?, testTree: ', testTree);
// // Yes still pointing to root when currentNode = root done in code
// Yes still pointing to root
// inorder(testTree);

// pre order traversal (root left right)
function preorder(root) {
  if (root == null) return;

  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

function preorderVals(root, ans = []) {
  if (root == null) return;

  ans.push(root.val);
  preorderVals(root.left, ans);
  preorderVals(root.right, ans);
  return ans;
}

function iterativePreorder(root) {
  let ans = [];
  let stack = [root];
  while (stack.length > 0) {
    let currentNode = stack.pop();
    ans.push(currentNode.val);
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
  return ans;
}

// // Testing
// console.log('iterative preorder: ', ...iterativePreorder(testTree));
// console.log('preorder: ', ...preorderVals(testTree));
// preorder(testTree);

// post order traversal (left right root)
function postorder(root) {
  if (root == null) return;

  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

function postorderVals(root, ans = []) {
  if (root == null) return;

  postorderVals(root.left, ans);
  postorderVals(root.right, ans);
  ans.push(root.val);
  return ans;
}

// Using two stacks
function iterativePostorder0(root) {
  let ans = [];
  let stack = [root];
  while (stack.length > 0) {
    let currentNode = stack.pop();
    ans.push(currentNode.val);
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  return ans.reverse();
}

// Using 1 stack - Complex
function iterativePostorder(root) {
  let ans = [];
  let stack = [];
  let currentNode = root;
  let temp;
  while (currentNode || stack.length > 0) {
    if (currentNode) {
      // Keep going left until its null
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      // Once its left node is null, add its right node to temp, And assign it as current Node to check it left
      // Once its right node is null, add it to answer and start while loop for to check
      temp = stack[stack.length - 1] ? stack[stack.length - 1].right : null;
      if (!temp) {
        temp = stack.pop();
        ans.push(temp.val);
        while (stack.length > 0 && temp == stack[stack.length - 1].right) {
          // Traverse up the tree until we find a node that is a left child of its parent
          temp = stack.pop();
          ans.push(temp.val);
        }
      } else {
        currentNode = temp;
      }
    }
  }
  return ans;

  // AI explanation:  It starts by pushing all the left nodes into a stack,
  // then pops them and stores their values in the answer array.
  // It then checks to see if the popped node has a right child and if so,
  // sets the current node to the right child.
  // If not, it pops the next node and stores its value in the answer array if it is a left child of its parent.
  // It continues to traverse the tree until all nodes have been visited.
}

// // Testing

let testTree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: {
          val: 5,
          left: null,
          right: {
            val: 6,
            left: null,
            right: null,
          },
        },
      },
    },
    right: null,
  },
  right: {
    val: 7,
    left: {
      val: 8,
      left: null,
      right: null,
    },
    right: null,
  },
};
// console.log('iterative postorder: ', ...iterativePostorder0(testTree2), ' (using two stacks)');
// console.log('iterative postorder: ', ...iterativePostorder(testTree2));
// console.log('iterative postorder: ', ...iterativePostorder(testTree1));
// console.log('postorder: ', ...postorderVals(testTree));
// postorder(testTree);

// Breadth First Traversal (Level wise)

// [ 1 ] [ 2, 3 ] [ 4, 5, 6, 7 ]

// bfs : 1 2 3 4 5 6 7

function bfs(root) {
  let queue = [root];
  let ans = [];
  // while (queue.length > 0) { // No idea what I was doing here apart from overcomplicating it
  //   let arr = [...queue];
  //   queue = [];
  //   let ansArr = [];
  //   for (currentNode of arr) {
  //     ansArr.push(currentNode.val);
  //     if (currentNode.left) {
  //       queue.push(currentNode.left);
  //     }
  //     if (currentNode.right) {
  //       queue.push(currentNode.right);
  //     }
  //   }
  //   ans.push(ansArr);
  // }
  while (queue.length > 0) {
    let currentNode = queue.shift();
    ans.push(currentNode.val);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return ans;
}

function print_bfs(root) {
  let ans = bfs(root);
  console.log('bfs: ', ...ans);
}

// print_bfs(testTree);
