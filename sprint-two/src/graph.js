

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
  this.numberOfEdges = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
if(this.nodes[node] !== undefined){
  return true;
}
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
var done = Object.keys(this.edges);
  for(var i = 0; i < done.length; i++){
    this.edges[done[i]].forEach((item)=>{
      if(item === node){
        delete this.edges[done[i]];
      }
    })
  }


    delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
if(this.edges[fromNode, toNode] && this.edges[toNode, fromNode]){
  return true;
}
return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
this.edges[fromNode, toNode] = [fromNode, toNode];
this.edges[toNode, fromNode] = [toNode, fromNode];
  this.numberOfEdges++;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode, toNode];
  delete this.edges[toNode, fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var o = Object.keys(this.nodes);
for(var i = 0; i < o.length; i++){
  cb(o[i]);
}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
