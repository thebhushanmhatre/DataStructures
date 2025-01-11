// Implementing Doubly linked list in js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) return -1;
    let nodeValue = this.head.value;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.size--;
    return nodeValue;
  }

  removeFromEnd() {
    if (this.isEmpty()) return -1;
    let nodeValue = this.tail.value;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.size--;
    return nodeValue;
  }

  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.value + ' ';
        current = current.next;
      }
      console.log(result);
    }
  }
}

let testList = new DoublyLinkedList();
testList.append(9);
testList.append(12);
testList.append(2); // 9 12 2
testList.prepend(3);
testList.prepend(7);
testList.print(); // 7 3 9 12 2
console.log('removeFromEnd', testList.removeFromEnd()); // 2
console.log('removeFromEnd', testList.removeFromEnd()); // 12
testList.print(); // 7 3 9
console.log('removeFromFront', testList.removeFromFront()); // 7
console.log('removeFromFront', testList.removeFromFront()); // 3
testList.print(); // 9

// https://www.geeksforgeeks.org/delete-operations-in-doubly-linked-list-using-javascript/

// https://replit.com/@Codevolution/JavaScript-Data-Structures#linked-list-double.js
