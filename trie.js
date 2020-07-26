let myNode = function(){
  this.keys = new Map()
  this.end = false
  this.setEnd = function(){
    this.end = true
  }
  this.isEnd = function(){
    return this.end
  }
}

let myTrie = function(){
  
  this.root = new myNode()

  this.add = function(input, node = this.root){
    if(input.length === 0){
      node.setEnd()
      return
    } else if(!node.keys.has(input[0])){
      node.keys.set(input[0], new myNode())
      return this.add(input.substr(1), node.keys.get(input[0]))
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]))
    }
  }

  this.isWord = function(word){
    let node = this.root
    while(word.length > 1){
      if(!node.keys.has(word[0])){
        return false
      } else {
        node = node.keys.get(word[0])
        word = word.substr(1)
      }
    }
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false
  }

  this.print = function(){
    let words = []
    let search = function(node, string){
      if(node.keys.size != 0){
        for(let letter of node.keys.keys()){
          search(node.keys.get(letter), string.concat(letter))
        }
        if(node.isEnd()){
          words.push(string)
        }
      } else {
        string.length > 0 ? words.push(string) : undefined
        return
      }
    }
    search(this.root, '')
    return words.length > 0 ? words : null
  }

}

// NOTE: node.keys is map object which has function has(), keys()

let mytrie = new myTrie()
mytrie.add('apple')
mytrie.add('cat')
mytrie.add('ball')
mytrie.add('dance')
mytrie.add('eat')
mytrie.add('fight')
console.log("Printing", mytrie.print())
console.log("isWord('fight')", mytrie.isWord('fight'))
console.log("isWord('dan')", mytrie.isWord('dan'))
console.log("isWord('dancer')", mytrie.isWord('dancer'))



