'use strict';

const faker = require('faker');
const Graph = require('./Graph');
const GraphNode = require('./GraphNode');
const GraphEdge = require('./GraphEdge');


describe('Graph', () => {
  let testGraph;

  beforeEach(() => {
    testGraph = new Graph();
  });

  test('can store a node', () => {
    let x = faker.random.number(0, 100);
    let y = faker.random.number(0, 100);
    let comparisonNode = new GraphNode(x, y);


    testGraph.addNode(x, y);
    console.log(testGraph.nodes);
    expect(testGraph.nodes).toHaveLength(1);
    expect(testGraph.nodes[0]).toEqual(comparisonNode);
  });

  test('can caluculate distance between two nodes', () => {
    let source = {
      x: faker.random.number(0, 100),
      y: faker.random.number(0, 100)
    };

    let target = {
      x: faker.random.number(0, 100),
      y: faker.random.number(0, 100)
    };

    testGraph.addNode(start.x, start.y);
    testGraph.addNode(target.x, target.y);
  });

  test('stores the distance between two nodes on the edge object', () => {
    let source = {x: 10, y: 20};
    let target = {x: 100, y: 200};
    let distanceBetweenPoints = Math.sqrt(
      Math.pow(target.x - source.x, 2) +
      Math.pow(target.y - source.y, 2)
    );

    testGraph.addNode(source.x, source.y);
    testGraph.addNode(target.x, target.y);
    testGraph.addEdge()
    testGraph.calculateCost
  });
});
