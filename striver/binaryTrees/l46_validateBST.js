//  Given a BT, check if its BST or not

const bst1 = {
  val: 5,
  left: { val: 1 },
  right: { val: 6, left: { val: 4 }, right: { val: 8 } },
};

const defaultMinMax = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
};

function validateBst(root, minMax = defaultMinMax) {
  if (!root) return true;

  if (root.val <= minMax.min || root.val >= minMax.max) {
    return false;
  }

  // if (root.right && root.left) {
  return (
    validateBst(root.left, {
      min: minMax.min,
      max: root.val,
    }) &&
    validateBst(root.right, {
      min: root.val,
      max: minMax.max,
    })
  );
  // }

  // if (root.left) {
  //   return validateBst(root.left, {
  //     min: minMax.min,
  //     max: root.val,
  //   });
  // }

  // if (root.right) {
  //   return validateBst(root.right, {
  //     min: root.val,
  //     max: minMax.max,
  //   });
  // }

  // return true;
}

const result1 = validateBst(bst1); // false
console.log('result1: ', result1);

const bst2 = {
  val: 4,
  left: { val: 1 },
  right: { val: 6, left: { val: 5 }, right: { val: 8 } },
};

const result2 = validateBst(bst2); // true
console.log('result2: ', result2);
