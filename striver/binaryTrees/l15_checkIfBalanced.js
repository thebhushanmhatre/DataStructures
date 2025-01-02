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

function getHeight(root) {
  if (!root) return 0;
  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

  if (leftHeight == -1 || rightHeight == -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return 1 + Math.max(leftHeight, rightHeight);
}

function isBalanced(root) {
  let bth = getHeight(root);
  // console.log('Heigth of Balanced tree is ', bth)
  if (bth == -1) {
    return false;
  }
  return true;
}

console.log('Is BT balanced: ', isBalanced(testTree));
console.log('Is BT balanced: ', isBalanced(testTree2));
