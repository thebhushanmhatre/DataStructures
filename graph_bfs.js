// Represented in 3 ways:
// 1). Adjacency List (Best Space & Time Complexity)
// A - B - C
// Undirected = {
//   NodeA: ["NodeB"],
//   NodeB: ["NodeA", "NodeC"],
//   NodeC: ["NodeB"]
// }
// OR
// * UndirectedGraph = {
//   [1],
//   [0, 2], // 1 connected to 0, 2
//   [1]
// }

// 2). Adjacency Matrix
// Undirected = {
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0]
// }
// A <- B <- C
// Directed = {
//   [0, 0, 0],
//   [1, 0, 0],
//   [0, 1, 0]
// }

// 3). Incidence Matrix
// Rows: Nodes
// Columns: Edges

// BFS: Breadth First Saerch

function myBfs(graph, root){
  var nodesLen = {}
  graph.map((array, index)=>{
    nodesLen[index] = -1
  })
  nodesLen[root] = 0
  var queue = [root]

  while(queue.length > 0){
    let currentNode = queue.shift()
    let currentArray = graph[currentNode]
    let neighboursList = []
    let neighbourIndex = currentArray.indexOf(1)
    while(neighbourIndex !== -1){
      neighboursList.push(neighbourIndex)
      neighbourIndex = currentArray.indexOf(1, neighbourIndex+1)
    }
    neighboursList.map((node)=>{
      if(nodesLen[node] === -1){
        nodesLen[node] = nodesLen[currentNode] + 1
        queue.push(node)
      }
    })
  }
  return nodesLen
}

let directed_graph_example = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]

console.log(myBfs(directed_graph_example, 1))