class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        const newNode = new Node(data);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    pop() {
        if (this.top === null) {
            return null;
        }
        const popped = this.top.data;
        this.top = this.top.next;
        this.size--;
        return popped;
    }

    // Peeks at the top element of the stack
    peek() {
        if (this.top === null) {
            return null;
        }
        return this.top.data;
    }

    // Checks if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Returns the size of the stack
    getSize() {
        return this.size;
    }
}
