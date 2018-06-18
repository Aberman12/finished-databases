var Stack = function() {
  var someInstanace = {count: 0,
storage: {},
backup: {}};
  extend(someInstanace, stackMethods);
  return someInstanace;
};

var extend = function(obj, methods) {
  for(var key in methods){
    obj[key] = methods[key];
  }
};

var stackMethods = {

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



