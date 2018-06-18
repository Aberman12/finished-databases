var Queue = function() {
  this.count = 0;
  this.storage = {};
  this.backup = {};
  this.delCount = 0;
};

  Queue.prototype.enqueue = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  Queue.prototype.dequeue = function() {
    this.backup = {};
    this.backup.zero = this.storage[this.delCount];
    delete this.storage[this.delCount];
    // this.count--;
    this.delCount++;
    return this.backup.zero;
  },
  Queue.prototype.size = function() {
    var s = Object.keys(this.storage);
    return s.length;
  }
var queue = new Queue;

