// Geek is a software engineer. He is assigned with the task of calculating average waiting time of all the processes by following shortest job first policy.

// The shortest job first (SJF) or shortest job next, is a scheduling policy that selects the waiting process with the smallest execution time to execute next.

// Given an array of integers bt of size n. Array bt denotes the burst time of each process. Calculate the average waiting time of all the processes and return the nearest integer which is smaller or equal to the output.

// Note: Consider all process are available at time 0.

// Example 1:
// Input:
// n = 5
// bt = [4,3,7,1,2]
// Output: 4
// Explanation: After sorting burst times by shortest job policy, calculated average waiting time is 4.

// Example 2:
// Input:
// n = 4
// arr = [1,2,3,4]
// Output: 2
// Explanation: After sorting burst times by shortest job policy, calculated average waiting time is 2.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function solve() which takes bt[] as input parameter and returns the average waiting time of all the processes.

// Expected Time Complexity: O(nlog(n))
// Expected Auxiliary Space: O(1)

function sjf(processes) {
  let result = 0;
  processes = processes.sort((a, b) => a - b);
  let waitTime = 0;
  for (let i = 0; i < processes.length; i++) {
    result += waitTime;
    waitTime += processes[i];
  }
  result = Math.floor(result / processes.length);

  console.log('Avg waiting time is', result);
}

let bt1 = [4, 3, 7, 1, 2];
let bt2 = [1, 2, 3, 4];

sjf(bt1);
sjf(bt2);