var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.count = 0;
  newInstance.deleteCount = 0;

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var deqVal = this.storage[this.deleteCount];
  delete this.storage[this.deleteCount];
  this.deleteCount++;
  return deqVal;
};

queueMethods.size = function() {
  if (this.deleteCount > this.count) {
    return 0;
  }
  return this.count - this.deleteCount;
};