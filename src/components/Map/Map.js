import React, { useState } from "react";
import * as d3 from 'd3';

/**
 * @param {Number} props.width - Width of the canvas
 * @param {Number} props.height - Height of the canvas
 */
export default function Map(props) {

  /** Create a grid structure */
  function gridData() {
    let data = [];
    let xPos = 0;
    let yPos = 0;
    let rows = 18;
    let columns = 32;
    let width = columns / props.width;
    let height = columns / props.height;

    for (let row = 0; row < rows; row++) {
      data.push([]);

      for (let column = 0; column < columns; column++) {
        data[row].push({
          x: xPos,
          y: yPos,
          height: height,
          width: width
        });

        xPos += width;
      }

      xPos = 0;
      yPos += height;
    }
    return data;
  };

  const gridDatastore = gridData();

  let grid = d3.select('#grid')
    .append('svg')
    .attr('width', `${props.width}px`)
    .attr('height', `${props.height}px`);
    
  let row = grid.selectAll('.row')
    .data(gridDatastore)
    .enter().append('g')
    .attr('class', 'row');

  let column = row.selectAll('.cell')
    .data(function (d) {return d;})
    .enter().append('rect')
    .attr('class', 'cell')
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('height', (d) => d.height)
    .attr('width', (d) => d.width)
    .style('stroke', 'black')
    .style('fill', 'green');


  return (
    <main id="grid">
    </main>
  );
}
