let myNode = function(element){
  this.element = element
  this.next = null
}

let myLinkedList = function(){
  let length = 0
  let head = null

  this.size = function(){
    return length
  }

  this.head = function(){
    return head
  }

  this.add = function(item){
    let node = new myNode(item)
    if(head === null){
      head = node
      length += 1
    } else {
      let currentNode = head
      while(currentNode.next !== null){
        currentNode = currentNode.next
      }
      currentNode.next = node
      length += 1
    }
  }

  this.remove = function(item){
    if(head === null){
      return undefined
    } else if (head.element === item) {
      head = head.next
    }
    else {
      let currentNode = head
      let previousNode;
      while(currentNode.next !== null && currentNode.element !== item){
        previousNode = currentNode
        currentNode = currentNode.next
      }
      if(currentNode.element === item){
        // console.log("currentNode.element", currentNode.element)
        // console.log("previousNode.element", previousNode.element)
        previousNode.next = currentNode.next
        length -= 1
      }
    }
  }

  this.isEmpty = function(){
    if(length === 0){
      return true
    }
    return false
  }

  this.indexOf = function(item){
    let currentNode = head
    let index = 0
    while(currentNode.element !== item && currentNode.next !== null){
      currentNode = currentNode.next
      index += 1
    }
    if(currentNode.element === item){
      return index
    }
  }

  this.elementAt = function(index){
    let currentNode = head
    let counter = index
    while(counter !== 0 && currentNode.next !== null){
      currentNode = currentNode.next
      counter -= 1
    }
    if(counter === 0){
      return currentNode.element
    }
  }

  this.addAt = function(index, item){
    let node = new myNode(item)
    if(index === 0){
      node.next = head
      head = node
      return true
    }
    let currentNode = head
    let previousNode;
    let counter = index
    while(counter !== 0 && currentNode.next !== null){
      previousNode = currentNode
      currentNode = currentNode.next
      counter -= 1
    }
    if(counter === 0){
      node.next = currentNode
      previousNode.next = node
      return true
    }
  }

  this.removeAt = function(index){
    if(index === 0){
      head = head.next
      return true
    }
    let currentNode = head
    let previousNode;
    let counter = index
    while(counter !== 0 && currentNode.next !== null){
      previousNode = currentNode
      currentNode = currentNode.next
      counter -= 1
    }
    if(counter === 0){
      previousNode.next = currentNode.next
      return true
    }
  }

}


let llist = new myLinkedList()
console.log("\nHead =", llist.head())
console.log("Size=", llist.size())
llist.add("one")
llist.add("two")
llist.add("three")
llist.add("four")
// console.log("\nHead =", llist.head())
// console.log("Size=", llist.size())
// llist.remove("three")
// console.log("\nHead =", llist.head())
// console.log("Size=", llist.size())
// llist.remove("one")
// console.log("\nHead =", llist.head())
// console.log("Size=", llist.size())
// console.log("\nllist=", llist)

console.log("\nHead =", llist.head())
console.log("Size=", llist.size())

// llist.removeAt(2)
// console.log("\nHead =", llist.head())
// console.log("Size=", llist.size())

llist.removeAt(0)
console.log("\nHead =", llist.head())
console.log("Size=", llist.size())

// llist.addAt(1, "first")
// console.log("\nHead =", llist.head())
// console.log("Size=", llist.size())

llist.addAt(0, "zero")
console.log("\nHead =", llist.head())
console.log("Size =", llist.size())

console.log("Index of Zero =", llist.indexOf("zero"))
console.log("elementAt 3 =", llist.elementAt(3))

