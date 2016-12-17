// Instantiate a new graph
var Graph = function() {
  this.storage = [];

};

//Find a given node's index in storage
Graph.prototype.findNodeIndex = function(value) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === value) {
      return i;
    }
  }
  return -1;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // console.log('this.storage: ', this.storage)
  this.storage.push({'value': value, edges: []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for (var i = 0; i < this.storage.length; i++) {
    if (value === this.storage[i].value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  //save the node index that has value
  //for every value in the edges array,
  //you must:
    //1. delete toNode's value from the edges array for fromNode
    //2. delete fromNode's value in the edges array for toNode

  var index;
  for (var i = 0; i < this.storage.length; i++) {
    if (value === this.storage[i].value) {
      index = i;
    }
  }

  var savedData = this.storage.splice(index, 1); //returns {val:5, edges:[1,2,23]}
  // console.log('del value: ', savedData);
  console.log('value: ', value)
  // _.each(savedData[0].edges, function(edge) {
  //edgeArray = [edge1,edge2,edge3]
    _.each(this.storage, function(node) {
      console.log('node: ', node)
      if (node.edges.indexOf(value) !== -1)
        node.edges.splice(node.edges.indexOf(value), 1)
    });
  // });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // var fromIndex = this.findNodeIndex(fromNode);
  // var toIndex = this.findNodeIndex(toNode);

  // return (this.storage[fromIndex].edges.includes(toNode)) &&
  //        (this.storage[toIndex].edges.includes(fromNode));

  //this.storage = [{val:1,e:[]}, {val:1,e:[]}, {val:1,e:[]}]
  var index;
  _.each(this.storage, function(node, i) {
    if (node.value === fromNode) {
      index = i;
    }
  });

  return this.storage[index].edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex = this.findNodeIndex(fromNode);
  var toIndex = this.findNodeIndex(toNode);

  this.storage[fromIndex].edges.push(toNode);
  this.storage[toIndex].edges.push(fromNode);

  // this.storage.indexOf(this.storage.value.fromNode).edges.push(toNode);
  // this.storage.indexOf(this.storage.value.toNode).edges.push(fromNode);


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this.findNodeIndex(fromNode);
  var toIndex = this.findNodeIndex(toNode);

  this.storage[fromIndex].edges.splice(fromIndex, 1);
  this.storage[toIndex].edges.splice(toIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callBack) {
  _.each(this.storage, function(node) {
    callBack(node.value);
  })
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
