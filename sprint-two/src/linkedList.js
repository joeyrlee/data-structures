var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  //append a new node with the passed-in value to the tail
  list.addToTail = function(value) {
    //head & tail scenarios:
    //1. head & tail = null
    if (list.head === null && list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
    //2. head & tail point to same
      list.tail = Node(value);
      //assign next
      list.head.next = list.tail;
    }

    list.count++;
  };

  //head points to next node in LL
  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    list.count--;
    return formerHead;
  };

  //does stuff
  list.contains = function(target) {
    var nodeSearch = function(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      return nodeSearch(node.next);
    };
    return nodeSearch(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//The time complexity for addToTail() is O(1)
//The time complexity for removeHead() is O(1)
//The time complexity for contains() is O(n)