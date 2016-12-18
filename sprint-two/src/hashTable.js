

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
  var bucket = this._storage.get(index) || [];
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
  //find the index containing the bucket containing k
  var index = getIndexBelowMaxForKey(k, this._limit);

  //search the bucket for k
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  //find the index containing the bucket containing k
  var index = getIndexBelowMaxForKey(k, this._limit);
  //search bucket for k
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      //remove tuple containing k at tuple[0]
      bucket.splice(i, 1);
    }
  }
  //once removed from bucket, put bucket back in storage
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//The time complexity of insert is O(1) on average and then 0(n) as worst case scenarios
//The time complexity of retrieve is O(1) on average and then O(n) as worst case scenarios
//The time complexity of remove is O(1) on average and then O(n) as worst case scenarios

