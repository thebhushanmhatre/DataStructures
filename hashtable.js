
let myhash = (string, max) => {
  let sum = 0
  for (var i = 0; i < string.length; i++) {
    sum += (string.charCodeAt(i)*i)
  }
  return sum % max
}

let myHashTable = function() {
  let storage = []
  const storageLimit = 10

  this.print = () => {
    console.log(storage)
  }

  this.add = (key, value) => {
    let index = myhash(key, storageLimit)
    if(storage[index] === undefined) {
      storage[index] = [[key, value]]
    } else {
      var inserted = false
      for (var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key){
          console.log(`${storage[index]} replaced with [${index}, ${value}]`)
          storage[index][i][1] = value
          inserted = true
        }
      }
      if(inserted === false){
        storage[index].push([key, value])
      }
    }
  }

  this.remove = (key) => {
    let index = myhash(key, storageLimit)
    if(storage[index].length === 1 && storage[index][0][0] === key) {
      // delete storage[index]
      storage.splice(index, 1)
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key){
          // delete storage[index][i]
          storage[index].splice(i, 1)
        }
      }
    }
  }

  this.lookup = function(key){
    let index = myhash(key, storageLimit)
    if(storage[index] === undefined){
      return undefined
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key){
          return storage[index][i][1]
        }
      }
    }
  }

}



let ht = new myHashTable();
ht.add('race', 'person');
ht.add('care', 'dog');
ht.add('acer', 'dinosour');
ht.add('ecar', 'penguin')
ht.print();
console.log(ht.lookup("acer"))
console.log(ht.lookup("race"))
console.log(ht.lookup("ace"))
console.log("Removing Element with Key = 'care'")
ht.remove("care")
ht.print();