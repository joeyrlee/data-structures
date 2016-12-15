var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var poppedVal = storage[size];
    delete storage[size];
    size--;
    return poppedVal;
  };

  someInstance.size = function() {
  if (size < 0) {
    size = 0;
  }
    return size;
  };

  return someInstance;
};


