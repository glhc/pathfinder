"use strict";
import * as d3 from "d3";

const Graph = require('./map/Graph');
const GraphData = new Graph();

// Create the elements
let map = d3
  .select('main')
  .append("svg")
  .attr("width", `${window.innerWidth}`)
  .attr("height", `${window.innerHeight}`);

GraphData.generateSeedMap();
console.log("nodes:")
console.log(GraphData.nodes)


map.selectAll('circle')
  .data(GraphData.nodes)
  .enter().append('circle')
  .attr('cx', (d) => d.xPos)
  .attr('cy', (d) => d.yPos)
  .attr('r', 10);

// Initialise start and endpoints
// const Marker = new Node(rows, columns);
// const Goal = new Node(rows, columns);





