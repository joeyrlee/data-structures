

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //limitedarray is our storage
  //LA[index] = [key, value]  
  // debugger;


  //invoke hash function to find which bucket to drop pair into
  var index = getIndexBelowMaxForKey(k, this._limit);
  //go to bucket or make a new [] bucket at retrieved index
  var bucket = this._storage[index] || [];
  //search bucket to see if pair already exists
    //if key is found in bucket, deposit value (overwrites if already present)
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      var oldValue = bucket[i][1];
      bucket[i][1] = v;
      return oldValue;
    }
  }
  //if key isn't present, create a new tuple in bucket
  bucket.push([k, v]);  

  //return updated bucket into storage
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  //invoke hash function to find which bucket to drop pair into
  var index = getIndexBelowMaxForKey(k, this._limit);







  
  return this._storage.get(index)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


