var BinarySearchTree = function(value) {
  var someInstance = {};
  _.extend(someInstance, methods);

  // someInstance.tree = {};

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  return someInstance;

};

var methods = {};

methods.insert = function(nodeVal) {
  //recursive series of L/R evaluations to determine position
  var searchTree = function(node) {
    //make a node variable with properties of a tree
    var nodeObj = {value: nodeVal, left: null, right: null};
    //checks left node only when null
    if (nodeVal < node.value && node.left === null) {
      node.left = nodeObj;
    //checks right node only when null
    } else if (nodeVal > node.value && node.right === null) {
      node.right = nodeObj;
    //restart search from left node
    } else if (nodeVal < node.value && node.left !== null) {
      searchTree(node.left);
    //restart search from right node
    } else if (nodeVal > node.value && node.right !== null) {
      searchTree(node.right);
    }
  };
  searchTree(this);

};

methods.contains = function(target) {
  //recursive series of L/R evaluations to determine position
  var result = false;
  var searchTree = function(node) {
    //checks left node only when null
    if (target === node.value) {
      result = true;
    } else if (node.right !== null || node.left !== null) {
      var children = [];
      if (node.right !== null) {
        children.push(node.right);
      }
      if (node.left !== null) {
        children.push(node.left);
      }
      //for each child node, return the results of searchTree(child)
      for (var i = 0; i < children.length; i++) {
        searchTree(children[i]);
      }
    }
    return result;
  };
  return searchTree(this);
  
};

methods.depthFirstLog = function(callBack) {
  // body...
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
