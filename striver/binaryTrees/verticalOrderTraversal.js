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

console.log('vertical order: ', verticalOrder(testTree));
