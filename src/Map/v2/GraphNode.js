'use strict';

/**
 * A Node in the graph
 * @param {Number} xPos - The x-position of the Graph Node
 * @param {Number} yPos - The y-position of the Graph Node
 * @param {Array.<Edge>} edges - A list of all the edges connected to this node
 */
module.exports = function GraphNode(xPos, yPos, List) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.edges = [];
}

