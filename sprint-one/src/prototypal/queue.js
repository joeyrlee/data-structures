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

};

queueMethods.dequeue = function() {

};

queueMethods.size = function() {
  return this.count;
};