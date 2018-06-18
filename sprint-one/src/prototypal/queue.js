var Queue = function() {
  var someInstanace = Object.create(queueMethods);
  return someInstanace;
};

var queueMethods = {
count: 0,
    storage: {},
    backup: {}, 
    delCount:0,
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