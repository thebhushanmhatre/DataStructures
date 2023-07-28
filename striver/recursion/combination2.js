// https://leetcode.com/problems/combination-sum-ii/description/


var combinationSum2 = function (candidates, target) {
  let sortedCandidates = candidates.sort((a,b) => (a-b));
  let result = [];
  let uniqueStrs = new Set();
  selectRecursively(sortedCandidates, target, 0, uniqueStrs);
  [...uniqueStrs].forEach(str => result.push(str.split('').map(i => Number(i))));
  return result;
};

// // Common Way of doing things, Let now enhance this
// function selectRecursively(candidates, target, index, uniqueStrs, selections = []) {
//   console.log({selections, target, index})
//   if (target === 0) {
//     uniqueStrs.add(selections.join(''));
//   }

//   if (index > candidates.length-1) {
//     return
//   }
  
//   if (candidates[index] <= target) {
//     selections.push(candidates[index]);
//     selectRecursively(candidates, target-candidates[index], index+1, uniqueStrs, selections);
//     selections.pop();
//   }
//   selectRecursively(candidates, target, index+1, uniqueStrs, selections);
// }



// Improved: To tackle duplicate numbers
function selectRecursively(candidates, target, index, uniqueStrs, selections = []) {
  if (target === 0) {
    // console.log('desired ', {selections, target, index})
    // console.log();
    uniqueStrs.add(selections.join(''));
  }

  if (index > candidates.length-1 || target < 0) {
    // console.log('disaster', {selections, target, index})
    // console.log();
    return;
  }
  
  for (let i=index; i < candidates.length; i++) {
    // condition to remove same duuplicate element which earlier not picked element
    // eg: if 1 at 0 is not picked as first element, then 1 at 1 should also be not picked as 1st element
    if (!(i !== index && candidates[i] === candidates[i-1])) {
      selections.push(candidates[i]);
      selectRecursively(candidates, target-candidates[i], i+1, uniqueStrs, selections);
      selections.pop();
    }
  }
}


console.log(combinationSum2([
  14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32, 8,
  7, 30, 12, 33, 20, 21, 29, 24, 17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17, 16,
  8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12,
], 27));

console.log(combinationSum2([2, 5, 2, 1, 2], 5));

console.log(combinationSum2([1, 1, 1, 2, 2], 4));

// Referencing By https://www.youtube.com/watch?v=G1fRTGRxXU8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=11

