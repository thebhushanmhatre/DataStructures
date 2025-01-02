// Children Sum Property

//         40
//       /    \
//    10         20
//  /  \        /  \
// 2    5     30     10

// node: {val: { left: {...node}, right: {...node} } }

const bt1 = {
  val: 40,
  left: { val: 10, left: { val: 2 }, right: { val: 5 } },
  right: { val: 20, left: { val: 30 }, right: { val: 10 } },
};

const bt2 = {
  val: 40,
  left: { val: 10, left: { val: 2 }, right: { val: 5 } },
  right: { val: 20, left: { val: 30 }, right: { val: 40 } }, // last node 10 -> 40
};

// going down
// if sum of left.val and right.val < val (i.e. thir root), increase value of down nodes to same as root node
// if sum == root, do nothing (can be covered together in next condition)
// if sum >= root, increase root node to that sum

// coming back
// root = left + right

function applyChildrenSumProperty(root) {
  if (!root) return;

  // before going down
  let childSum = 0;
  if (root.left) {
    childSum += root.left.val;
  }
  if (root.right) {
    childSum += root.right.val;
  }

  if (childSum >= root.val) {
    root.val = childSum;
  } else {
    if (root.left) {
      root.left.val = root.val;
    }
    if (root.right) {
      root.right.val = root.val;
    }
  }

  // recursive call
  applyChildrenSumProperty(root.left);
  applyChildrenSumProperty(root.right);

  // after coming back
  let total = 0;
  if (root.left) {
    total += root.left.val;
  }
  if (root.right) {
    total += root.right.val;
  }
  if (root.left || root.right) {
    root.val = total;
  }
}

applyChildrenSumProperty(bt1);
console.log('new bt1 tree adhering childrenSum property: ', bt1);

applyChildrenSumProperty(bt2);
console.log('new bt2 tree adhering childrenSum property: ', bt2);
