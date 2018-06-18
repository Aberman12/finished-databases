var Stack = function() {
  var someInstanace = Object.create(stackMethods);

  return someInstanace;
};


var stackMethods = {
count: 0,
storage: {},
backup: {},
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    this.backup = {};
    this.count--;
    this.backup[this.count] = this.storage[this.count];
    delete this.storage[this.count];
    return this.backup[this.count];
  },
  size: function() {
    var sized = Object.keys(this.storage);
    return sized.length;
  }
};

