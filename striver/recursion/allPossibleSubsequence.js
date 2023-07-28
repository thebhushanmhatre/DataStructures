// print all possible Subsequences

function printAllPossiblities (arr, combinations=[], index=0) {
  if (index >= arr.length) {
    console.log(combinations);
    return;
  }
  combinations.push(arr[index]);
  printAllPossiblities(arr, combinations, index + 1);
  combinations.pop();
  printAllPossiblities(arr, combinations, index + 1);
}



// console.log('All possibilities of [3,2,1]: ');
// printAllPossiblities([3,2,1]);

// console.log('');
// console.log('All possibilities of [5,6,7,8,9]: ');
// printAllPossiblities([5,6,7,8,9]);


function printAllPossiblitiesWithSum(arr, sum, combinations = [], index = 0) {
  if (index >= arr.length) {
    if (combinations.reduce((i, total) => (total = total + i), 0) === sum) {
      console.log(combinations);
    }
    return;
  } else if (combinations.reduce((i, total) => (total = total + i), 0) > sum) {
    return; // Assuming all positive
  }
  combinations.push(arr[index]);
  printAllPossiblitiesWithSum(arr, sum, combinations, index + 1);
  combinations.pop();
  printAllPossiblitiesWithSum(arr, sum, combinations, index + 1);
}

console.log('All possibilities of [3,2,1,4,5,6] whose sum is 10: ');
printAllPossiblitiesWithSum([3, 2, 1, 4, 5, 6], 10);


// TODO:

//  Pick only subsequence with sum

// Count Number of Subsequence with given sum
