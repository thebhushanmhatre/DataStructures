function myQueue(){
  collection = []

  this.print = function(){
    console.log(collection)
  }

  this.enqueue = function(item){
    collection.push(item)
  }

  this.dequeue = function(){
    return collection.shift()
  }

  this.front = function(){
    console.log(collection[0])
  }

  this.size = function(){
    return collection.length
  }

  this.isEmpty = function(){
    return collection.length===0
  }
}

var myqueue = new myQueue()
myqueue.print()
console.log("Size: ", myqueue.size())
myqueue.front()
console.log("isEmpty: ", myqueue.isEmpty())
myqueue.enqueue(1)
myqueue.enqueue(2)
myqueue.enqueue(5)
myqueue.print()
console.log("Size: ", myqueue.size())
myqueue.front()
console.log("isEmpty: ", myqueue.isEmpty())
console.log("dequeing: ", myqueue.dequeue())
console.log("dequeing: ", myqueue.dequeue())
myqueue.print()
console.log("Size: ", myqueue.size())
myqueue.front()
console.log("isEmpty: ", myqueue.isEmpty())
