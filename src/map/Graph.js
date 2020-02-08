"use strict";

const GraphNode = require("./GraphNode");
const Edge = require('./GraphEdge');

/**
 * Generates a graph map
 * @constructor
 * @classdesc A Graph of interconnected nodes
 */
function Graph() {

  /**
   * Helper method specific to this 2d map-type implementation
   * @private
   */
  const distanceBetweenNodes = function (sourceNode, targetNode) {
    let xDist = targetNode.xPos - sourceNode.xPos;
    let yDist = targetNode.yPos - sourceNode.yPos;

    return Math.sqrt(xDist * xDist + yDist * yDist);
  };

  /**
   * Cost function abstraction for generalisation purposes. Change this if 
   * You want the cost function modified
   * @private
   */
  const calculateCost = distanceBetweenNodes;

  /**
   * Adds an edge between two nodes
   * @method
   */
  this.addEdge = function (sourceNode, targetNode, oneDirection, cost) {
    // Figure out the cost if it wasn't passed into this function
    if (cost == undefined) {
      cost = calculateCost(sourceNode, targetNode);
    }

    //add the edge to the soource node
    sourceNode.edges.push(new Edge(sourceNode, targetNode, cost));

    //add the edge to the target node
    if (!oneDirection)
      targetNode.edges.push(new Edge(targetNode, sourceNode, cost));
  };

  /**
   * Adds a node to the graph
   * @method
   * @param {Number} xPos - The x-position of the node
   * @param {Number} yPos - The y-position of the node.
   * @todo Check for pre-existing node before adding another identical one
   */
  this.addNode = function (xPos, yPos) {
    let node = new GraphNode(xPos, yPos);
    this.nodes.push(node)
  };

  /**
   * connects the nearby nodes together
   * @method
   * @param {Number} costThreshold - The maximum for which
   * nodes will be connected
   */
  this.connectNearbyNodes = function (costThreshold) {
    for (node of this.nodes) {
      // create a list of nodes that are within or equal to the cost threshold
      this.nodes.forEach(candidate => {
        if (candidate !== node) {
          let cost = calculateCost(node, candidate);
          if (cost <= costThreshold) {
            this.addEdge(node, candidate, true, cost);
          }
        }
      });
    }
  };

  /**
   * finds a node based on the co-ords provided
   * @param {Number} x - The x-position of the node
   * @param {Number} y - The y-position of the node
   * @returns {(Node|null)} - Node if exists
   */
  this.findNodesByData = function (x, y, radius = 1) {
    return this.nodes.filter(node => {
      let xDist = x - node.xPos;
      let yDist = y - node.yPos;
      return Math.sqrt(xDist * xDist + yDist * yDist) <= radius;
    });
  }

  /**
   * @member {Array.<GraphNodes>} nodes - A list of nodes
   */
  this.nodes = [];
}

module.exports = Graph;
