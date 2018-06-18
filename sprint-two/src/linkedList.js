var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
var last;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null){
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode
    }
  };

  list.removeHead = function() {
    var val = JSON.stringify(list.head.value);
    list.head = list.head.next;
    return Number(val);
  };

  list.contains = function(target) {
    var d = list.head;
    while(d){
      if(d.value === target){
      return true;
      }
      d = d.next;
    }
    return false;
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
