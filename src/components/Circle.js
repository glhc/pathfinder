import React from "react";
import classNames from 'classnames';

export default function Circle({
  data,
  r,
  color,
  setEndpoint,
  solutionNodes,
  id,
  isSolved
}) {

  const handleClick = e => {
    console.log(e);
    setEndpoint(data);
  };

  const partOfTheSolution = () => {
    if (solutionNodes) {
      return solutionNodes.some(
        node => node.xPos === data.xPos && node.yPos === data.yPos
      );
    }
  };

  let classes = classNames({
    circle: true,
    solution: partOfTheSolution()
  });

  return (
    <circle
      cx={data.xPos}
      cy={data.yPos}
      r={r}
      fill={color}
      onClick={handleClick}
      id={id ? id : undefined}
      className={classes}
    ></circle>
  );
}
