// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

function minIntervalsToRemove(intervals) {
  let count = 0;
  // sort as per ent time
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let freeTime = intervals[0][1];

  console.log({ intervals, freeTime });

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < freeTime) {
      console.log(intervals[i], 'needs to be removed');
      count++;
    } else {
      freeTime = intervals[i][1];
    }
  }
  console.log('minimum intervals that need to be removed: ', count);
}
// TC: N log N + N
// SC: O(1)

let intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
let intervals2 = [
  [1, 2],
  [1, 2],
  [1, 2],
];
let intervals3 = [
  [1, 2],
  [2, 3],
];
let intervals4 = [
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
];
// 1              100
//     11     22
// 1   11
//   2    12

let intervals5 = [
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
];
// 0 1 2 3 4 5 6
// 0   2
//   1   3
//     2   4
//       3   5
//         4   6

// minIntervalsToRemove(intervals);
// minIntervalsToRemove(intervals2);
// minIntervalsToRemove(intervals3);
// minIntervalsToRemove(intervals4);
minIntervalsToRemove(intervals5);
