class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let listValues = '';
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  // Insert at the start
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // insert nodes in linkedList
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.next = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // remove from front and return the value of removed Node
  removeFromFront() {
    if (this.isEmpty()) return -1;
    let nodeValue = this.head.value;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return nodeValue;
  }

  // remove from end and return the value of removed Node
  removeFromEnd() {
    if (this.isEmpty()) return -1;
    let nodeValue = this.tail.value;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      // traverse to 2nd last element to se tail
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      this.tail = current;
      current.next = null;
    }
    this.size--;
    return nodeValue;
  }
}

// let testList = new LinkedList();
// testList.prepend(9);
// testList.prepend(3);
// testList.prepend(6);
// testList.print();
// testList.append(12);
// testList.append(2);
// testList.append(7);
// testList.append(10);
// testList.print();
// console.log('removeFromFront: ', testList.removeFromFront());
// testList.print();
// console.log('removeFromFront: ', testList.removeFromFront());
// testList.print();
// console.log('removeFromFront: ', testList.removeFromFront());
// testList.print();
// console.log('removeFromEnd: ', testList.removeFromEnd());
// testList.print();
// console.log('removeFromEnd: ', testList.removeFromEnd());
// testList.print();
// console.log('removeFromEnd: ', testList.removeFromEnd());
// testList.print();

module.exports = LinkedList;
