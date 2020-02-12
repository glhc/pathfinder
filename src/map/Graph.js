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
    sourceNode.edges.push(new Edge(targetNode, cost));
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
   * @returns {(Node|undefind)} - Node if exists
   */
  this.findNode = function(x, y, radius = 1) {
    // find closest node based on area search of area defined by radius
    // return this.nodes.filter(node => {
    //   let xDist = x - node.xPos;
    //   let yDist = y - node.yPos;
    //   return Math.sqrt(xDist * xDist + yDist * yDist) <= radius;
    // });

    return this.nodes.find(node => {
      return node.x == x && node.y == y;
    });
  };

  /**
   * @member {Array.<GraphNodes>} nodes - A list of nodes
   */
  this.nodes = [];

  this.populateGraph = function(isGrid) {
    if (isGrid) {

    };
  };

  this.generateSeedMap = () => {
    const config = {
      iMax: 10,
      jMax: 10
    };

    // console.log("normalised values:");
      // let info = [];

    let xInterval = Math.floor(window.innerWidth / config.iMax);
    let yInterval = Math.floor(window.innerHeight / config.jMax);

    const offset = (intervalLength) => Math.random() * intervalLength;

    for (let i = 1; i < config.iMax; i++) {
      for (let j = 1; j < config.jMax; j++) {
        let iDistributed = Math.floor((i * xInterval) + offset(xInterval) - offset(xInterval));
        let jDistributed = Math.floor((j * xInterval) + offset(yInterval) - offset(yInterval));
        // info.push({x: iDistributed, y: jDistributed});
        this.createNode(iDistributed, jDistributed);
      }
    }
    // console.table(info);
  };
};

module.exports = Graph;
