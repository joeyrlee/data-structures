var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.deleteCount = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

//push
queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

//shift
queueMethods.dequeue = function() {
  var deqVal = this.storage[this.deleteCount];
  delete this.storage[this.deleteCount];
  this.deleteCount++;
  return deqVal;
};

//length
queueMethods.size = function() {
  if (this.deleteCount > this.count) {
    return 0;
  }
  return this.count - this.deleteCount;
};


