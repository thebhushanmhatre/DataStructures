// Given an adjacency list representation of a directed graph with ‘n’ vertices and ‘m’ edges. Your task is to return a list consisting of Breadth-First Traversal (BFS) starting from vertex 0.

// In this traversal, one can move from vertex 'u' to vertex 'v' only if there is an edge from 'u' to 'v'. The BFS traversal should include all nodes directly or indirectly connected to vertex 0.

// Note:
// The traversal should proceed from left to right according to the input adjacency list.

// Example:
// Adjacency list: { {1,2,3},{4}, {5}, {},{},{}}

// The interpretation of this adjacency list is as follows:
// Vertex 0 has directed edges towards vertices 1, 2, and 3.
// Vertex 1 has a directed edge towards vertex 4.
// Vertex 2 has a directed edge towards vertex 5.
// Vertices 3, 4, and 5 have no outgoing edges.

// We can also see this in the diagram below.

// BFS traversal: 0 1 2 3 4 5

// Sample Input 1:
// 8 7
// 0 1
// 0 2
// 0 3
// 1 4
// 1 7
// 2 5
// 3 6
// Sample Output 1:
// 0 1 2 3 4 7 5 6

// Sample Input 2:
// 4 4
// 0 1
// 0 2
// 1 2
// 0 3
// Sample Output 2:
// 0 1 2 3

// Using Adjacency List
class Graph {
  constructor() {
    this.list = {};
  }

  addNode(node) {
    this.list[node] = [];
  }

  addEdge(fromNode, toNode) {
    if (!this.list[fromNode]) {
      this.addNode(fromNode);
    }
    if (!this.list[toNode]) {
      this.addNode(toNode);
    }
    this.list[fromNode].push(toNode);
    this.list[toNode].push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    this.list[fromNode] = this.list[fromNode].filter((node) => node != toNode);
    this.list[toNode] = this.list[toNode].filter((node) => node != fromNode);
  }

  isEdge(fromNode, toNode) {
    return this.list[fromNode].includes(toNode);
  }

  // Bread First Search: Cover one level at a time
  bfs(node) {
    const result = [];
    let visited = new Set();
    let queue = [node];
    visited.add(node);
    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode);
      this.list[currentNode].forEach((node) => {
        if (!visited.has(node)) {
          visited.add(node);
          queue.push(node);
        }
      });
    }
    console.log('BFS: ', result.join(','));
  }

  // Depth First Search: Cover any one's depth before moving to other
  dfs(node) {
    const result = [];
    let visited = new Set();
    let stack = [node];
    visited.add(node);
    while (stack.length > 0) {
      const currentNode = stack.pop();
      result.push(currentNode);
      this.list[currentNode].forEach((node) => {
        if (!visited.has(node)) {
          visited.add(node);
          stack.push(node);
        }
      });
    }
    console.log('DFS: ', result.join(','));
  }

  print() {
    console.log('Graph: ', this.list);
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
