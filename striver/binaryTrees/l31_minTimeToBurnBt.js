// minimum time to burn bt frmo any given node

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

function initialize(root, startNodeValue, parentVisitedNodeMap) {
  let startNode;
  parentVisitedNodeMap[root.val] = {
    visted: 0,
    parent: null,
  };

  let queue = [root];
  while (queue.length > 0) {
    const currentNodes = [...queue];
    queue = [];

    for (let i = 0; i < currentNodes.length; i++) {
      const currentNode = currentNodes[i];

      if (currentNode.val == startNodeValue) {
        startNode = currentNode;
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
        parentVisitedNodeMap[currentNode.left.val] = {
          parent: currentNode,
          visited: 0,
        };
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
        parentVisitedNodeMap[currentNode.right.val] = {
          parent: currentNode,
          visited: 0,
        };
      }
    }
  }

  return startNode;
}

function burnNodes(startNode, parentVisitedNodeMap) {
  let steps = 0;
  let queue = [startNode];

  while (queue.length > 0) {
    const currentNodes = [...queue];
    queue = [];
    // console.log('steps', steps);
    let flag = 0; // denoting burn

    for (let i = 0; i < currentNodes.length; i++) {
      const currentNode = currentNodes[i];

      // console.log({
      //   currentNode_parent: currentNode?.parent || 'missing',
      //   currentNode,
      //   currentNodeVal: currentNode?.val || 'mising',
      //   parentVisitedNodeMap,
      // });

      // add unvisted parent in queue
      if (
        currentNode &&
        parentVisitedNodeMap[currentNode.val].parent &&
        !parentVisitedNodeMap[currentNode.val].visited
      ) {
        flag = 1;
        queue.push(parentVisitedNodeMap[currentNode.val].parent);
        parentVisitedNodeMap[currentNode.val].visited = 1;
      }

      // add left in queue
      if (
        currentNode.left &&
        !parentVisitedNodeMap[currentNode.left.val].visited
      ) {
        flag = 1;
        queue.push(currentNode.left);
        parentVisitedNodeMap[currentNode.left.val].visited = 1;
      }

      // add right in queue
      if (
        currentNode.right &&
        !parentVisitedNodeMap[currentNode.right.val].visited
      ) {
        flag = 1;
        queue.push(currentNode.right);
        parentVisitedNodeMap[currentNode.right.val].visited = 1;
      }
    }

    console.log('flag', flag);
    if (flag) steps++;
  }

  return steps;
}

function burnBt(root, startNodeValue) {
  const parentVisitedNodeMap = {};
  const startNode = initialize(root, startNodeValue, parentVisitedNodeMap);

  const steps = burnNodes(startNode, parentVisitedNodeMap);
  console.log(
    'Steps or say time required to burn nodes from node',
    startNodeValue,
    'is',
    steps
  );
}

burnBt(bt1, 10); // 3 steps
burnBt(bt1, 5); // 4 steps
