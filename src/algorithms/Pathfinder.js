"use strict";

/**
 * This is the prototype for all algorithms.
 * @param {Object} graph - The graph upon which the Pathfinder is to solve
 *
 * @todo - Stack generator function
 * @todo - Queue generator function
 * @todo - Priority queue generator function
 */
function Pathfinder(graph) {
  this.createStack = () => {
    return [];
  };

  this.createQueue = () => {
    return [];
  };

  (this.PriorityQueue = () => {
    let priorityQueue = [];

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
          element => element.priority == priority
        );
      } else {
        priority = 0;
      }

      // place the item in an array sorted by priority
      priorityQueue.splice(priorityIndex, prioritisedItem(x, y, priority));
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
  }),
    (this.startNode = null),
    (this.setStartNode = (x, y) => {
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
    }),
    (this.endNode = () => null);

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

  this.solve = algorithm => {
    switch (algorithm) {
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
        this.aStar();
    }
  };

  this.bfs = () => {
    let f = 0;

    const openList = this.createQueue();
    const closedList = this.createStack();

    const start = this.startNode;
    const end = this.endNode;
    let currentNode = start;

    // add the first node (start node) to the closed list with null parent
    closedList.push(new PathNode(startNode));

    while (currentNode !== end) {
      currentNode.edges.forEach(edge => openList.unshift());
      currentNode.openList.shift();
    }
  };

  this.dfs = () => {
    const openList = this.createStack();
    const closedList = [];

    const start = this.startNode;
    const end = this.endNode;
    let currentNode = start;
    closedList.push(new PathNode(startNode));

    while (currentNode !== end) {
      // add ajacent nodes to open list
      currentNode.edges.forEach(edge => openlist.push(edge.targetNode));

      // decide which one to go to (dfs: whatever is on top of the stack)
      currentNode = openList.pop();
      // put it on the closed List
      closedList.push(new PathNode(currentNode));
    };
    
    // once it's solved, backtrack
    let solvedPath = [];
    return solvedPath;
  };

  this.djikstra = () => {
    let start = this.startNode;
    let end = this.endNode;
    let openList = this.createPriorityQueue();
    let closedList = [];
  };

  this.aStar = () => {
    // find absolute distance to target after travelling down an edge
    const h = (candidateNode) => {
      let manhattanDistance =
        Math.abs(end.xPos - candidateNode.xPos) +
        Math.abs(end.yPos - candidateNode.yPos);
      return manhattanDistance;
    };

    // current cost so far
    const g = (pathNodeIndex) => {
      let gScore = 0;
      let finishedBacktrack = false;
      
      while (!finishedBacktrack) {
        //TODO traverse backwards through the closedList parent thingy
      closedList[pathNodeIndex];

      }

      return gScore;
    };

    const start = this.startNode;
    const end = this.endNode;
    let openList = new pr;
    let currentNode = start;
    closedList.push(new PathNode(startNode));
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
}

module.exports = Pathfinder;
