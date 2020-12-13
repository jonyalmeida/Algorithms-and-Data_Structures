function breadthFirstSearch(startingNode, targetVal) {
    //initialize neighbors queue with starting node
    const neighbors = [startingNode];

    //initialize set to keep record of visited graphs
    const visited = new Set();

    //continue graph traversal until target value is found or all nodes are visited once
    while (neighbors.length > 0) {
        //queue works LILO style
        const currNode = neighbors.shift();

        //if node in set, continue to next iteration
        if (visited.has(currNode)) {
            continue;
        }

        //add current node to set
        visited.add(currNode);

        //return if found
        if (currNode.value === targetVal) return currNode;

        //adds neighbor nodes to queue
        if (currNode.neighbors.length > 0) {
            neighbors.push(...currNode.neighbors);
        }
    }

    return null;
}

module.exports = {
    breadthFirstSearch,
};
