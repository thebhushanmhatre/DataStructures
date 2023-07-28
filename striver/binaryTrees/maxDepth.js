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

function maxDepth(root) {
  if (!root) {
    return 0;
  }
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

console.log('Max Depth of binary tree: ', maxDepth(testTree));
console.log('Max Depth of binary tree (2): ', maxDepth(testTree2));
