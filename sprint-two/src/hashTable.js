

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //limitedarray is our storage
  //LA[index] = [key, value]  
  // debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(typeof index)
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(k)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


