function myPriorityQueue(){
  collection = []

  this.print = function(){
    console.log(collection)
  }

  this.enqueue = (element) => {
    if (this.isEmpty()){
      collection.push(element)
    } else {
      let added = false
      for (var i = 0; i < collection.length; i++) {
        if(element[1] < collection[i][1]){
          collection.splice(i, 0, element)
          added=true;
          break;
        }
      }
      if(!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function(){
    let value = collection.shift()[0]
    return value
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

var pq = new myPriorityQueue()
pq.print()
console.log("Size: ", pq.size())
pq.front()
console.log("isEmpty: ", pq.isEmpty())
pq.enqueue(["fifth", 5])
pq.enqueue(["second", 2])
pq.enqueue(["third", 3])
pq.enqueue(["first", 1])
pq.print()
console.log("\nSize: ", pq.size())
pq.front()
console.log("isEmpty: ", pq.isEmpty())
console.log("dequeing: ", pq.dequeue())
console.log("dequeing: ", pq.dequeue())
pq.print()
console.log("\nSize: ", pq.size())
pq.front()
console.log("isEmpty: ", pq.isEmpty())
