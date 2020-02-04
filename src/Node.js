'use strict';

/**
 * Creates a Start Node or the End Node
 * @constructor
 * @param xPos {Number} - The x position
 * @param yPos {Number} - The y position
 * @param rows {number} - The number of rows there is
 * @param columns {Number} - The number of columns there is
 * @returns {Object} - A node.
 */
module.exports = function Node (gridData, xPos = 10, yPos = 10) {
  /** the x-position of the node */
  this.xPos = xPos;
  /** the y-position of the node */
  this.yPos = yPos;

  /**
   * Move up.
   * @returns {Number|Null} - y-position if successful, null otherwise
   */
  this.up = () => {
    if (yPos - 1 < 0) {
      return null;
    } else {
      this.yPos -= 1;
      return this.yPos;
    }
  };

  /**
   * Move down.
   * @returns {Number|Null} - y-position if successful, null otherwise
   */
  this.down = () => {
    if (yPos + 1 < gridData.rows) {
      return null;
    } else {
      this.yPos += 1;
      return this.xPos;
    }
  };
  /**
   * Move left.
   * @returns {Number|Null} - y-position if successful, null otherwise
   */
  this.left = () => {
    if (xPos - 1 < 0) {
      return null;
    } else {
      this.xPos -= 1;
      return this.xPos;
    }
  };
  /**
   * Move right.
   * @returns {Number|Null} - x-position if successful, null otherwise
   */
  this.right = () => {
    if (xPos + 1 < columns) {
      return null;
    } else {
      this.xPos += 1;
      return this.xPos;
    }
  };

  /**
   * Searches an adjacent or diagonally adjacent square, marking as visited
   * @param {number} x - the x-position to search
   * @param {number} y - the y-position to search
   * @returns {null} - returns null if the peek is invalid
   */
  this.peek = (x, y) => {
    if (this.xPos - 1 < x  || x < this.xPos + 1) {
      return null;
    } else {
      gridData[y][x].visited = true;
    }
  };
};
