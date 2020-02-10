"use strict";

const faker = require("faker");
const Graph = require("./Graph");
const GraphNode = require("./GraphNode");
const GraphEdge = require("./GraphEdge");

describe("Graph", () => {
  let testGraph;

  beforeEach(() => {
    testGraph = new Graph();
  });

  test("can store a node", () => {
    let x = faker.random.number(100);
    let y = faker.random.number(100);
    let comparisonNode = new GraphNode(x, y);

    testGraph.createNode(x, y);
    expect(testGraph.nodes).toHaveLength(1);
    expect(testGraph.nodes[0]).toEqual(comparisonNode);
  });

  test("can caluculate distance between two nodes", () => {
    let source = {
      x: faker.random.number(100),
      y: faker.random.number(100)
    };

    let target = {
      x: faker.random.number(100),
      y: faker.random.number(100)
    };

    testGraph.createNode(source.x, source.y);
    testGraph.createNode(target.x, target.y);
  });

  test("stores the distance between two nodes on the edge object", () => {
    let source = {
      x: faker.random.number(100),
      y: faker.random.number(100)
    };
    let target = {
      x: faker.random.number(100),
      y: faker.random.number(100)
    };
    let distanceBetweenPoints = Math.sqrt(
      Math.pow(target.x - source.x, 2) + Math.pow(target.y - source.y, 2)
    );

    let testSourceNode = testGraph.createNode(source.x, source.y);
    let testTargetNode = testGraph.createNode(target.x, target.y);

    testGraph.addEdge(testSourceNode, testTargetNode);
    expect(testGraph.calculateCost(testSourceNode, testTargetNode)).toBe(
      distanceBetweenPoints
    );
  });

  describe(".connectNearbyNodes", () => {
    test("can connect two nodes together that are within threshold", () => {
      // abs distance cannot be greater than (5)^2 - (0)^2 = 25
      let firstTestNode = testGraph.createNode(
        faker.random.number(40),
        faker.random.number(40)
      );
      let secondTestNode = testGraph.createNode(
        faker.random.number(40),
        faker.random.number(40)
      );
      let thirdTestNode = testGraph.createNode(
        faker.random.number(40),
        faker.random.number(40)
      );

      console.log(testGraph.nodes);

      testGraph.connectNearbyNodes(5000);
      expect(firstTestNode.edges).toHaveLength(2);
      expect(secondTestNode.edges).toHaveLength(2);
      expect(thirdTestNode.edges).toHaveLength(2);

      console.log(testGraph.nodes[0]);
      console.log(testGraph.nodes[1]);

    });
  });
});
