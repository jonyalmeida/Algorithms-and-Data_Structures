const { GraphNode } = require("./graph-node");

//breadth first graph traversal approach
function maxValueBST(startingNode) {
    //initialize LILO queue with starting node
    const queue = [startingNode];

    //initialize set to prevent duplicate traversal
    const visited = new Set();

    //instantiate maxVal
    let maxVal = new GraphNode(-Infinity);

    //visit all nodes once
    while (queue.length > 0) {
        let currNode = queue.shift();

        if (visited.has(currNode)) {
            continue;
        }

        visited.add(currNode);

        //maxValue gets current node if larger
        if (currNode.value > maxVal.value) {
            maxVal = currNode;
        }

        //add neighbors to queue
        queue.push(...currNode.neighbors);
    }

    return maxVal.value;
}

//depth first graph traversal
function maxValueDST(startingNode) {
    //initialize LIFO stack
    const stack = [startingNode];

    const visited = new Set();
    visited.add(startingNode);

    let maxVal = new GraphNode(-Infinity);

    while (stack.length > 0) {
        //current node gets top of stack
        let currNode = stack.pop();

        if (currNode.value > maxVal.value) {
            maxVal = currNode;
        }

        //for each neighbor that hasn't been visited, gets added to visited
        //and pushed to the stack
        currNode.neighbors.forEach((node) => {
            if (!visited.has(node)) {
                visited.add(node);
                stack.push(node);
            }
        });
    }

    return maxVal.value;
}

// depth first traversal recursive
function maxValueRecursive(startingNode, visited = new Set()) {
    if (visited.has(startingNode)) return -Infinity;

    visited.add(startingNode);

    let neighborMaxes = startingNode.neighbors.map((neighbor) =>
        maxValueRecursive(neighbor, visited)
    );
    return Math.max(startingNode.value, ...neighborMaxes);
}

module.exports = {
    maxValueBST,
    maxValueDST,
    maxValueRecursive,
};
