// Breadth-First Search (BFS) traversal of the graph
bfs(startVertex); {
    const visited = new Set();
    const queue = [startVertex];
    visited.add(startVertex);

    while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);

        for (let neighbor of this.adList.get(currentVertex)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
// Depth-First Search (DFS) traversal of the graph
dfs(startVertex); {
    const visited = new Set();
    this.dfsRecursive(startVertex, visited);
}
dfsRecursive(vertex, visited); {
    visited.add(vertex);
    console.log(vertex);
    for (let neighbor of this.adList.get(vertex)) {
        if (!visited.has(neighbor)) {
            this.dfsRecursive(neighbor, visited);
        }
    }
}