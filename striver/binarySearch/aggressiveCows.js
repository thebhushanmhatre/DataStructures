// You are given an array ‘arr’ of size ‘n’ which denotes the position of stalls.
// You are also given an integer ‘k’ which denotes the number of aggressive cows.
// You are given the task of assigning stalls to ‘k’ cows such that the minimum distance between any two of them is the maximum possible.
// Find the maximum possible minimum distance.

// Example 1:
// Input Format: k = 4, arr[] = {0,3,4,7,10,9}
// Result: 3
// Explanation: The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions {0, 3, 7, 10}. Here the distances between cows are 3, 4, and 3 respectively. We cannot make the minimum distance greater than 3 in any ways.

// Example 2:
// Input Format: k = 2, arr[] = {4,2,1,3,6}
// Result: 5

function findMaxMinDistance_brute(k, arr) {
  arr.sort((a, b) => a - b);

  // brute:
  let distance = 1;
  while (distance <= arr[arr.length - 1] - arr[0]) {
    if (isPossible(arr, distance, k)) {
      distance++;
    } else {
      break;
    }
  }
  return distance - 1;
}

function isPossible(arr, dt, k) {
  let previous = 0;
  k--;
  for (let i = 1; i < arr.length; i++) {
    let distance = arr[i] - arr[previous];
    if (distance >= dt) {
      previous = i;
      k--;
    }
    if (k <= 0) return true;
  }
  return false;
}

// using_binarySearch
function findMaxMinDistance(k, arr) {
  arr.sort((a, b) => a - b);
  let low = 0,
    high = arr[arr.length - 1] - arr[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let isMidPossible = isPossible(arr, mid, k);

    if (isMidPossible) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

console.log(findMaxMinDistance(4, [0, 3, 4, 7, 10, 9]));
console.log(findMaxMinDistance(2, [4, 2, 1, 3, 6]));
