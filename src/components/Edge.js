import React from 'react';

export default function Edge(props) {
  return (
    <line 
      x1={props.x1}
      y1={props.y1}
      x2={props.data.targetNode.xPos}
      y2={props.data.targetNode.yPos}
      stroke="black"
      
    />
  );
}
