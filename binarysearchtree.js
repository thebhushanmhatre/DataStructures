
class MyNode {
  constructor(data, left=null, right=null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class MyBST {
  constructor(){
    this.root = null
  }

  print(){
    console.log(this.root)
  }

  add(data){
    // console.log("In Add method, data: ", data)
    let node = this.root
    if(node===null){
      // console.log("Node is null")
      this.root = new MyNode(data)
      return true;
    } else {
      const searchTree = (node) => {
        if(data < node.data){
          // console.log("data", data, " is less than node.data", node.data)
          if(node.left === null) {
            node.left = new MyNode(data)
            return true
          } else {
            return searchTree(node.left)
          }
        }
        else if (data > node.data) {
          // console.log("data", data, " is greater than node.data", node.data)
          if(node.right === null){
            node.right = new MyNode(data)
            return true
          } else {
            return searchTree(node.right)
          }
        }
        else {
          // console.log("ELSE -- data", data, " node.data", node.data)
          return null
        }
      }
      return searchTree(node)
    }
  }

  findMin(){
    let current = this.root
    if (current===null){
      return null
    }
    while(current.left !== null){
      current = current.left
    }
    return current.data
  }

  findMax(){
    let current = this.root
    if (current===null){
      return null
    }
    while(current.right !== null){
      current = current.right
    }
    return current.data
  }

  find(data){
    let current = this.root
    while(current.data !== data){
      if(data < current.data){
        current = current.left
      } else{
        current = current.right
      }
      if (current == null){
        return null
      }
    }
    return current
  }

  isPresent(data){
    let current = this.root
    while(current){
      if(data === current.data){
        return true
      }
      if (data < current.data){
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(data){
    const removeNode = (node, data) => {
      if(node == null){
        return null
      }

      if(data == node.data){

        if(node.left == null && node.right == null){
          return null
        }

        if(node.left == null){
          return node.right
        }

        if(node.right == null){
          return node.left
        }

        let tempNode = node.left
        while(tempNode.right !== null){
          tempNode = tempNode.right
        }
        node.data = tempNode.data
        node.left = removeNode(node.left, tempNode.data)
        return node
      } 
      else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } 
      else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }


  getHeight(node){
    if(node === null){
      // For root height = 0
      return -1
    }
    let left_height = this.getHeight(node.left)
    let right_height = this.getHeight(node.right)
    // console.log("\n\nnode: ", node, "left_height: ", left_height, "right_height: ", right_height)
    return Math.max(left_height, right_height) + 1
  }

  findMaxHeight(){
    return this.getHeight(this.root)
  }

  isBalanced(node){
    // Diff in Height of left and right should be less than equal to 1
    if(node===null){
      return true
    }
    let left_ht = getHeight(node.left)
    let right_ht = getHeight(node.right)

    if(Math.abs(left_ht-right_ht)<2 && isBalanced(node.left) && isBalanced(node.right)){
      return true
    }

    return false
  }

  inOrder(){
    if (this.root === null){
      return null
    } else {
      let order = []
      function traverseInOrder(node){
        node.left && traverseInOrder(node.left)
        order.push(node.data)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return order
    }
  }

  preOrder(){
    if (this.root === null){
      return null
    } else {
      let order = []
      function traversePreOrder(node){
        order.push(node.data)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return order
    }
  }

  postOrder(){
    if (this.root === null){
      return null
    } else {
      let order = []
      function traversePostOrder(node){
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        order.push(node.data)
      }
      traversePostOrder(this.root)
      return order
    }
  }

  levelOrder(){
    if (this.root === null){
      return null
    } else {
      let order = []
      let queue_array = []
      queue_array.push(this.root)
      while(queue_array.length !== 0) {
        let node = queue_array.shift()
        order.push(node.data)
        node.left && queue_array.push(node.left)
        node.right && queue_array.push(node.right)
      }
      return queue_array
    }
  }

}

// let mybst = new MyBST()
// console.log("Max: ", mybst.findMax())
// console.log("Min: ", mybst.findMin())
// console.log("isPresent: ", mybst.isPresent(25), "\n")
// console.log("Adding 15: ", mybst.add(15), "\n")
// console.log("Adding 25: ", mybst.add(25), "\n")
// console.log("Adding 35: ", mybst.add(35), "\n")
// console.log("Adding 45: ", mybst.add(45), "\n")
// console.log("Max: ", mybst.findMax())
// console.log("Min: ", mybst.findMin())
// console.log("isPresent: ", mybst.isPresent(25))
// console.log("finding 45: ", mybst.find(54))
// console.log("\n\n")
// mybst.print()
// mybst.remove(25)
// mybst.print()

let mybst = new MyBST()
console.log("Adding 25: ", mybst.add(25), "\n")
console.log("Adding 35: ", mybst.add(35), "\n")
console.log("Adding 15: ", mybst.add(15), "\n")
console.log("Adding 20: ", mybst.add(20), "\n")
console.log("Adding 40: ", mybst.add(40), "\n")
console.log("Adding 30: ", mybst.add(30), "\n")
console.log("Adding 10: ", mybst.add(10), "\n")
// console.log("Adding 45: ", mybst.add(45), "\n")
// console.log("Adding 55: ", mybst.add(55), "\n")
// console.log("Adding 65: ", mybst.add(65), "\n")
// console.log("Adding 40: ", mybst.add(40), "\n")
// console.log("Adding 8: ", mybst.add(8), "\n")
// console.log("Adding 17: ", mybst.add(17), "\n")
mybst.print()
console.log("inOrder: ", mybst.inOrder())
console.log("preOrder: ", mybst.preOrder())
console.log("postOrder: ", mybst.postOrder())
console.log("levelOrder: ", mybst.levelOrder())
// console.log("\nMaxHeight: ", mybst.findMaxHeight())
// console.log("\nMax: ", mybst.findMax())
// console.log("Min: ", mybst.findMin())
// console.log("25 isPresent: ", mybst.isPresent(25))
// console.log("finding 54: ", mybst.find(54))
// mybst.remove(17)
// mybst.remove(35)
// console.log("\n")
// mybst.print()
