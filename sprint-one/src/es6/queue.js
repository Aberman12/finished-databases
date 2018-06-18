class Queue {

  constructor() {
  this.someInstance = {};
  this.count = 0;
this.delCount = 0;
  // Use an object with numeric keys to store values
  this.storage = {};
  this.backup = {};
  }

  enqueue(value) {
this.storage[this.count] = value;
this.count++;
  };

  dequeue() {
    this.backup = {};
    this.backup.zero = this.storage[this.delCount];
    delete this.storage[this.delCount];
    this.delCount++;
    return this.backup.zero;
  };

 size() {
var s = Object.keys(this.storage);
return s.length;
  };
}


var dudemon = new Queue;