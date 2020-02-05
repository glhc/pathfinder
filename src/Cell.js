'use strict';

module.exports = function Cell(x, y) {
  const findAdjacent = () => {
    let adjacentPositions = [];
    // Check wall boundaries
    let xLow = x > 0 ? x - 1 : x;
    let xHigh = x < grid.columns ? x + 1 : x;
    let yLow = y > 0 ? y - 1 : y;
    let yHigh = y < grid.rows ? y + 1 : y;

    let j = y - 1;

    if (j >= 0) {
      j--;
    };

    for (let i = x - 1; i < x + 1; i++) {
      for (let j = y - 1; j < y - 1; j++) {
        adjacentPositions.push({x: i, y: j})
      }
    }

    return adjacentPositions;
  };
  this.passable = true;
  this.x = x;
  this.y = y;
  this.adjacent = findAdjacent();
}
