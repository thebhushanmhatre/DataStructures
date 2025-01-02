const bst1 = {
  val: 8,
  left: { val: 5, left: { val: 4 }, right: { val: 7, left: { val: 6 } } },
  right: { val: 12, left: { val: 10 }, right: { val: 14, left: { val: 13 } } },
};

function search(root, key) {
  // console.log('\nFinding', key, '...');

  while (root && root.val != key) {
    // console.log('root.val: ', root.val);
    if (root.val > key) {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  if (root && root.val == key) {
    console.log(':) Node found', root);
  } else {
    console.log(':( Node not found');
  }
}

search(bst1, 10);
search(bst1, 11);

// ceil in a BST, given key

const bst2 = {
  val: 10,
  left: {
    val: 5,
    left: { val: 3, left: { val: 2 }, right: { val: 4 } },
    right: { val: 6, right: { val: 9 } },
  },
  right: { val: 13, left: { val: 11 }, right: { val: 14 } },
};

function findCeil(root, key) {
  console.log('Finding ceil ', key);
  let ceil = -1;

  while (root && root.val != key) {
    if (root.val > key) {
      // update ceil and move to left
      ceil = root.val;
      root = root.left;
    } else {
      root = root.right;
    }
  }

  if (root && root.val == key) {
    ceil = root.val;
  }

  if (ceil) {
    console.log('Ceiling in BT is ', ceil);
  } else {
    console.log('Ceil not found');
  }
}

findCeil(bst2, 8);
findCeil(bst2, 12);

// floor in BST

const bst3 = {
  val: 10,
  left: { val: 5, left: { val: 2 }, right: { val: 6 } },
  right: { val: 15 },
};

function findFloor(root, key) {
  console.log('Finding floor...');
  let floor = -1;
  while (root && root.val != key) {
    if (root.val > key) {
      root = root.left;
    } else {
      floor = root.val;
      root = root.right;
    }
  }

  if (root && root.val == floor) {
    floor = root.val;
  }

  console.log('Floor in BST is', floor);
}

findFloor(bst3, 7);
findFloor(bst3, 16);
