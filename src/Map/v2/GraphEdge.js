'use strict';

module.exports = function GraphEdge(sourceNode, targetNode, cost) {
  this.sourceNode = sourceNode;
  this.targetNode = targetNode;
  this.cost = cost;
};
