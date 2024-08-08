// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

function insertInterval(intervals, newInterval) {
  let result = [];
  let intervalAdded = false;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      // new Interval is beyond current interval
      result.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      // new Interval is before current interval
      if (!intervalAdded) {
        result.push(newInterval);
        intervalAdded = true;
      }
      result.push(intervals[i]);
    } else {
      // merge interval
      let start = Math.min(intervals[i][0], newInterval[0]);

      while (
        newInterval[1] > intervals[i][1] &&
        newInterval[1] >= intervals[i + 1][0]
      ) {
        i++;
      }

      let end = Math.max(intervals[i][1], newInterval[1]);
      result.push([start, end]);
      intervalAdded = true;
    }
  }

  if (!intervalAdded) {
    result.push(newInterval);
  }
  console.log('Resulting intervals are', result);
}

let intervals1 = [
    [1, 3],
    [6, 9],
  ],
  newInterval1 = [2, 5];
let intervals2 = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  newInterval2 = [4, 8];

insertInterval(intervals1, newInterval1);
insertInterval(intervals2, newInterval2);