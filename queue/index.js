class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        this.items.shift();
    }

    front() {
        return this.items[0]
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toString() {
        return this.items.toString();
    }
}



const queue = new Queue();

queue.enqueue("daddy");
queue.enqueue("mom");
queue.enqueue("brother");

queue.dequeue();

console.log(queue.toString());