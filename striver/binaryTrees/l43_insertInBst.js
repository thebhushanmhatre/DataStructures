// Insert a given node in Bst

let bst = {
  val: 4,
  left: { val: 2, left: { val: 1 }, right: { val: 3 } },
  right: { val: 7 },
};

function insertInBst(root, nodeValue) {
  const parentRoot = root;
  while (root) {
    if (root.val < nodeValue) {
      if (root.right) {
        root = root.right;
      } else {
        root.right = { val: nodeValue };
        console.log('Inserted the node at node', root);
        break;
      }
    } else {
      if (root.left) {
        root = root.left;
      } else {
        root.left = {
          val: nodeValue,
        };
        console.log('Inserted the node at', root);
        break;
      }
    }
  }

  console.log('Returning root', parentRoot);
}

insertInBst(bst, 5);
