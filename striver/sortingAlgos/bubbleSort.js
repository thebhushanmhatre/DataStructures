// Bubble Sort
// Push the max to the last by adjacent swap

// let arr = [9, 8, 7, 6, 5, 4, 3];
let arr = [1, 2, 3, 4, 50, 8, 61];

for (let i = arr.length-1; i > 0; i--) {
  let sorted = true;
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[j+1]) {
      sorted = false;
      let max = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = max;
    }
  }
  if (sorted) {
    break;
  }
  console.log({i, arr: arr.join(', ')});

}

console.log('arr sorted after bubble sort algo: ', arr);

// O(n^2)
