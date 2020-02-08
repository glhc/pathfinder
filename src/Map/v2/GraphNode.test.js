const faker = require('faker');
const GraphNode = require('./GraphNode');

describe('GraphNode', () => {
  let Node;

  test('has an x-position', () => {
    let x = faker.random.number(100);
    let y = faker.random.number(100);

    Node = new GraphNode(x, y);

    expect(Node.xPos).toBe(x);
    expect(Node.yPos).toBe(y);
  });
})
