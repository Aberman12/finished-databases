var Queue = function() {
  var someInstanace = {count: 0,
storage: {},
backup: {}, delCount:0};
  extend(someInstanace, queueMethods);
  return someInstanace;
};

var extend = function(obj, methods) {
  for(var key in methods){
    obj[key] = methods[key];
  }
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue : function() {
    this.backup = {};
    this.backup.zero = this.storage[this.delCount];
    delete this.storage[this.delCount];
    // this.count--;
    this.delCount++;
    return this.backup.zero;
  },
  size : function() {
    var s = Object.keys(this.storage);
    return s.length;
  }
};