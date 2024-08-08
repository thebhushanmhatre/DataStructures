// Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
// Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.

// Examples:

// Input: arr[] = [900, 0940, 0950, 1100, 1500, 1800],
//             dep[] = [0910, 1200, 1120, 1130, 1900, 2000]
// Output: 3
// Explanation: There are three trains during the time 0940 to 1200. So we need minimum 3 platforms.

// Input: arr[] = [0900, 1235, 1100],
//             dep[] = [1000, 1240, 1200]
// Output: 1
// Explanation: All train times are mutually exlusive. So we need only one platform

// Input: arr[] = [1000, 0935, 1100],
//             dep[] = [1200, 1240, 1130]
// Output: 3
// Explanation: All 3 trains have to be their from 11:00 to 11:30

// Note: Time intervals are in the 24-hour format(HHMM) , where the first two characters represent hour (between 00 to 23 ) and the last two characters represent minutes (this will be <= 59 and >= 0).

// Expected Time Complexity: O(nLogn)
// Expected Auxiliary Space: O(n)

// brute force solution
// Find number of intersections
// TC: N^2

// sort and use 2 pointer
function minPlatformsRequired(arrivals, departures) {
  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);

  let start = 0,
    end = 0;
  let result = 0;
  let count = 0;

  while (start < arrivals.length && end < departures.length) {
    if (arrivals[start] <= departures[end]) {
      count++;
      start++;
    } else {
      count--;
      end++;
    }

    if (count > result) {
      result = count;
    }
  }

  console.log('Minimum Platforms required are ', result);
}

let arr1 = [900, 940, 950, 1100, 1500, 1800],
  dep1 = [910, 1200, 1120, 1130, 1900, 2000];

let arr2 = [900, 1235, 1100],
  dep2 = [1000, 1240, 1200];

let arr3 = [1000, 935, 1100],
  dep3 = [1200, 1240, 1130];

minPlatformsRequired(arr1, dep1);
minPlatformsRequired(arr2, dep2);
minPlatformsRequired(arr3, dep3);