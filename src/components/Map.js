import React, {useState} from 'react';
import Circle from './Circle';
import Edge from './Edge';
import Interface from './Interface';

const Graph = require('../map/Graph');
const GraphData = new Graph();

export default function Map() {
  const [totalNodes, setTotalNodes] = useState(100);


  return(
    <>
      <Interface setTotalNodes={(x) => setTotalNodes(x)}/>
      <svg width={window.innerWidth} height={window.innerHeight}>
        {nodes}
        {edges}
      </svg>
    </>
  );
};

GraphData.generateSeedMap();

// make a list of the nodes for 
let nodes = GraphData.nodes.map((node, key) => {
  return (
    <Circle 
      data={node}
      key={key}
      r="5"
    />)
  });

let edges = [];

GraphData.nodes.forEach(node => {
  let x1 = node.xPos;
  let y1 = node.yPos;
  edges.push(
    node.edges.map((edge, key) => {
      return (
        <Edge x1={x1} y1={y1} data={edge} key={key}/>
      );
    })
  )
});
