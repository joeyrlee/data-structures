var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.count = 0;

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {

};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return this.count;
};