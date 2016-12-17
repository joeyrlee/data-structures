var BinarySearchTree = function(value) {
  var someInstance = {};
  _.extend(someInstance, methods);

  someInstance.tree = {};

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  return someInstance;

};

var methods = {};

methods.left = function(nodeVal) {
  // body...
};

methods.right = function(nodeVal) {
  // body...
};

methods.insert = function(nodeVal) {
  //recursive series of L/R evaluations to determine position
  if (nodeVal < this.tree.value) {
    this.tree.left = nodeVal;
  }
  // var searchTree = function(node) {
  //   if (node.value === null) {
  //     node.value = nodeVal;
  //   }
  //   // if (nodeVal < node.value) {
  //   //   // searchTree(node.left);
  //   // } if (nodeVal > node.value) {
  //   //   // searchTree(node.right);
  //   // } 
  // };
  // return searchTree(someInstance)
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
