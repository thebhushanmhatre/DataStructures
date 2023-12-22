// Selection sort
// What do we select ? => Minimums
// Select the minimums and swap

let arr = [9, 8, 7, 6, 5, 4, 3];

for (let i = 0; i < arr.length-1; i++) {
  // select the minimum from unsorted arr
  let minimumIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    console.log('run')
    if (arr[j] < arr[minimumIndex]) {
      minimumIndex = j;
    }
  }
  // swap
  let minimum = arr[minimumIndex];
  arr[minimumIndex] = arr[i];
  arr[i] = minimum;
}

console.log('arr sorted after selection sort algo: ', arr);

// O(n^2): Worst
// O(n) : Best case: For already sorted