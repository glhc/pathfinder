"use strict";

/**
 * Generate a grid structure
 * @returns {Array} - The grid data
 */
module.exports = function GridData() {
    let data = [];
    let rows = 32;
    let columns = 32;
    let width = window.innerWidth / columns;
    let height = width;

    // TODO: get cell width to round up if theres leftover width

    let xPos = 0;
    let yPos = 0;

    for (let row = 0; row < rows; row++) {
      data.push([]);
      for (let column = 0; column < columns; column++) {
        data[row].push({
          x: xPos,
          y: yPos,
          height: height,
          width: width,
          visited: false,
          occupied: true
        });
        xPos += width;
      }
      xPos = 0;
      yPos += height;
    }
    return data;
};
