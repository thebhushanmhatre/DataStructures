// Using Adjacency Matrix
class Graph {
  constructor(numOfNodes) {
    this.matrix = [];
    for (let i = 0; i < numOfNodes; i++) {
      this.matrix.push(new Array(numOfNodes).fill(0));
    }
  }

  addEdge(fromNode, toNode) {
    this.matrix[fromNode][toNode] = 1;
    this.matrix[toNode][fromNode] = 1;
  }

  removeEdge(fromNode, toNode) {
    this.matrix[fromNode][toNode] = 0;
    this.matrix[toNode][fromNode] = 0;
  }

  isEdge(fromNode, toNode) {
    return this.matrix[fromNode][toNode] === 1;
  }

  // Bread First Search: Cover one level at a time
  bfs(node) {
    // const result = [];
    // let visited = new Set();
    // let queue = [node];
    // visited.add(node);
    // while (queue.length > 0) {
    //   const currentNode = queue.shift();
    //   result.push(currentNode);
    //   this.list[currentNode].forEach((node) => {
    //     if (!visited.has(node)) {
    //       visited.add(node);
    //       queue.push(node);
    //     }
    //   });
    // }
    // console.log('BFS: ', result.join(','));
  }

  // Depth First Search: Cover any one's depth before moving to other
  dfs(node) {
    // const result = [];
    // let visited = new Set();
    // let stack = [node];
    // visited.add(node);
    // while (stack.length > 0) {
    //   const currentNode = stack.pop();
    //   result.push(currentNode);
    //   this.list[currentNode].forEach((node) => {
    //     if (!visited.has(node)) {
    //       visited.add(node);
    //       stack.push(node);
    //     }
    //   });
    // }
    // console.log('DFS: ', result.join(','));
  }

  print() {
    console.log('Graph: ', this.matrix);
  }
}

// Note that we are working on unweighted graphs here
// i.e. edges don't have weights

let graphOne = new Graph();

graphOne.addEdge(0, 1);
graphOne.addEdge(0, 2);
graphOne.addEdge(0, 3);
graphOne.addEdge(1, 4);
graphOne.addEdge(1, 7);
graphOne.addEdge(2, 5);
graphOne.addEdge(3, 6);

graphOne.print();
graphOne.bfs(0);
graphOne.dfs(0);

// // console results

// Graph:  {
//   '0': [ 1, 2, 3 ],
//   '1': [ 0, 4, 7 ],
//   '2': [ 0, 5 ],
//   '3': [ 0, 6 ],
//   '4': [ 1 ],
//   '5': [ 2 ],
//   '6': [ 3 ],
//   '7': [ 1 ]
// }
// BFS:  0,1,2,3,4,7,5,6
// DFS:  0,3,6,2,5,1,7,4
