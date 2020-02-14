/**
 * This is the prototype for all algorithms.
 * @param {Object} graph - The graph upon which the Pathfinder is to solve
 *
 * @todo - Stack generator function
 * @todo - Queue generator function
 * @todo - Priority queue generator function
 */
function PathFinder(graph, algorithm = "bfs") {
  this.config = {
    algorithm: algorithm
  };

  this.solution = null;

  this.reset = () => {
    this.solution = [];
    this.closedList = [];
    this.openList = [];
  };

  this.obtainSolution = (finalPFNode) => {
    let currentNode = finalPFNode;
    let currentSolution = [];

    while (currentNode !== null) {
      currentSolution.push(currentNode.referencedNode);
      currentNode = currentNode.parent;
    };

    console.log(currentSolution);
    return currentSolution;
  };

  this.PriorityQueue = () => {
    let priorityQueue = {};
    // add with key based on.... hScore?
    // priorityQueue.createPriorityItem
    // Object.defineProperty(priorityQueue, )

    /**
     * creates an item to add to a priority queue
     * @typedef
     * @constructor
     * @param {Number} x - x-position
     * @param {Number} y - y-position
     * @param {Number} priority - the priority, with higher value = higher priority
     * @returns {Object} - item with priority
     */
    function createPriorityItem(node, priority) {
      this.node = node;
      this.priority = priority;
    }

    /** adds an item in a sorted way. assumes highest priority if priority
     *  if the priority is not specified
     *  @param {number} x - the x position of the item
     *  @param {number} y - the y position of the item
     *  @param {number} priority - the priority of the item (max priority = 0)
     */
    const enqueue = (x, y, priority = 0) => {
      let priorityIndex = 0;

      if (priority) {
        priorityIndex = priorityQueue.findIndex(
          element => element.priority === priority
        );
      } else {
        priority = 0;
      }

      // place the item in an array sorted by priority
      // priorityQueue.splice(priorityIndex, prioritisedItem(x, y, priority));
    };

    priorityQueue.enqueue = enqueue.bind(priorityQueue);

    /**
     * gives the highest priority item by default.
     * If the priority is specified, returns an item of that priority
     * which has been randomly selected.
     * @returns {Object}
     */
    function dequeue() {
      return this.shift();
    }

    priorityQueue.dequeue = dequeue.bind(priorityQueue);

    return priorityQueue;
  };

  this.startNode = null;

  this.setStartNode = (x, y) => {
    let origin = graph.findNode(x, y);

    if (origin !== undefined) {
      // console.debug(graph.findNode(x, y))
      this.startNode = origin;
    } else {
      throw new Error(
        `Couldn't find the start node you specified at x: ${x}, ` +
          `y: ${y}, graph: ${graph}`
      );
    }
  };
  this.endNode = () => null;

  this.setEndNode = (x, y) => {
    let endNode = graph.findNode(x, y);
    if (endNode) {
      endNode = endNode;
    } else {
      throw new Error(
        `Couldn't find the end node you specified at x: ${x}, ` +
          `y: ${y}, graph: ${graph}`
      );
    }
  };

  this.solve = () => {
    switch (this.config.algorithm) {
      case "bfs":
        this.bfs();
        break;
      case "dfs":
        this.dfs();
        break;
      case "djistra":
        this.djikstra();
        break;
      case "a*":
        this.aStar();
        break;
      default:
        this.bfs();
    }
  };

  this.closedList = [];
  this.openList = [];

  this.bfs = () => {
    const openList = this.openList;
    const closedList = this.closedList;

    const start = this.startNode;
    const end = this.endNode;

    // add the first node (start node) to the closed list with null parent
    openList.push(new PathNode(start));

    while (openList.length > 0) {
      // choose best node on the open list
      const currentNode = openList.shift();
      closedList.push(currentNode);

      if (currentNode.referencedNode === end) {
        this.solution = this.obtainSolution(currentNode);
        break;
      };

      for (let edge of currentNode.referencedNode.edges) {
        let neighbour = new PathNode(edge.targetNode, currentNode);
        // do we nkow about this neighbour already
        const searchForPathNode = (pathNode) => neighbour.x === pathNode.x && neighbour.y === pathNode.y;
        
        // look for a knownPathNode that is on the open or closed list
        let knownPathNode = openList.find(searchForPathNode) || closedList.find(searchForPathNode);

        // if we know this node
        if (knownPathNode) {
          // check it for a better solution
          if (knownPathNode.degreesOfSeperation > neighbour.degreesOfSeperation) {
            knownPathNode.parent = neighbour.parent;
            knownPathNode.degreesOfSeperation = neighbour.degreesOfSeperation;
          }
        } else {
          openList.push(neighbour);
        };
      };
    }
  };

  this.findAdjacent = node => {
    return node.edges.map(edge => edge.targetNode);
  };

  // not going to work
  this.dfs = () => {
    const openList = [];
    const closedList = [];

    const start = this.startNode;
    const end = this.endNode;
    let currentNode = start;
    closedList.push(new PathNode(start));

    while (currentNode !== end) {
      // add ajacent nodes to open list
      currentNode.edges.forEach(edge => openList.push(edge.targetNode));

      // decide which one to go to (dfs: whatever is on top of the stack)
      currentNode = openList.pop();
      // put it on the closed List
      closedList.push(new PathNode(currentNode));
    }

    // once it's solved, backtrack
    let solvedPath = [];
    return solvedPath;
  };


  // TODO implement setting of this.closedList to empty to empty priority queue
  this.djikstra = () => {
    let start = this.startNode;
    let end = this.endNode;
    let openList = this.createPriorityQueue();
    let closedList = [];
  };

  this.aStar = () => {
    let closedList = this.createPriorityQueue();
    // find absolute distance to target after travelling down an edge
    const h = candidateNode => {
      let manhattanDistance =
        Math.abs(end.xPos - candidateNode.xPos) +
        Math.abs(end.yPos - candidateNode.yPos);
      return manhattanDistance;
    };

    // current cost so far
    const g = pathNodeIndex => {
      let gScore = 0;
      let finishedBacktrack = false;

      while (!finishedBacktrack) {
        //TODO traverse backwards through the closedList parent thingy
        // closedList[pathNodeIndex];
      }

      return gScore;
    };

    const start = this.startNode;
    const end = this.endNode;
    let openList = this.createpriorityQueue();
    let currentNode = start;
    closedList.push(new PathNode(start));
    while (currentNode !== end) {
      // map to an array arranged by priority, then join it to the open list
      //
    }
  };
}

/**
 * a node to go on the closed list stac
 * @param sourceNode {GraphNode} the graph node this represents
 * @param parent {PathNode} - the parent PathNode
 */
function PathNode(sourceNode, parent = null) {
  this.referencedNode = sourceNode;
  this.x = sourceNode.xPos;
  this.y = sourceNode.yPos;
  this.parent = parent;

  this.degreesOfSeperation = parent === null ? 0 : parent.degreesOfSeperation + 1;
}

module.exports = PathFinder;
