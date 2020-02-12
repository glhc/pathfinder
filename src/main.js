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


let circle = map.selectAll('circle')
  .data(GraphData.nodes)
  .enter().append('circle')
  .attr('cx', (d) => d.xPos)
  .attr('cy', (d) => d.yPos)
  .attr('r', 5)
  .attr('fill', 'black');


// debug
for (let node of GraphData.nodes) {
  if (node.edges.length) {
    console.log(node);
    for (let edge of node.edges) {
      console.log(edge);
    }
  }
};

let edges = circle.selectAll('line')
  .data((d) => d.edges)
  .enter().append('line')
  .attr('x2', (edge) => edge.xPos)
  .attr('y2', (edge) => edge.yPos)
  .style('stroke', 'red');




// Initialise start and endpoints
// const Marker = new Node(rows, columns);
// const Goal = new Node(rows, columns);





