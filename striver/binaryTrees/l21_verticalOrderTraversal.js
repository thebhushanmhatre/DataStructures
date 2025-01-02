//       1
//    2        3
// 4     10 9   10
//    5
//        6

// Vertical order
// 4
// 2 5
// 1 9 10 6
// 3
// 10
// => [[4], [2,5], [1,9,10,6], [3], [10]]

let testTree = {
  val: 1,
  left: {
    val: 2,
    left: {
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
    right: {
      val: 10,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 10,
      left: null,
      right: null,
    },
  },
};

function getCoOrdinates(node, positions, nodePositions) {
  if (!node) {
    return;
  }
  let { x, y } = positions;
  if (!nodePositions[x]) {
    nodePositions[x] = {};
  }
  if (!nodePositions[x][y]) {
    nodePositions[x][y] = [];
  }
  nodePositions[x][y].push(node.val);
  if (node.left) {
    getCoOrdinates(node.left, { x: x - 1, y: y - 1 }, nodePositions);
  }
  if (node.right) {
    getCoOrdinates(node.right, { x: x + 1, y: y - 1 }, nodePositions);
  }
}

function formatData(data) {
  let result = [];
  let xKeys = Object.keys(data)
    .map((item) => Number(item))
    .sort((a, b) => a - b);
  for (let xKey of xKeys) {
    let yKeys = Object.keys(data[xKey])
      .map((item) => Number(item))
      .sort((a, b) => b - a);
    let finalArr = [];
    for (let ykey of yKeys) {
      finalArr = [...finalArr, ...data[xKey][ykey].sort((a, b) => a - b)];
    }
    result.push(finalArr);
  }
  return result;
}

function verticalOrder(root) {
  let nodePositions = {}; // (vertical - y, horizontal - x, value)
  getCoOrdinates(root, { x: 0, y: 0 }, nodePositions);
  // Formatting into the required format
  return formatData(nodePositions);
}

// console.log('vertical order: ', verticalOrder(testTree));

// coding after long time
function getVerticalOrder(root) {
  // map: {x: y: [...nodes]} - store all nodes
  // queue: <nodeValue, x, y>[] - for iteration
  const nodesMap = {};
  let nodeQueue = [];
  nodeQueue.push([root, 0, 0]);
  let maxLevel = 0,
    minLevel = 0;

  while (nodeQueue.length != 0) {
    let nodeInfo = nodeQueue.shift();

    if (!nodesMap[nodeInfo[1]]) nodesMap[nodeInfo[1]] = {};
    if (!nodesMap[nodeInfo[1]][nodeInfo[2]])
      nodesMap[nodeInfo[1]][nodeInfo[2]] = [];

    nodesMap[nodeInfo[1]][nodeInfo[2]].push(nodeInfo[0].val);

    if (nodeInfo[0].left) {
      nodeQueue.push([nodeInfo[0].left, nodeInfo[1] - 1, nodeInfo[2] + 1]);
      if (nodeInfo[1] - 1 < minLevel) {
        minLevel = nodeInfo[1] - 1;
      }
    }
    if (nodeInfo[0].right) {
      nodeQueue.push([nodeInfo[0].right, nodeInfo[1] + 1, nodeInfo[2] + 1]);
      if (nodeInfo[1] + 1 > maxLevel) {
        maxLevel = nodeInfo[1] + 1;
      }
    }
  }

  const result = [];
  for (let i = 0; i <= maxLevel - minLevel; i++) {
    result[i] = [];
    for (const j in nodesMap[minLevel + i]) {
      result[i] = [...result[i], ...nodesMap[minLevel + i][j]];
    }
    result[i] = result[i].sort((a, b) => a - b);
  }

  return result;
}

console.log('get vertical order: ', getVerticalOrder(testTree));
