var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  // newTree.children = null;  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
var nodeCount = 1;

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  nodeCount++;
};

treeMethods.contains = function(target) {
  var searchTree = function(node) {
    if (node.value === target) {
      return true;
    } else if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        return searchTree(node.children[i]);
      }
    }
    return false;
  };
  return searchTree(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//The time complexity for 