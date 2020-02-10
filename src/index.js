"use strict";

import * as d3 from 'd3';

const Map = require('./map/Graph');

const gridDatastore = GridData();

// Create the elements
let gridMap = d3
  .select("#grid")
  .append("svg")
  .attr("width", `${window.innerWidth}px`)
  .attr("height", `${window.innerHeight}px`);

// Add the rows
let row = gridMap
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

// Initialise start and endpoints
const Marker = new Node(rows, columns);
const Goal = new Node(rows, columns);
