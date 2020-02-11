# Definitions

## Cost

Cost of travelling along the edge to another node

## g-score

Accumulated cost so far of the path between the node of origin and the 
node being considered.

__N.B:__ This is not the accumulated cost of going betweeen current node and 
the origin. It is going between the __node being considered__ and the origin.


## h-score

The heuristic cost of travelling from the node being considered to the 
destination node. for a 2-dimensional plane, this would be the Manhattan 
distance (i.e. the absolute distance, left as a square)

i.e.

> x_candidate * x_candidate + y_candidate * y_candidate - x_destination * x_destination - y_destination * y_destination

# f-score

Final score.


> f(n) = g(n) + h(n)

