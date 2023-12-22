// Insertion Sort
// Take an element and place it in its current order
 
let arr = [9, 8, 7, 6, 5, 4, 3];
// let arr = [1,2,4,6,7,9,0];

for (let i = 1; i < arr.length; i++) {
  let j = i;
  while (j > 0 && arr[j] < arr[j-1]) {
    // swap the the elements
    let temp = arr[j];
    arr[j] = arr[j-1];
    arr[j-1] = temp;
    // decrease "j" to do further check
    j--;
  }
}


console.log('arr sorted after insertion sort algo: ', arr);

// O(n^2): Worst
// O(n) : Best case: For already sorted