// Leetcode 1971: Find if Path Exists in Graph

// Using Adjacency Matrix and DFS

function dfsAM(
  graph: boolean[][],
  src: number,
  dest: number,
  visited: boolean[]
) {
  if (src == dest) return true;
  visited[src] = true;

  for (let i = 0; i < visited.length; i++) {
    if (graph[src][i] && !visited[i]) {
      if (dfsAM(graph, i, dest, visited)) return true;
    }
  }

  return false;
}

function validPathUsingDFS(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  // const graph = new Array(n).fill(new Array(n).fill(false)); // adj matrix - here array is referenced, DAMN!!
  const graph = Array.from({ length: n }, () => Array(n).fill(false)); // adj matrix

  for (let row of edges) {
    let [start, end] = row;
    graph[start][end] = true;
    graph[end][start] = true; // bi-directional
  }

  const visited = new Array(n).fill(false);

  return dfsAM(graph, source, destination, visited);
}

// Using Adjacency Matrix and BFS

function validPathUsingBFS(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const graph = Array.from({ length: n }, () => new Array(n).fill(false)); // empty ajacency matrix
  for (let [start, end] of edges) {
    graph[start][end] = true;
    graph[end][start] = true;
  }

  const visited = new Array(n).fill(false);

  // bfs
  const queue: number[] = [source];
  visited[source] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift() as number;

    if (currentNode == destination) return true;

    graph[currentNode].map((node, nodeIndex) => {
      if (!visited[nodeIndex] && node) {
        queue.push(Number(nodeIndex));
        visited[nodeIndex] = true;
      }
    });
  }

  return false;
}

// Using Adjacency List and DFS

// Note Adjacency List will be map of lists
// But when nodes are like starting from 0 to n, we can use array of array where row is like node (key)

function validPathUsingDFS_AL(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (let [start, end] of edges) {
    graph[start].push(end);
    graph[end].push(start);
  }
  const visited: boolean[] = new Array(n).fill(false);

  return dfs(graph, source, destination, visited);
}

function dfs(
  graph: number[][],
  source: number,
  destination: number,
  visited: boolean[]
): boolean {
  if (source == destination) return true;

  visited[source] = true;

  for (let node of graph[source]) {
    if (!visited[node]) {
      visited[node] = true;
      if (dfs(graph, node, destination, visited)) return true; // Dangerous - Do not just return from here
    }
  }

  return false;
}

// Using Adjacency List and BFS

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const visited: boolean[] = new Array(n).fill(false);

  for (let [start, end] of edges) {
    graph[start].push(end);
    graph[end].push(start);
  }

  let queue: number[] = [source];
  visited[source] = true;

  while (queue.length > 0) {
    let currentNode = queue.shift() as number;

    if (currentNode == destination) return true;

    graph[currentNode].map((node) => {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = true;
      }
    });
  }

  return false;
}
