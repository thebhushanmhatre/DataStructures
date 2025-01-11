// Implementing Queue using Linked list
// Queue - FIFO = First in First out

const LinkedList = require('./withTail');

class LLQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const testQueue = new LLQueue();
testQueue.enqueue(2);
testQueue.print();
testQueue.enqueue(6);
testQueue.enqueue(11);
testQueue.print();
console.log('peek', testQueue.peek());
console.log('getSize', testQueue.getSize());
console.log('dequeue', testQueue.dequeue());
console.log('dequeue', testQueue.dequeue());
console.log('getSize', testQueue.getSize());
testQueue.print();
