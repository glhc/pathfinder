import React, {useEffect} from "react";
import classNames from 'classnames';

export default function Edge({ x1, y1, data, solutionNodes}) {
  // const displayStats = true;
  const x2 = data.targetNode.xPos;
  const y2 = data.targetNode.yPos;


  
  //x1 needs to match something from soln list
  //x2 needs to match something from soln list
  //y1 needs to match something from soln list
  //y2 needs to match something from soln list

  useEffect(() => {
    if(solutionNodes) {
      debugger;
    }
  });

  const partOfTheSolution = () => {
  let isSolutionPath = false;
    if (solutionNodes) {
      isSolutionPath =
        (
          solutionNodes.some(node => node.xPos === x1) &&
          solutionNodes.some(node => node.yPos === y1)
        ) ||
        (
          solutionNodes.some(node => node.xPos === x2) &&
          solutionNodes.some(node => node.yPos === y2 || y2)
        );
    }
    return isSolutionPath;
  };


  // const info = (
  //   <text
  //     x={(x1 + (x1 + x2) / 2) + 'px'}
  //     y={(y1 + (y1 + y2) / 2) + 'px'}
  //     dx="5px"
  //   >
  //   </text>
  // );

  let classes = classNames({
    solution: partOfTheSolution(),
  });

  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} className={classes}>
      </line>
    </>
  );
}
