var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};

  return set;
};

//methods
var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = this.storage[item] + 1 || 1;
};

setPrototype.contains = function(item) {
  return this.storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
