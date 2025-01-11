// Linked List implementation in js and its traversal and other basic functions

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // insert nodes in linkedList O(n)
  append(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at the start O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // insert value at some particular index
  insertAt(value, index) {
    if (index < 0 && index > this.size) {
      console.log('Invalid index');
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let current = this.head;
      // let position = index - 1;
      // while (position > 0) {
      //   current = current.next;
      //   position--;
      // }
      // or
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }

  // remove from given index and return the value of removed Node
  removeFrom(index) {
    if (index < 0 && index >= this.size) {
      console.log('Invalid index');
      return;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = removedNode.next;
    }
    this.size--;
    console.log('Deleted node of value: ', removedNode.value);
    return removedNode.value;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(
        'Adding whatever you want to do by traversing here, current.value:',
        current.value
      );
      current = current.next;
    }
  }

  removeValue(value) {
    if (this.size === 0) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let prev = this.head;
    while (prev.next && prev.next.value != value) {
      prev = prev.next;
    }
    if (prev.next) {
      let removeNode = prev.next;
      prev.next = removeNode.next;
      this.size--;
      return value;
    }
    return null;
  }

  print() {
    if (this.size === 0) {
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

  search(value) {
    if (this.size === 0) {
      console.log('List is Empty.');
      return -1;
    }
    let position = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return position;
      }
      position++;
      curr = curr.next;
    }
    console.log('Value doesnt exist');
    return -1;
  }

  reverse() {
    // let curr = this.head;
    // let prev = null;
    // let next = curr.next;
    // while (next) {
    //   curr.next = prev;
    //   prev = curr;
    //   curr = next;
    //   next = next.next;
    // }
    // curr.next = prev;
    // this.head = curr;

    // Better Code:
    let current = this.head;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

let testList = new LinkedList();
testList.append(9);
testList.append(3);
testList.append(12);
testList.append(2);
testList.append(7);
testList.print();
testList.reverse();
// testList.removeValue(3);
testList.print();
// console.log(testList.search(3));
// testList.prepend(9);
// testList.prepend(3);
// testList.prepend(12);
// testList.print();

// testList.removeFrom(2);
// testList.print();

// testList.delete(3);
// testList.traverse();
