// Implementing Stack using Linked list
// Stack - LIFO = Last in First out

const LinkedList = require('./withTail');

class LLStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.append(value);
  }

  pop() {
    return this.list.removeFromEnd();
  }

  peek() {
    return this.list.tail.value;
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

const testStack = new LLStack();
testStack.push(2);
testStack.print();
testStack.push(6);
testStack.push(11);
testStack.print();
console.log('peek', testStack.peek());
console.log('getSize', testStack.getSize());
console.log('pop', testStack.pop());
console.log('pop', testStack.pop());
console.log('getSize', testStack.getSize());
testStack.print();
