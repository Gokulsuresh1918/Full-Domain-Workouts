class DirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(from, to) {
        this.adjacencyList[from].push(to);
    }

    displayGraph() {
        const allVertices = Object.keys(this.adjacencyList);
        for (let vertex of allVertices) {
            let edges = this.adjacencyList[vertex];
            let edgeString = edges.join(' -> ');
            console.log(`${vertex} -> ${edgeString}`);
        }
    }
}

// Example usage
const graph = new DirectedGraph();

// Adding vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// Adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

// Displaying the graph
graph.displayGraph();
