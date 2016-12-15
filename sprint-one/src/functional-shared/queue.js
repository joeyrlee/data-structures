var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

//push
queueMethods.enqueue = function(value) {

};

//shift
queueMethods.dequeue = function() {

};

//length
queueMethods.size = function() {
  return this.count;
};


