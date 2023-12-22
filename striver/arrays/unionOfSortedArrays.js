// Union of two sorted arrrays
// Repeated elements are not considered ... I think

let arr1 = [1,1,2,3,4,5]; 
let arr2 = [2,3,4,4,5,6];

let expected = [1,2,3,4,5,6];


let i = 0;
let j = 0;

// let union = new Set();
// while ((i < arr1.length) || (j < arr2.length)) {
//   // console.log({ i, j, arr1: arr1.join(' '), arr2: arr2.join(' ') })
//   if (i > arr1.length - 1) {
//     union.add(arr2[j]);
//     j++;
//   } else if (j > arr2.length - 1) {
//     union.add(arr1[i]);
//     i++;
//   } else if (arr1[i] < arr2[j]) {
//     union.add(arr1[i]);
//     i++;
//   } else if (arr1[i] == arr2[j]) {
//     union.add(arr1[i]);
//     i++;
//     j++;
//   } else {
//     union.add(arr2[j]);
//     j++;
//   }
// }

// Better Solution
let union = [];
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    if (union.length == 0 || arr1[i] != union[union.length - 1]) {
      union.push(arr1[i]);
    }
    i++;
  } else {
    if (union.length == 0 || arr2[j] != union[union.length - 1]) {
      union.push(arr2[j]);
    }
    j++;
  }
}

while (j < arr2.length) {
  if (union.length == 0 || arr2[j] != union[union.length - 1]) {
    union.push(arr2[j]);
  }
  j++;
}

while (i < arr1.length) {
  if (union.length == 0 || arr1[i] != union[union.length - 1]) {
    union.push(arr1[i]);
  }
  i++;
}

console.log(union.join(' '));