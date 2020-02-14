/**
 * A Node in the graph
 * @constructor
 * @param {Number} xPos - The x-position of the Graph Node
 * @param {Number} yPos - The y-position of the Graph Node
 *
 * @property {Number} xPos - The x-position of the node
 * @property {Number} yPos - The y-position of the node
 * @property {Array.<Edge>} edges - A list of all the edges connected to this node
 */
module.exports = function GraphNode(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.edges = [];
}

