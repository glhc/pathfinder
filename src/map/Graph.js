"use strict";

const GraphNode = require("./GraphNode");
const Edge = require("./GraphEdge");

/**
 * Generates a graph map
 * @constructor
 * @classdesc A Graph of interconnected nodes
 */
function Graph() {
  /**
   * Calculates the cost along the edge of a node
   * @method
   */
  this.calculateCost = function(sourceNode, targetNode) {
    let xDist = targetNode.xPos - sourceNode.xPos;
    let yDist = targetNode.yPos - sourceNode.yPos;

    return Math.sqrt(xDist * xDist + yDist * yDist);
  };

  /**
   * Adds an edge between two nodes.
   * @method
   */
  this.addEdge = function(sourceNode, targetNode, cost) {
    // Figure out the cost if it wasn't passed into this function
    if (cost == undefined) {
      cost = this.calculateCost(sourceNode, targetNode);
    }

    //add the edge to the source node
    sourceNode.edges.push(new Edge(sourceNode, targetNode, cost));
  };

  /**
   * Adds a node to the graph
   * @method
   * @param {Number} xPos - The x-position of the node
   * @param {Number} yPos - The y-position of the node.
   * @returns {Node} - The node that was just added
   * @todo Check for pre-existing node before adding another identical one
   */
  this.createNode = function(xPos, yPos) {
    let node = new GraphNode(xPos, yPos);
    this.nodes.push(node);
    return node;
  };

  /**
   * connects the nearby nodes together
   * @method
   * @param {Number} costThreshold - The maximum for which
   * nodes will be connected
   */
  this.connectNearbyNodes = function(costThreshold) {
    if (this.nodes.length > 0) {
      for (let node of this.nodes) {
        // create a list of nodes that are within or equal to the cost threshold
        this.nodes.forEach(candidate => {
          if (candidate !== node) {
            let cost = this.calculateCost(node, candidate);
            if (cost <= costThreshold) {
              this.addEdge(node, candidate, cost);
            }
          }
        });
      }
    }
  };

  /**
   * finds a node based on the co-ords provided
   * @param {Number} x - The x-position of the node
   * @param {Number} y - The y-position of the node
   * @returns {(Node|null)} - Node if exists
   */
  this.findNodesByData = function(x, y, radius = 1) {
    return this.nodes.filter(node => {
      let xDist = x - node.xPos;
      let yDist = y - node.yPos;
      return Math.sqrt(xDist * xDist + yDist * yDist) <= radius;
    });
  };

  /**
   * @member {Array.<GraphNodes>} nodes - A list of nodes
   */
  this.nodes = [];
}

module.exports = Graph;
