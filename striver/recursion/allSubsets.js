// Find all possible subsets without any duplicates

function findAllSubsets(arr) {
  let uniqueStrs = new Set();
  let sortedArr = arr.sort((a, b) => a - b);
  possibilities(sortedArr, 0, uniqueStrs);
  let results = [];
  uniqueStrs.forEach(item => {
    results.push(item.split('').map(Number));
  });
  return results;
}

function possibilities(arr, index, uniqueStrs, selections=[] ) {
  uniqueStrs.add(selections.join(''));
  for(let i=index; i < arr.length; i++) {
    if (!(i != index && arr[i] === arr[i-1])) {
      selections.push(arr[i]);
      possibilities(arr, i + 1, uniqueStrs, selections);
      selections.pop();
    }
  }
}

console.log(findAllSubsets([1, 2, 5]));
// console.log(findAllSubsets([2, 3]));
