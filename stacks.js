var myStack = function(){
  this.count = 0
  this.storage = {}

  this.push = function(value){
    this.storage[this.count] = value
    this.count++
  }

  this.pop = function(){
    if(this.count === 0){
      return undefined
    }

    this.count--
    var result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.size = function(){
    return this.count
  }

  this.peek = function(){
    return this.storage[this.count - 1]
  }

}

var mystac = new myStack()

mystac.push(11)
mystac.push("stacks done")
mystac.push("okay")
console.log(mystac.size())
console.log(mystac.peek())
console.log(mystac.pop())
console.log(mystac.pop())
