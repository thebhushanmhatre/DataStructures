// ninja's training
// N day training schedule
// Cannot do same trainig on consecutive days
// Each activity will have different points on different days
// Example:
// For 2 day training schedule:
// day1: [ 10,  50,  1 ]
// day2: [  5, 100, 11 ]
// result = 10 + 100 = 110 - max points earned
// cannot select 50 and 100 on consecutive days

// using recursion
function _maximizeTraining(n, pointsTable, sum = 0, prev = -1) {
  if (n == 0) return sum;

  let points = pointsTable[n - 1];
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    if (i != prev) {
      let num = maximizeTraining(n - 1, pointsTable, sum + points[i], i);
      max = Math.max(max, num);
    }
  }

  return max;
}

// for using recursion call
// const ans = maximizeTraining(2, [[10, 50, 1], [5, 100, 11]])
// console.log('ans: ', ans)

// Main difference wuthwith my solution is sum

// rewriting recursion and memoizing theto save the repetitve function calls
function maximizeTraining(n, prev, pointsTable, dp) {
  console.log('\nstart ', { n, prev });
  if (n == 0) {
    let max = 0;
    for (let i = 0; i < pointsTable[n].length; i++) {
      if (i != prev) {
        if (pointsTable[n][i] > max) {
          max = pointsTable[n][i];
        }
      }
    }
    return max;
  }

  if (dp[n][prev] >= 0) {
    return dp[n][prev];
  }

  let max = 0;
  for (let j = 0; j < pointsTable[n].length; j++) {
    if (j != prev) {
      let num = pointsTable[n][j] + maximizeTraining(n - 1, j, pointsTable, dp);
      if (num > max) {
        max = num;
      }
    }
  }

  return (dp[n][prev] = max);
}

// creating memoization space: n x pointsTable[0].length
let merits = [
  [10, 70, 12],
  [5, 100, 71],
  [2, 100, 12],
];
let n = 3;

let dp = new Array(n).fill(new Array(merits[0].length).fill(-1));
console.log('initializing dp: ', { dp, merits });

const ans = maximizeTraining(n - 1, merits[0].length, merits, dp);
console.log('ans: ', ans);
console.log('dp: ', dp);

//  i am not sure about solution
