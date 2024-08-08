// You are given timings of n meetings in the form of (start[i], end[i]) where start[i] is the start time of meeting i and end[i] is the finish time of meeting i. Return the maximum number of meetings that can be accommodated in a single meeting room, when only one meeting can be held in the meeting room at a particular time.

// Note: The start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

// Examples :

// Input: n = 6, start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
// Output: 4
// Explanation: Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)

// Input: n = 3, start[] = [10, 12, 20], end[] = [20, 25, 30]
// Output: 1
// Explanation: Only one meetings can be held with given start and end timings.

// Expected Time Complexity: O(n*logn)
// Expected Auxilliary Space: O(n)

function maxMeetings(start, end) {
  let meetings = []; // [start, end, position][]
  for (let i = 0; i < start.length; i++) {
    meetings.push([start[i], end[i], i + 1]);
  }

  // sort as per end time
  meetings.sort((a, b) => a[1] - b[1]);

  let possibleMeetings = [meetings[0][2]];
  let count = 1;
  let freeTime = meetings[0][1];

  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] > freeTime) {
      count++;
      freeTime = meetings[i][1];
      possibleMeetings.push(meetings[i][2]);
    }
  }

  console.log(count, 'Meetings possible', possibleMeetings);
}

let start1 = [1, 3, 0, 5, 8, 5],
  end1 = [2, 4, 6, 7, 9, 9];
let start2 = [10, 12, 20],
  end2 = [20, 25, 30];
let start3 = [0, 3, 1, 5, 5, 8],
  end3 = [5, 4, 2, 9, 7, 9]; // 4 Meetings possible [ 3, 2, 5, 6 ]

maxMeetings(start1, end1);
maxMeetings(start2, end2);
maxMeetings(start3, end3);
