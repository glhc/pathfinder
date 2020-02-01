# Ideas

- [ ] For _'dumb'_ search - make blocks dark until sighted by the search algorithm

Searches to include:

1. Breadth-first
2. Depth-first
3. Djikstra
4. A*\*
5. Best-first
6. Slime mold search
7. B\* search

## Map design

- don't set everything with a distance of 1. Instead, have distance as a
function of the total height/width of the canvas. Then, you can implement grid search, 
or allow the drawing of graph-nodes, so that Djikstra's can really shine
  - Then, implement cell.up(), cell.down(), cell.left(), cell.right(), etc.

Mode 1 - Grid
Mode 2 - Graph

Map: Graph/Grid

### Graph map design

1. Randomly seed a bunch of points, add them to the stack.
2. connect a bunch of them randomly
3. Calculate the hypotenuse distance
4. ???
5. Profit!

Like this, but don't take away all the paths:
https://observablehq.com/@mbostock/minimum-spanning-tree?collection=@observablehq/algorithms
