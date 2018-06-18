var BinarySearchTree = function(val) {
  this.stuff = Object.create(methods);
  this.stuff.value = val;
  this.stuff.left = null;
  this.stuff.right = null;
  return this.stuff;
};

var methods = {};

methods.insert = function(value){
  if(value < this.value && this.left){
    this.left.insert(value);
  }
  if(value < this.value && !this.left){
    this.left = new BinarySearchTree(value);
  }
  if(value > this.value && this.right){
    this.right.insert(value);
  }
  if(value >this.value && !this.right){
    this.right = new BinarySearchTree(value);
  }
}

methods.contains = function(value){
if(value === this.value){
  return true;
}
return !!(this.left && this.left.contains(value)) || !!(this.right && this.right.contains(value))

}


methods.depthFirstLog = function(value){
  value(this.value);
  if(this.left){
    this.left.depthFirstLog(value);
  }
  if(this.right){
    this.right.depthFirstLog(value);
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
