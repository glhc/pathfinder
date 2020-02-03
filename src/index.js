"use strict";

import Node from './Node';


/**
 * Generate a grid structure
 * @returns {Array} - The grid data
 */
function gridData() {
  let data = [];
  let rows = 32;
  let columns = 32;
  let width = window.innerWidth / columns;
  let height = width;

  // TODO: get cell width to round up if theres leftover width

  console.table({
    width: width,
    "total width / cell width": width / window.innerWidth
  });

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
}

const gridDatastore = gridData();

let grid = d3
  .select("#grid")
  .append("svg")
  .attr("width", `${window.innerWidth}px`)
  .attr("height", `${window.innerHeight}px`);

let row = grid
  .selectAll(".row")
  .data(gridDatastore)
  .enter()
  .append("g")
  .attr("class", "row");

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

const Marker = new Node();
const Goal = new Node();

for (let i = 0; i < 80; i++) {
  Marker.down();
  console.table(Marker.xPos, Marker.yPos);
};

