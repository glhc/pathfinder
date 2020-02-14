import React from "react";

export default function Edge({ x1, y1, data }) {
  const displayStats = true;
  const x2 = data.targetNode.xPos;
  const y2 = data.targetNode.yPos;


  const info = (
    <text
      x={(x1 + (x1 + x2) / 2) + 'px'}
      y={(y1 + (y1 + y2) / 2) + 'px'}
      dx="5px"
    >
    </text>
  );

  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2}>
      </line>
      {displayStats && info}
    </>
  );
}
