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

    this.createPriorityQueue = () => {
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
    function prioritisedItem(x, y, priority) {
      return {
        x,
        y,
        priority
      };
    }

    priorityQueue.prioritisedItem = prioritisedItem.bind(priorityQueue);

    /** adds an item in a sorted way. assumes highest priority if priority
     *  if the priority is not specified
     *  @param {number} x - the x position of the item
     *  @param {number} y - the y position of the item
     *  @param {number} priority - the priority of the item (max priority = 0)
     */
    function enqueue(x, y, priority = 0) {
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
    }

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
  },

  this.startNode = null,

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
  },

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
  }


  this.solve = (algorithm) => {
    switch (algorithm) {
      case 'bfs':
        this.bfs();
        break;
      case 'dfs':
        this.dfs();
        break;
      case 'djistra':
        this.djikstra();
        break;
      case 'a*':
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
  };

  this.aStar = () => {
    // find absolute distance to target after travelling down an edge
    const heuristic = (candidateNode) => {

    }
  }
};

module.exports = Pathfinder;
