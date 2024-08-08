// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
// Your score is the sum of the points of the cards you have taken.
// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

let cardPoints = [1, 2, 3, 4, 5, 6, 1],
  k = 3; // Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

let cardPoints2 = [2, 2, 2],
  k2 = 2; // Output: 4;

let cardPoints3 = [9, 7, 7, 9, 7, 7, 9],
  k3 = 7; //Output: 55;

function _maximizePoints(arr, k) {
  let maxSum = 0;
  for (let i = 0; i <= k; i++) {
    let count = i;
    let sum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
    for (let j = i + 1; j <= k; j++) {
      sum += arr[arr.length - j];
      count++;
      if (count == k) {
        if (sum > maxSum) {
          maxSum = sum;
        }
        break;
      }
    }
  }
  console.log('max Score: ', maxSum);
}

function maximizePoints(arr, k) {
  // Better and simple way to write
  let leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < k; i++) {
    leftSum += arr[i];
  }
  let maxSum = leftSum;

  for (let j = 0; j < k; j++) {
    rightSum = rightSum + arr[arr.length - 1 - j];
    leftSum = leftSum - arr[j];
    let sum = leftSum + rightSum;

    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  console.log('max Score: ', maxSum);
}

maximizePoints(cardPoints, k);
maximizePoints(cardPoints2, k2);
maximizePoints(cardPoints3, k3);
