import React from 'react';
import Circle from './Circle';

const Graph = require('../map/Graph');
const GraphData = new Graph();

export default function Map() {


  return(
    <svg width={window.innerWidth} height={window.innerHeight}>
      {nodes}
    </svg>
  );
};

GraphData.generateSeedMap();
let nodes = GraphData.nodes.map((node, key) => {
  return (<Circle 
    key={key}
    cx={node.xPos}
    cy={node.yPos}
    r={"50"}
    />)
  });

