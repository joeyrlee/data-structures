var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var deqCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++
  };

  someInstance.dequeue = function() {

    var firstVal = storage[deqCount];
    delete storage[deqCount];
    deqCount++;
    return firstVal;
  };

  someInstance.size = function() {
    if (size - deqCount < 0) {
      return 0;
    }
    return size - deqCount;
  };

  return someInstance;
};
