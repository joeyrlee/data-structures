var BinarySearchTree = function(value) {
  var someInstance = {};
  _.extend(someInstance, methods);
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
  function searchTree(node) {
    if (nodeVal < node.value) {
      // searchTree(node.left);
    } if (nodeVal > node.value) {
      // searchTree(node.right);
    } 
  }
  // searchTree(this.storage)
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
