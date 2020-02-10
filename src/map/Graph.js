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

  this.populateGraph = function(isGrid) {
    if (isGrid) {

    };
  };

  function* poissonDiscSampler(width, height, radius) {
    const k = 4; // maximum number of samples before rejection
    const radius2 = radius * radius;
    const cellSize = radius * Math.SQRT1_2;
    const gridWidth = Math.ceil(width / cellSize);
    const gridHeight = Math.ceil(height / cellSize);
    const grid = new Array(gridWidth * gridHeight);
    const queue = [];

    // Pick the first sample.
    yield {add: sample(width / 2 + Math.random() * radius, height / 2 + Math.random() * radius, null)};

    // Pick a random existing sample from the queue.
    pick: while (queue.length) {
      const i = Math.random() * queue.length | 0;
      const parent = queue[i];
      const seed = Math.random();
      const epsilon = 0.0000001;
      
      // Make a new candidate.
      for (let j = 0; j < k; ++j) {
        const a = 2 * Math.PI * (seed + j/k);
        const r = radius + epsilon;
        const x = parent[0] + r * Math.cos(a);
        const y = parent[1] + r * Math.sin(a);

        // Accept candidates that are inside the allowed extent
        // and farther than 2 * radius to all existing samples.
        if (0 <= x && x < width && 0 <= y && y < height && far(x, y)) {
          yield {add: sample(x, y), parent};
          continue pick;
        }
      }

      // If none of k candidates were accepted, remove it from the queue.
      const r = queue.pop();
      if (i < queue.length) queue[i] = r;
      yield {remove: parent};
    }

    function far(x, y) {
      const i = x / cellSize | 0;
      const j = y / cellSize | 0;
      const i0 = Math.max(i - 2, 0);
      const j0 = Math.max(j - 2, 0);
      const i1 = Math.min(i + 3, gridWidth);
      const j1 = Math.min(j + 3, gridHeight);
      for (let j = j0; j < j1; ++j) {
        const o = j * gridWidth;
        for (let i = i0; i < i1; ++i) {
          const s = grid[o + i];
          if (s) {
            const dx = s[0] - x;
            const dy = s[1] - y;
            if (dx * dx + dy * dy < radius2) return false;
          }
        }
      }
      return true;
    }

    function sample(x, y, parent) {
      const s = grid[gridWidth * (y / cellSize | 0) + (x / cellSize | 0)] = [x, y];
      queue.push(s);
      return s;
    }
  }
};

module.exports = Graph;
