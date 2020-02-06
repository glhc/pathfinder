'use strict';

const faker = require('faker');
const Pathfinder = require('./Pathfinder')

describe('Pathfinder', () => {
  let testPathfinder;

  beforeEach(() => {
    testPathfinder = new Pathfinder();
  })
  describe('priority queue', () => {
    let priorityQueue;

    beforeEach(() => {
      priorityQueue = testPathfinder.createPriorityQueue();
    });

    test('is empty when created', () => {
      expect(priorityQueue.length).toBe(0);
    });


    test('enqueues an item to the front of the queue if no priority', () => {
      let testX = faker.random.number(0, 20);
      let testY = faker.random.number(0, 20);
      priorityQueue.enqueue(testX, testY); 
    });
  });
});
