// Intersection of two sorted arrrays

let arr1 = [1,2,2,3,3,4,5,6]; 
let arr2 = [2,3,3,5,6,6,7];

let expected = [2,3,3,5,6];


let i = 0;
let j = 0;
let intersection = [];

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] === arr2[j]) {
    intersection.push(arr1[i]);
    i++;
    j++;
  } else if (arr1[i] > arr2[j]) {
    j++;
  } else {
    i++;
  }
}

console.log('result: ', intersection.join(' '));
console.log('expectation: ', expected.join(' '));
console.log((intersection.join(' ') === expected.join(' ')) ? 'Success' : 'Failure')
