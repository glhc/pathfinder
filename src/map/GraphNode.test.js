const faker = require("faker");
const GraphNode = require("./GraphNode");
const GraphEdge = require("./GraphEdge");

describe("GraphNode", () => {
  let Node;

  test("has an x-position and y-position", () => {
    let x = faker.random.number(100);
    let y = faker.random.number(100);

    Node = new GraphNode(x, y);

    expect(Node.xPos).toBe(x);
    expect(Node.yPos).toBe(y);
  });

  test("can hold an edge", () => {
    let source = {
      x: faker.random.number(0, 10),
      y: faker.random.number(0, 10)
    };

    let target = {
      x: faker.random.number(0, 10),
      y: faker.random.number(0, 10)
    };

    let sourceTestNode = new GraphNode(source.x, source.y);
    let targetTestNode = new GraphNode(target.x, target.y);
    let testEdge = new GraphEdge(sourceTestNode, targetTestNode, 10);
    sourceTestNode.edges.push(testEdge);
    expect(sourceTestNode.edges.length).toBe(1);
    expect(sourceTestNode.edges[0]).toBe(testEdge);
  });
});
