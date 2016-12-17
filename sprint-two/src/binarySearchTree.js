var BinarySearchTree = function(value) {
  var someInstance = {};
  _.extend(someInstance, methods);

  someInstance.tree = {};

  someInstance.tree.value = value;
  someInstance.tree.left = {};
  someInstance.tree.right = {};
  return someInstance;

};

var methods = {};

methods.left = function(nodeVal) {
  return nodeVal.left
  // body...
};

methods.right = function(nodeVal) {
  // body...
};

methods.insert = function(nodeVal) {
  var nodeObj = {value: nodeVal, left: {}, right: {}};
  //recursive series of L/R evaluations to determine position
  var searchTree = function(node) {
    console.log(node)
    if (node.value === null) {
      node = nodeObj;

    }
    if (nodeVal < this.tree.value) {
      this.tree.left = nodeObj;
      nodeObj.right = this.tree.left;
      searchTree(this.tree.left);
    }
    if (nodeVal > this.tree.value) {
      this.tree.right = nodeObj;
      nodeObj.left = this.tree.right;
      searchTree(this.tree.right);
    }
  };
  return searchTree(this.tree);

};

methods.contains = function(nodeVal) {
  // body...
};

methods.depthFirstLog = function(callBack) {
  // body...
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
