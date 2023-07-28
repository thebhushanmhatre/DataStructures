// Given a sorted array of integers arr and an integer target,
// find the index of the first and last position of target in arr.
// If target can't be found in arr, return [-1,-1]
// Example:
// arr = [2,4,5,5,5,5,5,6,7,8,9,10]
// target = 5
// output = [2,6]

function positions (arr, target) {
  console.log(`arr ${arr} target ${target}`);

  var firstPos = -1;
  var lastPos = -1;

  arr.forEach((item, index) => {
    if (firstPos == -1 && item == target) {
      firstPos = index;
    }
    if (item == target) {
      lastPos = index;
    }
  });

  return [firstPos, lastPos];
}


function positions_using_binarySearch(arr, target) {
  console.log(`arr ${arr} target ${target}`);
  return [findFirstPos(arr, target), findLastPos(arr, target)];
}

function findFirstPos(arr, target) {
  if (arr[0] > target) {
    return -1;
  }
  if (arr[0] == target) {
    return 0;
  }
  var left = 0;
  var right = arr.length - 1;
  while (right >= left) {
    var mid = Math.round((left + right)*0.5);
    if (arr[mid] == target && arr[mid - 1] < target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid+1;
    } else {
      right = mid-1;
    }
  }
  return -1;
}

function findLastPos(arr, target) {
  if (arr[arr.length-1] < target) {
    return -1;
  }
  if (arr[arr.length - 1] == target) {
    return (arr.length - 1);
  }
  var left = 0;
  var right = arr.length - 1;
  while (right >= left) {
    var mid = Math.round((left + right) * 0.5);
    if (arr[mid] == target && arr[mid + 1] > target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}


console.log(positions_using_binarySearch([2, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10], 5)); // 2,6
console.log(positions_using_binarySearch([2, 3, 4, 4, 6, 6, 6, 6, 7, 8, 9, 10], 6)); // 4,7
console.log(positions_using_binarySearch([2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10], 3)); // 1,3


// console.log(positions([2, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10], 5)); // 2,6
// console.log(positions([2, 3, 4, 4, 6, 6, 6, 6, 7, 8, 9, 10], 6)); // 4,7
// console.log(positions([2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10], 3)); // 1,3
