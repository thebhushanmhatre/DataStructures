const bst1 = {
  val: 7,
  left: {
    val: 3,
    left: { val: 2, left: { val: 1 } },
    right: { val: 6, left: { val: 5, left: { val: 4 } } },
  },
  right: { val: 10, left: { val: 9, left: { val: 8 } }, right: { val: 11 } },
};

//          7
//    3          10
//  2    6     9     11
// 1    5     8
//     4

// Find any two integers in the bst such that their sum is k as given

function BSTIterator(current, reverse = false) {
  this.stack = [];
  this.reverse = reverse;
  while (current) {
    this.stack.push(current);
    if (this.reverse) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
}

BSTIterator.prototype.next = function () {
  let result = this.stack.pop();
  let current;
  if (this.reverse) {
    // go left then right all the way
    current = result.left;
  } else {
    // go right then left all the way
    current = result.right;
  }

  while (current) {
    this.stack.push(current);

    if (this.reverse) {
      // right all the way
      current = current.right;
    } else {
      // left all the way
      current = current.left;
    }
  }

  return result.val;
};

BSTIterator.prototype.hasNext = () => {
  return this.stack.length > 0;
};

function findTwoSum(root, k) {
  const start = new BSTIterator(root);
  const end = new BSTIterator(root, true);

  let sum = 0;

  while (sum != k) {
    let firstNum = start.next();
    let lastNum = end.next();

    sum = firstNum + lastNum;

    if (sum === k) {
      return [firstNum, lastNum];
    } else if (sum > k) {
      lastNum = end.next();
    } else {
      firstNum = start.next();
    }
  }
}

console.log('Values with sum 16 are ', findTwoSum(bst1, 16));

console.log('Values with sum 13 are ', findTwoSum(bst1, 13));
