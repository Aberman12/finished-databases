class Stack {

  constructor() {
  this.someInstance = {};
  this.count = 0;
  this.storage = {};
  this.backup = {};
  }

  push(value) {
this.storage[this.count] = value;
this.count++;
  };

  pop() {
     this.backup = {};
    this.count--;
    this.backup[this.count] = this.storage[this.count];
    delete this.storage[this.count];
    return this.backup[this.count];
  };

 size() {
var s = Object.keys(this.storage);
return s.length;
  };
}


var dudemon = new Queue;