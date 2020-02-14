import React from "react";

export default function Interface({
  totalNodes,
  setTotalNodes,
  setAlgorithm,
  startSolver,
  resetSolver
}) {


  const handleNodeChange = e => {
    setTotalNodes(Number(e.target.value));
  };

  const handleAlgorithmChange = e => {
    setAlgorithm(e.target.id);
  };

  const handleStartCommand = e => {
    e.preventDefault();
    startSolver();
  };

  const handleResetCommand = e => {
    e.preventDefault();
    resetSolver();
  };

  return (
    <aside>
      <h1>Pathfinder</h1>
      <label htmlFor="totalNodes">
        # of Nodes: {totalNodes}
          <input
            type="range"
            id="totalNodes"
            name="totalNodes"
            min="2"
            max="100"
            onChange={handleNodeChange}
          ></input>
        </label>

      <br />

      <form onChange={handleAlgorithmChange}>
        <label htmlFor="bfs" className="list-item">
          <input type="radio" name="algorithm" id="bfs"></input>
          Breadth-First Search
        </label>

        <label htmlFor="dfs" className="list-item">
          <input type="radio" name="algorithm" id="dfs"></input>
          Depth-First Search
        </label>

        <label htmlFor="djikstra" className="list-item">
          <input type="radio" name="algorithm" id="djikstra"></input>
          Djikstra's Algorithm
        </label>

        <label htmlFor="dfs" className="list-item">
          <input type="radio" name="algorithm" id="aStar"></input>
          A* Search
        </label>
      </form>

      <div className="buttons">
        <label htmlFor="start">
          <button id="start" name="start" onClick={handleStartCommand}>
          Start
          </button>
        </label>

        <label htmlFor="reset">
          <button id="reset" name="reset" onClick={handleResetCommand}>
          Reset
          </button>
        </label>
    </div>
    </aside>
  );
}
