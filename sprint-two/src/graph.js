// Instantiate a new graph
var Graph = function() {
  this.storage = [];

};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (node === this.storage[i]) {
      return true;
    } else {
      return false;
    }
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate through whole graph, which is storage array

  //if array[i] === node, remove; slice(array[i])
  var index;
  for (i = 0; i < this.storage.length; i++) {
    if (this.value === node.value) {
      index = i
    }
  }
  this.storage.splice(index, 1)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode.edge.push(toNode);
  toNode.edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//The time complexity for Graph() is O(1)
//The time complexity for addNode() is O(1)
//The time complexity for contains() is O(n)
//The time complexity for removeNode() is O(1)
//The time complexity for hasEdge() is O(1)


//The time complexity for addEdge() is O()
//The time complexity for removeEdge() is O()


//The time complexity for forEachNode() is O(n)
