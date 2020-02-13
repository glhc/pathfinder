import React from "react";

export default function Interface({setTotalNodes}) {
  const handleNodeChange = (e) => {
    setTotalNodes(Number(e.target.value));
  };

  return (

    <aside>
      <h1>Pathfinder</h1>
      <div id="totalNodes">
        <label for="nodes"># of Nodes</label>
        <input
          type="range"
          id="nodes"
          name="nodes"
          min="2"
          max="100"
          onChange={handleNodeChange}
        ></input>
      </div>

      <br/>
      
      <label for="bfs" className="list-item">
        <input type="radio" name="algorithm" id="bfs"></input>
        Breadth-First Search
      </label>

      <label for="dfs" className="list-item">
        <input type="radio" name="algorithm" id="dfs"></input>
        Depth-First Search
      </label>

      <label for="djikstra">
        <input type="radio" name="algorithm" id="djikstra"></input>
        Djikstra's Algorithm
      </label>

      <label for="dfs">
        <input type="radio" name="algorithm" id="aStar"></input>
        A* Search
      </label>
    </aside>
  );
}
