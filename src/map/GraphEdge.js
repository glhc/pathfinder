/**
 * An edge connecting two GraphNodes together
 * @constructor
 * @param {Node} sourceNode - the source node
 * @param {Node} targetNode - the target node
 * @prop {Node} sourceNode - the source node
 * @prop {Node} targetNode - the target node
 */
module.exports = function GraphEdge(targetNode, cost) {
  this.targetNode = targetNode;
  this.cost = cost;
};
