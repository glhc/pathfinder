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
// console.log("nodes:");
// console.log(GraphData.nodes);


// paint nodes
let circles = map.selectAll('circle')
  .data(GraphData.nodes)
  .enter().append('circle')
  .attr('cx', (d) => d.xPos)
  .attr('cy', (d) => d.yPos)
  .attr('r', 5)
  .attr('fill', 'black');



// paint edges
let edges = circles.selectAll('line')
  .data((d) => {
    console.log(d.edges);
    return d.edges;
  })
  .enter().append('line');
  // .attr('x1', (d) => d.parentElement.xPos)
  // .attr('y1', (d) => d.parentElement.yPos)

edges
  .attr('x2', (edge) => edge.parentElement.__data__.xPos)
  .attr('y2', (edge) => edge.yPos)
  .style('stroke', 'red')
  .style('stroke-width', '2px');




// Initialise start and endpoints
// const Marker = new Node(rows, columns);
// const Goal = new Node(rows, columns);





