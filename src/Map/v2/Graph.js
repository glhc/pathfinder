'use strict';

const GraphNode = require('./GraphNode');

/**
 * Generates a graph map
 * @constructor
 * @classdesc A Graph of interconnected nodes
 */
function Graph() {
  this.AddEdge = function(from, to, cost) {

  };

  /**
   * Adds a node to the graph
   * @method
   * @param {Number} xPos - The x-position of the node
   * @param {Number} yPos - The y-position of the node.
   */
  this.addNode = function (xPos, yPos) {
    let Node = Object.create(GraphNode);
    
  };

  /**
   * connects the nearby nodes together
   * @method
   * @param {Number} thresholdDistance - The maximum distance between which nodes 
   * can be connected
   */
  this.connectNearbyNodes = function(thresholdDistance){
    
  }
  
  /** 
   * @member {Array.<GraphNodes>} nodes - A list of nodes
   */
  this.nodes = [];
};

module.exports = Graph;
