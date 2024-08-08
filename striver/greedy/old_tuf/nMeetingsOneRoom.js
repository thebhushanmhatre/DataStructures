// N meetings in One room

// Qn: There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
// What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time?

// Note: Start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

let N = 6;
let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];

function maxMeetings(N, start, end) {
  console.log({ N, start, end });
}

maxMeetings(N, start, end); // ans: 
