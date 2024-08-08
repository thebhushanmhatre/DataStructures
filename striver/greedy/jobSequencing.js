// Given a set of n jobs where each job i has a deadline and profit associated with it.

// Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit associated with a job if and only if the job is completed by its deadline.

// Find the number of jobs done and the maximum profit.

// Note: Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job. Deadline of the job is the time on or before which job needs to be completed to earn the profit.

// Example 1:
// Input:
// N = 4
// Jobs = {(1,4,20),(2,1,10),(3,1,40),(4,1,30)}
// Output:
// 2 60
// Explanation:
// Job1 and Job3 can be done with
// maximum profit of 60 (20+40).

// Example 2:
// Input:
// N = 5
// Jobs = {(1,2,100),(2,1,19),(3,2,27),
//         (4,1,25),(5,1,15)}
// Output:
// 2 127
// Explanation:
// 2 jobs can be done with
// maximum profit of 127 (100+27).

// Your Task :
// You don't need to read input or print anything. Your task is to complete the function JobScheduling() which takes an integer n and an array Jobs(Job id, Deadline, Profit) as input and returns the count of jobs and maximum profit as a list or vector of 2 elements.

// Expected Time Complexity: O(nlogn)
// Expected Auxilliary Space: O(n)

// jobs: [id, deadline, profit][]

function maximizeProfit(jobs) {
  // sort as per profits
  // have a empty list to add jobs day by day
  // now keep filling the array as per deadline or before that
  let count = 0,
    profitSum = 0;
  jobs = jobs.sort((a, b) => b[2] - a[2]); // O(N * log(N))
  let dayList = new Array(jobs.length).fill(-1);
  for (let i = 0; i < jobs.length; i++) {
    let j = jobs[i][1];
    while (j >= 0) {
      if (dayList[j] == -1) {
        dayList[j] = jobs[i][0];
        profitSum += jobs[i][2];
        break;
      }
      j--;
    }
  }

  console.log('Max profit: ', profitSum);
}
// TC: O(N^logN + N*maxDeadline)
// SC: O(N)

// Can be optimized using DSU (Disjoint set union) graph algo

let jobs1 = [
  [1, 4, 20],
  [2, 1, 10],
  [3, 1, 40],
  [4, 1, 30],
];
let jobs2 = [
  [1, 2, 100],
  [2, 1, 19],
  [3, 2, 27],
  [4, 1, 25],
  [5, 1, 15],
];

let jobs3 = [
  [1, 2, 80],
  [2, 6, 70],
  [3, 6, 65],
  [4, 5, 60],
  [5, 4, 25],
  [6, 2, 22],
  [7, 4, 20],
  [8, 2, 10],
];

// maximizeProfit(jobs1);
// maximizeProfit(jobs2);
maximizeProfit(jobs3);
