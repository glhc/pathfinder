"use strict";

/**
 * This is the prototype for all algorithms.
 * @param {Number} start.x - The starting x co-ord
 * @param {Number} start.y - The starting y co-ord
 * @param {Number} end.x - The ending x co-ord
 * @param {Number} end.y - The ending y co-ord
 * @param grid {Array} - The grid
 *
 * @todo - Stack generator function
 * @todo - Queue generator function
 * @todo - Priority queue generator function
 */
const Pathfinder = {
  createStack: function createStack() {
    return [];
  },

  createQueue: function createQueue() {
    return [];
  },

  createPriorityQueue: function createPriorityQueue() {
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
    function prioritisedItem (x, y, priority) {
      return ({
        x,
        y,
        priority
      });
    };

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
    };

    priorityQueue.dequeue = dequeue.bind(priorityQueue);

    return priorityQueue;
  }
};

module.exports = Pathfinder;
