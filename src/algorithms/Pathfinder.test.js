"use strict";

const faker = require("faker");
const Pathfinder = require("./Pathfinder");
const GraphNode = require("../map/GraphNode");
const Graph = require('../map/Graph');

describe("Pathfinder", () => {
  let testPathfinder;
  let testGraph;

  beforeEach(() => {
    testGraph = new Graph();
    testPathfinder = new Pathfinder(testGraph);
  });
  describe(".PriorityQueue", () => {
    let priorityQueue;

    beforeEach(() => {
      priorityQueue = testPathfinder.createPriorityQueue();
    });

    test("is empty when created", () => {
      expect(priorityQueue.length).toBe(0);
    });

    test("enqueues an item to the front of the queue if no priority", () => {
      let testX = faker.random.number(0, 20);
      let testY = faker.random.number(0, 20);
      priorityQueue.enqueue(testX, testY);
    });

    describe(".PrioritisedItem", () => {
      test("works", () => {
        let item = priorityQueue.prioritisedItem(1, 2, 3);
        expect(item).toEqual({
          x: 1,
          y: 2,
          priority: 3
        });
      });
    });

    test("takes the highest priority value off the queue", () => {
      let lowPriorityItem0 =
        (faker.random.number(0, 20), faker.random.number(0, 20), 10);
      let lowPriorityItem1 =
        (faker.random.number(0, 20), faker.random.number(0, 20), 11);
      let lowPriorityItem2 =
        (faker.random.number(0, 20), faker.random.number(0, 20), 12);
      let highPriorityItem0 = (1, 2, 0);
      let highPriorityItem1 =
        (faker.random.number(0, 20), faker.random.number(0, 20), 1);
      let highPriorityItem2 =
        (faker.random.number(0, 20), faker.random.number(0, 20), 2);

      priorityQueue.enqueue(lowPriorityItem0);
      priorityQueue.enqueue(highPriorityItem0);
      priorityQueue.enqueue(highPriorityItem2);
      priorityQueue.enqueue(lowPriorityItem1);
      priorityQueue.enqueue(lowPriorityItem2);
      priorityQueue.enqueue(highPriorityItem1);

      // expect(priorityQueue.dequeue()).toEqual(
      //   priorityQueue.prioritisedItem(highPriorityItem0)
      // );
      // expect(priorityQueue.dequeue()).toEqual(highPriorityItem1);
      // expect(priorityQueue.dequeue()).toEqual(highPriorityItem2);
      // expect(priorityQueue.dequeue()).toEqual(lowPriorityItem0);
      // expect(priorityQueue.dequeue()).toEqual(lowPriorityItem1);
      // expect(priorityQueue.dequeue()).toEqual(lowPriorityItem2);
      // expect(priorityQueue.length).toBe(0);
    });
  });

  test("Stores a start node", () => {
    let testStartNode = testGraph.createNode(
      faker.random.number(100),
      faker.random.number(100)
    );
    testPathfinder.setStartNode(testStartNode.x, testStartNode.y, testGraph);
    expect(testPathfinder.startNode).toEqual(testStartNode);
  });

  test("Stores a end node", () => {
    let testEndNode = testGraph.createNode(
      faker.random.number(100),
      faker.random.number(100)
    );
    testPathfinder.setEndNode(testEndNode.x, testEndNode.y);
    expect(testPathfinder.endNode).toEqual(testEndNode);
  });

});
