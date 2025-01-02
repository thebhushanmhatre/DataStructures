// Morris Traversal
// Method to get inorder/preorder in just 0(1) space but same as normal O(N) time

const bt1 = {
  val: 40,
  left: { val: 10, left: { val: 2 }, right: { val: 5 } },
  right: { val: 20, left: { val: 30 }, right: { val: 15 } },
};

//         40
//       /    \
//    10         20
//  /  \        /  \
// 2    5     30     15

// inorder: 2 10 5 40 30 20 15

function morrisTraversal(root) {
  const inorder = [];
  const preorder = [];
  let current = root;

  while (current) {
    // console.log('\n\n===current: ', current);
    if (!current.left) {
      // console.log('left doesnt exists: ');
      // left doesn't exists
      inorder.push(current.val); // print root
      preorder.push(current.val);
      current = current.right; // go right
    } else {
      // left exists
      // console.log('left exists: ');
      let prev = current.left; // to traverse further

      // go to the rightmost node on left subtree which is not pointing to current
      while (prev.right && prev.right != current) {
        // console.log('right exists, prev: ', prev);

        prev = prev.right;
      }
      // console.log('out of while, prev: ', prev);

      if (!prev.right) {
        // console.log('right doesnt exists, prev: ', prev);
        prev.right = current; // creating thread back to (sub)tree root
        preorder.push(current.val);
        current = current.left;
      } else {
        // console.log('right exists, prev: ', prev);
        delete prev.right;
        inorder.push(current.val); // print left, right
        current = current.right;
      }
      // console.log('===current: ', current);
    }
  }

  console.log('Using morris traversal, Inorder: ', inorder);
  console.log('Using morris traversal, preorder: ', preorder);
  return inorder;
}

morrisTraversal(bt1);
