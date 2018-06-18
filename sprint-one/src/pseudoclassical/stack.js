
var Stack = function() {
this.count = 0;
this.storage = {};
this.backup = {};
};

Stack.prototype.push= function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

Stack.prototype.pop= function() {
    this.backup = {};
    this.count--;
    this.backup[this.count] = this.storage[this.count];
    delete this.storage[this.count];
    return this.backup[this.count];
  }

Stack.prototype.size= function() {
    var sized = Object.keys(this.storage);
    return sized.length;
  }


var stack = new Stack;