var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
var a = this.children;
var child = Object.create(treeMethods);
child.value = value;
child.children = [];
a.push(child);
};

treeMethods.contains = function(target) {
var b = this.children;
var fin = false
function dum(b){
  for(var i = 0; i < b.length; i++){
    if(b[i].value === target){
    fin = true;
    }
    if(b[i].children.length){
dum(b[i].children);
    }
  }
}

dum(b);
  return fin;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
