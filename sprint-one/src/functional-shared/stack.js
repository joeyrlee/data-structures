var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};
someInstance.storage = {};
someInstance.size = 0;
_.extend(someInstance, stackMethods);

return someInstance;
};

var stackMethods = {};


stackMethods.push = function(value) {
  this.storage[size] = value;
  this.size++;
  // console.log('pushing size: ', size)
}
stackMethods.pop = function() {
// console.log('popping size: ', size)
  this.size--;
  var popVal = this.storage[size];
  delete this.storage[size]
  return popVal;
}


stackMethods.size = function() {
  if (this.size < 0) {
    return 0;
  }
  return this.size;
}

var newStack = Stack()

// _.each([1,2,3], function(num) {console.log(num)})
// {0:a,1:b,2:c}