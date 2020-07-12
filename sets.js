var mySet = function(){
  var collection = []

  this.has = function(value){
    return collection.includes(value)
    // return (collection.indexOf(value) !== -1)
  }

  this.values = function(){
    return collection
  }

  this.add = function(value){
    if(!this.has(value)){
      collection.push(value)
      return true
    }
    return false
  }

  this.remove = function(value){
    if(this.has(value)){
      let index = collection.indexOf(value)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  this.size = function(){
    return collection.length
  }

  this.union = function(other_set){
    let union_set = new mySet()
    let first_set_values = this.values()
    let second_set_values = other_set.values()
    first_set_values.forEach(item => union_set.add(item))
    second_set_values.forEach(item => union_set.add(item))
    return union_set
  }

  this.intersection = function(other_set){
    let interSet = new mySet()
    let first_set_values = this.values()
    let second_set_values = other_set.values()
    let common_values = []
    // Iterate the smaller array
    if (first_set_values.length > second_set_values.length){
      for (var i = second_set_values.length - 1; i >= 0; i--) {
        if(first_set_values.includes(second_set_values[i])){
          common_values.push(second_set_values[i])
        }
      }
    }
    else {
      for (var i = first_set_values.length - 1; i >= 0; i--) {
        if(second_set_values.includes(first_set_values[i])){
          common_values.push(first_set_values[i])
        }
      }
    }
    common_values.forEach(item => interSet.add(item))
    return interSet
  }

  this.difference = function(other_set){
    let diff_set = new mySet()
    let first_set_values = this.values()
    let second_set_values = other_set.values()
    let union_set = this.union(other_set).values()
    let inset = this.intersection(other_set).values()
    let diff_values = union_set.filter(item => !inset.includes(item))
    diff_values.forEach(item => diff_set.add(item))
    return diff_set
  }

  this.subset = (other_set) => {
    let first_set_values = this.values()
    return first_set_values.every(item => other_set.has(item))
  }

}

var myset = new mySet()

console.log(myset.values())
myset.add(1)
myset.add("adding")
myset.add("sets")
myset.add("sets")
myset.add("done")
console.log(myset.has(1))
console.log(myset.remove(2))
console.log(myset.remove("adding"))
console.log(myset.size())
console.log("myset:")
console.log(myset.values())

var otherset = new mySet()
otherset.add("sets")
otherset.add("done")
otherset.add("cool")
otherset.add("nonsense")
console.log("otherset:")
console.log(otherset.values())

var uniset = myset.union(otherset)
console.log("Union:")
console.log(uniset.values())

var inset = myset.intersection(otherset)
console.log("Intersection:")
console.log(inset.values())

var diffset = myset.difference(otherset)
console.log("Difference:")
console.log(diffset.values())

var superset = new mySet()
superset.add(1)
superset.add("adding")
superset.add("sets")
superset.add("done")
superset.add("extra")
console.log("\nSuperset:")
console.log(superset.values())
console.log("myset is subset of superset: ", myset.subset(superset))
