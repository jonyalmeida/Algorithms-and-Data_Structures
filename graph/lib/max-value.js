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
    const stack = [startingNode];
    const visited = new Set();

    let maxVal = new GraphNode(-Infinity);

    while (stack.length > 0) {
        let currNode = stack.pop();

        if (currNode.value > maxVal.value) {
            maxVal = currNode;
        }
        currNode.neighbors.forEach((node) => {
            if (!visited.has(node)) {
                visited.add(node);
                stack.push(node);
            }
        });
    }

    return maxVal.value;
}

//depth first traversal recursive
// function maxValue(
//     startingNode,
//     visited = new Set(),
//     maxVal = new GraphNode(-Infinity)
// ) {
//     if (visited.has(startingNode)) return;
//     visited.add(startingNode);

//     startingNode.neighbors.forEach((node) => {
//         visited.add(node);
//         if (node.value > maxVal.value) {
//             maxVal = node;
//         }
//         return maxValue(node, visited, maxVal);
//     });

//     return maxVal.value;
// }

module.exports = {
    maxValueBST,
    maxValueDST,
};
