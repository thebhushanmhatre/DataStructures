function findNum(arr, num) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (num == arr[mid]) {
      return mid;
    } else if (num > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr = [-5, 2, 4, 6, 10];
console.log(findNum(arr, 10));
console.log(findNum(arr, 6));
console.log(findNum(arr, 20));
console.log(findNum(arr, -5));
