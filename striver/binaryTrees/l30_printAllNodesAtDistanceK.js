// // Print all the nodes at a distance K in Binary tree

// const bt1 = {
//   val: 40,
//   left: { val: 10, left: { val: 2 }, right: { val: 5 } },
//   right: { val: 20, left: { val: 30 }, right: { val: 10 } },
// };

// //         40
// //       /    \
// //    10         20
// //  /  \        /  \
// // 2    5     30     10

// function printAllNodesAtDistance(root, k) {
//   const ans = [];
//   traverseAllNodesAtDistance(root, k, ans);
//   console.log('All nodes are at distance', k, 'are:', ans.join(', '));
// }

// function traverseAllNodesAtDistance(root, k, ans) {
//   if (!root) return;
//   if (k == 0) {
//     if (!ans.includes(root.val)) {
//       ans.push(root.val);
//     }
//     return;
//   }
//   if (k > 0) {
//     traverseAllNodesAtDistance(root.left, k - 1, ans);
//     traverseAllNodesAtDistance(root.right, k - 1, ans);
//   }
// }

// printAllNodesAtDistance(bt1, 1);
// printAllNodesAtDistance(bt1, 2);
// printAllNodesAtDistance(bt1, 3);

// // Given a random node, Print all the nodes at a distance K in Binary tree

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

// visitedNParentMap : { nodeValue: {visted, parentNodeValue} }

function printAllNodesAtDistanceFromTargetNode(root, target, k) {
  const ans = [];
  const visitedNParentMap = {};
  let targetRef = {
    val: null,
  };
  intializeMap(root, visitedNParentMap, target, targetRef);

  traverseAllNodesAtDistanceFromTarget(
    targetRef.val,
    k,
    ans,
    visitedNParentMap
  );
  console.log('All nodes are at distance', k, 'are:', ans.join(', '));
}

function intializeMap(root, nodeMap, target, targetRef) {
  if (!root) return;
  if (!nodeMap[root.val]) {
    nodeMap[root.val] = {
      visited: false,
      parent: null,
    };
  }

  if (root.left) {
    nodeMap[root.left.val] = {
      visited: false,
      parent: root,
    };
    intializeMap(root.left, nodeMap, target, targetRef);
  }

  if (root.right) {
    nodeMap[root.right.val] = {
      visited: false,
      parent: root,
    };
    intializeMap(root.right, nodeMap, target, targetRef);
  }

  if (!targetRef.val && root.val == target) {
    targetRef.val = root;
  }

  return;
}

function traverseAllNodesAtDistanceFromTarget(root, k, ans, nodeMap) {
  if (!root) return;

  if (root && k == 0 && !nodeMap[root.val].visited) {
    ans.push(root.val);
    nodeMap[root.val].visited = true;
    return;
  }

  nodeMap[root.val].visited = true;

  let parentNode = nodeMap[root.val].parent;
  if (parentNode && !nodeMap[parentNode.val].visited) {
    traverseAllNodesAtDistanceFromTarget(parentNode, k - 1, ans, nodeMap);
  }

  if (root.left && !nodeMap[root.left.val].visited) {
    traverseAllNodesAtDistanceFromTarget(root.left, k - 1, ans, nodeMap);
  }

  if (root.right && !nodeMap[root.right.val].visited) {
    traverseAllNodesAtDistanceFromTarget(root.right, k - 1, ans, nodeMap);
  }
}

printAllNodesAtDistanceFromTargetNode(bt1, 20, 1);
printAllNodesAtDistanceFromTargetNode(bt1, 20, 2);
printAllNodesAtDistanceFromTargetNode(bt1, 20, 3);
