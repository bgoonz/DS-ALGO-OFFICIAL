// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.

// OJ's undirected graph serialization:
// Nodes are labeled uniquely.

// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
// As an example, consider the serialized graph {0,1,2#1,2#2,2}.

// The graph has a total of three nodes, and therefore contains three parts as separated by #.

// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
// Second node is labeled as 1. Connect node 1 to node 2.
// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
// Visually, the graph looks like the following:

//        1
//       / \
//      /   \
//     0 --- 2
//          / \
//          \_/

// Pocket Gems Google Uber Facebook
// Hide Tags Depth-first Search Breadth-first Search Graph
// Hide Similar Problems (H) Copy List with Random Pointer

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
let cloneGraph = function (graph) {
  let visited = {};

  if (graph === null) {
    return graph;
  } else {
    return dfs(graph);
  }

  function dfs(node) {
    let newNode = visited[node.label]
      ? visited[node.label]
      : new UndirectedGraphNode(node.label);
    visited[node.label] = newNode;

    for (let i = 0; i < node.neighbors.length; i++) {
      let newNeighbor = visited[node.neighbors[i].label]
        ? visited[node.neighbors[i].label]
        : dfs(node.neighbors[i]);
      newNode.neighbors.push(newNeighbor);
    }
    return newNode;
  }
};

let cloneGraph = function (graph) {
  if (!graph) {
    return graph;
  } else {
    return dfs(graph, {});
  }

  function dfs(node, visited) {
    let newNode = (visited[node.label] =
      visited[node.label] || new UndirectedGraphNode(node.label));

    for (let i = 0; i < node.neighbors.length; i++) {
      let neighbor = node.neighbors[i];
      newNode.neighbors[i] = visited[neighbor.label] =
        visited[neighbor.label] || dfs(neighbor, visited);
    }

    return newNode;
  }
};
