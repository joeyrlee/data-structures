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
  var result = false;
  var searchTree = function(node) {
    if (node.value === target) {
      result = true;
    }
    for (var i = 0; i < node.children.length; i++) {
      searchTree(node.children[i]);
    }
  };
  searchTree(this);

  return result;
};

treeMethods.traverse = function(callback) {
  callback(this.value);

  if (!this.children) { return; }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//The time complexity for Tree() is O(1)
//The time compexity for addChild() is O(1)
//The time complexity for contains is O(n)
