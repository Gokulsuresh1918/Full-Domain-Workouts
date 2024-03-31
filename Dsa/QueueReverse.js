class Queue {
    constructor() {
       this.items = [];
    }
   
    enqueue(element) {
       this.items.push(element);
    }
   
    dequeue() {
       if (this.isEmpty())
         return "Underflow";
       return this.items.shift();
    }
   
    peek() {
       return this.items[0];
    }
   
    isEmpty() {
       return this.items.length == 0;
    }
   
    // Function to reverse the queue
    reverse() {
       if (!this.isEmpty()) {
         let temp = this.dequeue();
         this.reverse();
         this.enqueue(temp);
       }
    }
   }
   
   // Example usage
   let queue = new Queue();
   queue.enqueue(1);
   queue.enqueue(2);
   queue.enqueue(3);
   queue.enqueue(4);
   queue.enqueue(5);
   
   console.log("Original Queue:");
   console.log(queue.items);
   
   queue.reverse();
   
   console.log("Reversed Queue:");
   console.log(queue.items);
   