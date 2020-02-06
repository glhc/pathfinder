'use strict';

/**
 * This is the prototype for all algorithms.
 * @constructor
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
module.exports = function Pathfinder(start, end, grid) {
  function createStack() {
    return [];
  };

  function createQueue() {
    return [];
  };

  function createPriorityQueue() {
    let priorityQueue = [];

    /**
     * creates an item to add to a priority queue
     * @constructor
     * @param {Number} x - x-position
     * @param {Number} y - y-position
     * @param {Number} priority - the priority, with higher value = higher priority
     * @returns {Object} - item with priority
     */
    const prioritisedItem = (x, y, priority) => {
      return {
        x,
        y,
        priority
      };
    }

    /** adds an item in a sorted way. assumes highest priority if priority
     *  if the priority is not specified
     *  @param {number} x - the x position of the item
     *  @param {number} y - the y position of the item
     *  @param {number} priority - the priority of the item (max priority = 0)
     */
    priorityQueue.enqueue = (x, y, priority = 0) => {
      let priorityIndex = 0;

      if (priority) {
        priorityIndex  = this.findIndex(element => element.priority == priority)
      } else { // put it at the front of the list if no custom priority
        priorityQueue.unshift(this.prioritisedItem(x, y, priority));
      }

      // place the item in an array sorted by priority
      this.splice(priorityIndex, prioritiedItem(x, y, priority))
    }

    /**
     * gives the highest priority item by default.  
     * If the priority is specified, returns an item of that priority 
     * which has been randomly selected.
     * @param {number} priority - 
     */
    priorityQueue.dequeue = (priority = 0) => {
      if (priority) {
        return this.shift();
      }
    }

    return priorityQueue;
  };

  
  return {
    createStack,
    createQueue,
    createPriorityQueue
  }
}
