var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  set.count = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  var thing = false;
 this.storage.forEach((item1)=>{
   if(item1 === item){
     thing = true;
   }
 });
 return thing;
};

setPrototype.remove = function(item) {
  this.storage.forEach((item1)=>{
    if(item1 === item){
      this.storage.splice(item,1);
    }
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
