// Graph

// Representation
// 1. Adjacency matrix (Costly since its a matrix O(N^2))
// 2. Adjacency List (Space => O(2*E))

// We use adjacency list due to space complexity

// For weighted, we store pairs in list

// Adjacency Matrix implementation

class Graph_matrix {
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
}

// Adjacency List implementation

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
}
