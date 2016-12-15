var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // debugger;
  this.storage[this.count] = value;
  this.count++;
  // console.log('pushing size: ', size)
};

stackMethods.pop = function() {
// console.log('popping size: ', size)
  this.count--;
  var popVal = this.storage[this.count];
  delete this.storage[this.count];
  return popVal;
};

stackMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  // debugger;
  return this.count;
};

// var newStack = Stack();