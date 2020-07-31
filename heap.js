// Heaps
// For Refrence: https://www.cs.usfca.edu/~galles/visualization/Heap.html

// left child = i * 2
// right child = i * 2 + 1
// parent = i / 2

// MinHeap = Smallest at the Top
// MaxHeap = Largest at the Top

let MinHeap = function(){
  let myheap = [null]

  this.print = function(){
    return myheap
  }

  this.insert = function(number){
    myheap.push(number)
    if(myheap.length > 2){
      let index = myheap.length - 1
      while(myheap[index] < myheap[Math.floor(index/2)]){
        if(index >= 1){
          let tmp = myheap[Math.floor(index/2)]
          myheap[Math.floor(index/2)] = myheap[index]
          myheap[index] = tmp
          if(Math.floor(index/2) > 1){
            index = Math.floor(index/2)
          } else {
            break
          }
        }
      }
    }
  }

  // Removing the TopMost Node i.e. Smallest in this Case(MinHeap)
  this.remove = function(){
    let smallest = myheap[1]
    if(myheap.length > 2){
      myheap[1] = myheap.pop()
      let i = 1
      let left = 2*i
      let right = 2*i + 1
      while(myheap[i] >= myheap[left] || myheap[i] >= myheap[right]){
        if(myheap[left] <= myheap[right]){
          [myheap[left], myheap[i]] = [myheap[i], myheap[left]]
          i = left
        } else {
          [myheap[right], myheap[i]] = [myheap[i], myheap[right]]
          i = right
        }
        left = 2*i
        right = 2*i + 1
        if(myheap[left] == undefined && myheap[right] == undefined){
          break
        }
      }
    } else if(myheap.length == 2){
      myheap.pop()
    } else {
      return null
    }
    return smallest
  }

  // This is the Heap Sort
  this.sort = function(){
    let result = []
    while(myheap.length > 1){
      result.push(this.remove())
    }
    myheap = [null, ...result]
    return result
  }
}


let myminheap = new MinHeap()
myminheap.insert(15)
myminheap.insert(2)
myminheap.insert(12)
myminheap.insert(5)
myminheap.insert(10)
myminheap.insert(8)
myminheap.insert(1)
console.log("myminheap = ", myminheap.print())
console.log("SortedArray = ", myminheap.sort())
console.log("myminheap = ", myminheap.print())
console.log("smallest = ", myminheap.remove())
console.log("smallest = ", myminheap.remove())
console.log("smallest = ", myminheap.remove())
console.log("myminheap = ", myminheap.print())


