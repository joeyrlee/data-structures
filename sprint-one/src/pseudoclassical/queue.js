var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.count = 0;
  this.deleteCount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var delVal = this.storage[this.deleteCount];
  delete this.storage[this.deleteCount]
  this.deleteCount++;
  return delVal;
};

Queue.prototype.size = function() {
  if (this.deleteCount > this.count) {
    return 0;
  }
  return this.count - this.deleteCount;
};




