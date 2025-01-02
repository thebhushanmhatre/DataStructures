// Serialize and De-serialize Binary Tree

// serialize: convert bt to string
// deserialize: convert string back to bt

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

const bt2 = {
  val: 1,
  left: { val: 2 },
  right: { val: 13, left: { val: 4 }, right: { val: 5 } },
};
//         1
//       /   \
//      2     13
//           /  \
//          4    5

function serialize(root) {
  let result = '';
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current == '#') {
      result += '#' + ',';
    } else {
      result += String(current.val) + ',';

      if (current.left) {
        queue.push(current.left);
      } else {
        queue.push('#');
      }

      if (current.right) {
        queue.push(current.right);
      } else {
        queue.push('#');
      }
    }
  }

  console.log('serialized result: ', result);
  return result;
}

function deserialize(string) {
  const nodes = string.split(',');

  let root = { val: nodes[0] };
  const queue = [root];
  let i = 1;

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (nodes[i] == '#') {
      // currentNode.left = null; // can be skipped as per my format
    } else {
      currentNode.left = {
        val: nodes[i],
      };
      queue.push(currentNode.left);
    }
    i++;

    if (nodes[i] == '#') {
      // currentNode.right = null; // can be skipped
    } else {
      currentNode.right = {
        val: nodes[i],
      };
      queue.push(currentNode.right);
    }
    i++;
  }

  console.log('\nTree created is', root);
  return root;
}

const str1 = serialize(bt1);
const recreated1 = deserialize(str1);

const str2 = serialize(bt2); // 1,2,13,#,#,4,5,#,#,#,#,
const recreated2 = deserialize(str2);
