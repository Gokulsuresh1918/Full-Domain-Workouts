class Stack {
    constructor() {
       this.items = [];
    }
   
    push(element) {
       this.items.push(element);
    }
    pop() {
       if (this.items.length == 0)
         return "Underflow";
       return this.items.pop();
    }
    peek() {
       return this.items[this.items.length - 1];
    }
    isEmpty() {
       return this.items.length == 0;
    }
   
    // Function to reverse the stack
    reverse() {
       if (!this.isEmpty()) {
         let temp = this.pop();
         this.reverse(); // Recursive call to reverse the rest of the stack
         this.push(temp); // Push the popped element back onto the stack
       }
    }
}

// Example usage
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original Stack:");
console.log(stack.items);

stack.reverse();

console.log("Reversed Stack:");
console.log(stack.items);
