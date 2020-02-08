"use strict";

const d3 = require("d3");


module.exports = function Grid(rows = 10, columns = 10) {
  function findAdjacent(x, y) {
    let xLow = x - 1;
    let xHigh = x + 1;
    let yLow = y + 1;
    let yHigh = y - 1;

    if (xLow < 0) {
      xLow = 0;
    };

    if (xHigh > columns) {
      xHigh = columns;
    };

    if (yLow < 0) {
      yLow = 0;
    };

    if (yHigh > rows) {
      yHigh = rows;
    };

  }

  // return grid data
  function generateGrid() {
    grid = [];
    for (let x = 0; x < columns; x++) {
      grid.push([]);
      for (let y = 0; y < rows; y++) {
        grid[x].push({
          passable: true,
        });
      }
    }
    return grid;
  }

  let data = generateGrid();

  let map = d3
    .select("#grid")
    .attr("width", `${window.innerWidth}px`)
    .attr("height", `${window.innerHeight}px`);

  let row = data
    .selectAll(".row")
    .data(gridDatastore)
    .enter()
    .append("g")
    .attr("class", "row");

  // Add the cells
  let column = row
    .selectAll(".cell")
    .data(d => d)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("height", d => d.height)
    .attr("width", d => d.width)
    .style("stroke", "#222")
    .style("fill", "#fff");

  return {
    rows: rows,
    columns: columns,
    data: data,
    map: map
  };
};