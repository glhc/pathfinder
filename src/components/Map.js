import React, { useState } from "react";
import classNames from "classnames";
import Circle from "./Circle";
import Edge from "./Edge";
import Interface from "./Interface";
import SolnCircle from "./SolnCircle";
import PathFinder from "../algorithms/Pathfinder";

const Graph = require("../map/Graph");
const GraphData = new Graph();
const Pathfinder = new PathFinder(GraphData);

// TODO Implement acess to the closed list so that we can show status of solver

export default function Map() {
  const [totalNodes, setTotalNodes] = useState(100);
  const [closedList, setClosedList] = useState(Pathfinder.closedList);
  const [algorithm, setAlgorithm] = useState("bfs");
  const [startNode, setStartNode] = useState();
  const [endNode, setEndNode] = useState();
  const [solutionList, setSolutionList] = useState([]);
  const [solved, setSolved] = useState(false);

  // update the state of the map with the data from the algorithm
  const tick = () => {
    // update the Component's closedList in state
    setClosedList(Pathfinder.closedList);
    //
    paint();

    // Call the tick function again
    if (!solved) {
      tick();
    }
  };

  const paint = () => {};

  let solutionNodes = [];

  const startSolver = () => {
    Pathfinder.startNode = startNode;
    Pathfinder.endNode = endNode;
    Pathfinder.config.algorithm = algorithm;
    Pathfinder.solve();
    setSolutionList(Pathfinder.solution);
    // setSolved(true);
    // solutionNodes = Pathfinder.solution.map((node, key) => {
    //   return (
    //     ''
    //   );
    // });
  };

  const handleAlgorithmChange = newAlgorithm => {
    setAlgorithm(newAlgorithm);
  };

  // clear the map, reset the pathfinding algo
  const resetSolver = () => {
    Pathfinder.reset();
    setSolutionList([]);
    setSolved(false);
    GraphData.nodes = [];
    edges = [];
    GraphData.generateSeedMap();
    GraphData.nodes.forEach(node => {
      let x1 = node.xPos;
      let y1 = node.yPos;
      edges.push(
        node.edges.map((edge, key) => {
          return (
            <Edge
              x1={x1}
              y1={y1}
              data={edge}
              key={key}
              className={undefined}
              solutionNodes={Pathfinder.solution}
            />
          );
        })
      );
    });
    setStartNode(undefined);
    setEndNode(undefined);
    paintStartNode();
    paintEndNode();
  };

  const setEndpoint = d => {
    setStartNode(d);
  };

  const selectRandomNode = () => {
    return GraphData.nodes[
      // pick a random node out of the hat
      Math.floor(Math.random() * Math.floor(GraphData.nodes.length))
    ];
  };

  const paintStartNode = () => {
    // default behaviour: pick a random node
    if (!startNode) {
      // make the initial startNode
      let initialStartNode = selectRandomNode();
      setStartNode(initialStartNode);
    }
  };

  // sets the specified not or a random node as the end node
  const paintEndNode = node => {
    // if a node was passed into this function
    if (node) {
      setEndNode(node);
    } else if (
      // othewise, if theres no end node already defined
      !endNode ||
      // or if the end node is actually the start node
      (endNode.xPos === startNode.xPos && endNode.yPos === startNode.yPos)
    ) {
      // set a random node as the start node
      let randomEndNode = selectRandomNode();
      setEndNode(randomEndNode);
    }
    // run it recursively to check if we set the wrong node
    paintStartNode();
  };

  paintStartNode();
  paintEndNode();

  const chooseNodeColor = node => {
    // if (!closedList) {
    //   // normal node color
    //   return "rgba(88, 110, 117, 1)";
    //   // if the node data is in the closed list, change its color!
    // } else if (
    //   closedList.some(
    //     pathNode =>
    //       pathNode.x === node.data.xPos && pathNode.y === node.data.yPos
    //   )
    // ) {
    //   // solarizedmagenta
    //   return "rgba(211, 54, 130, 1)";
    // }
  };

  const printNodeId = ({ xPos, yPos }) => {
    let returnValue = undefined;

    if (startNode && endNode && closedList) {
      // if it's the start node
      if (xPos === startNode.xPos && yPos === startNode.yPos) {
        return "startNode";
        // or if it's the end node
      } else if (xPos === endNode.xPos && yPos === endNode.yPos) {
        return "endNode";
      } else {
        // or if it's on the closedList
        let nodeIsVisited = closedList.some(item => {
          return item.xPos === xPos && item.yPos === yPos;
        });
        if (nodeIsVisited) {
          return "visited";
        }
      }
    }
  };

  let nodes = GraphData.nodes.map((node, key) => {
    return (
      <Circle
        data={node}
        key={key}
        r="6"
        color={chooseNodeColor(node)}
        setEndpoint={x => setEndpoint(x)}
        id={printNodeId(node)}
        solutionNodes={solutionList}
        isSolved={solved}
      />
    );
  });

  return (
    <>
      <Interface
        totalNodes={totalNodes}
        setTotalNodes={x => setTotalNodes(x)}
        setAlgorithm={x => handleAlgorithmChange(x)}
        startSolver={() => startSolver()}
        resetSolver={() => resetSolver()}
      />
      <svg width={window.innerWidth} height={window.innerHeight}>
        {edges}
        {nodes}
      </svg>
    </>
  );
}

GraphData.generateSeedMap();

// make a list of the nodes for

let edges = [];

// put edges on the map
GraphData.nodes.forEach(node => {
  let x1 = node.xPos;
  let y1 = node.yPos;
  edges.push(
    node.edges.map((edge, key) => {
      return (
        <Edge
          x1={x1}
          y1={y1}
          data={edge}
          key={key}
          className={undefined}
          solutionNodes={Pathfinder.solution}
        />
      );
    })
  );
});
