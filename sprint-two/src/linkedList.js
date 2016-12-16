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
    /* Test 4 */
    // if (list.head.next) {
    var formerHead = list.head.value;
    // console.log('formerHead: ', formerHead);
    list.head = list.head.next;
    list.count--;
    return formerHead;
  };

  //does stuff
  //contains works for head only.
  list.contains = function(target) {
    // debugger;
    var nodeSearch = function(node) {
      console.log('node: ', node);
      console.log('node value: ', node.value);
      console.log('target: ', target);
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      nodeSearch(node.next);
    };
    return nodeSearch(list.head);

    // var currNodeVal = list.head.value;
    // for (var i = 0; i < list.count; i++) {
    //   if (list.head.value === target) {
    //     return true;
    //   }
    //   currNodeVal = list.head.next.value;
    // }
    // return false;
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


//idea:
//1. on first node instance, head AND tail point to node
//2. only on second node instance, does head point to node