"use strict";

const d3 = require("d3");
const GridData = require("./GridData");
const Node = require("./Node");
const faker = require("faker");

describe("Node", () => {
  test("has default x and y positions", () => {
    const TestNode = new Node();
    expect(TestNode.xPos).toBe(10);
    expect(TestNode.yPos).toBe(10);
  });

  test("accepts specific x and y start positions", () => {
    const x = faker.random.number;
    const y = faker.random.number;
    const testGridData = GridData();
    const TestNode = new Node(testGridData, x, y);

    expect(TestNode.xPos).toBe(x);
    expect(TestNode.yPos).toBe(y);
  });

  describe("can move up", () => {
    test("by 1", () => {
      const testGridData = GridData();
      const TestNode = new Node(testGridData);
      const start = {
        x: TestNode.xPos,
        y: TestNode.yPos
      };
      TestNode.up();
      expect(TestNode.yPos).toBe(start.y - 1);
    });

    test("by several spaces", () => {
      const yDistance = faker.random.number({min: 2, max: 10});
      const testGridData = GridData();
      const TestNode = new Node(testGridData);
      const start = {
        x: TestNode.xPos,
        y: TestNode.yPos
      };
      TestNode.up(yDistance);
      expect(TestNode.yPos).toBe(start.y - yDistance);
    });
  });
});
