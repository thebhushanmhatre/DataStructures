// Given weights and values of n items, we need to put these items in a knapsack of capacity w to get the maximum total value in the knapsack. Return a double value representing the maximum value in knapsack.
// Note: Unlike 0/1 knapsack, you are allowed to break the item here. The details of structure/class is defined in the comments above the given function.

// Examples :

// Input: n = 3, w = 50, value[] = [60,100,120], weight[] = [10,20,30]
// Output: 240.000000
// Explanation: Take the item with value 60 and weight 10, value 100 and weight 20 and split the third item with value 120 and weight 30, to fit it into weight 20. so it becomes (120/30)*20=80, so the total value becomes 60+100+80.0=240.0 Thus, total maximum value of item we can have is 240.00 from the given capacity of sack.

// Input: n = 2, w = 50, value[] = [60,100], weight[] = [10,20]
// Output: 160.000000
// Explanation: Take both the items completely, without breaking. Total maximum value of item we can have is 160.00 from the given capacity of sack.
// Expected Time Complexity : O(n log n)
// Expected Auxilliary Space: O(1)

function maximizeValue(values, weights, capacity) {
  let result = 0;

  const valueByWeightsAndPosition = [];
  for (let i = 0; i < values.length; i++) {
    valueByWeightsAndPosition.push([values[i] / weights[i], i]);
  }

  valueByWeightsAndPosition.sort((a, b) => b[0] - a[0]);

  let i = 0;
  while (i < values.length && capacity > 0) {
    if (capacity < weights[i]) {
      break;
    }
    result += values[valueByWeightsAndPosition[i][1]];
    capacity -= weights[valueByWeightsAndPosition[i][1]];
    i++;
  }

  if (i < values.length && capacity > 0) {
    result += valueByWeightsAndPosition[i][0] * capacity;
  }

  console.log('Maximum value is ', result);
}

let value1 = [60, 100, 120],
  weight1 = [10, 20, 30],
  capacity1 = 50;

let value2 = [60, 100],
  weight2 = [10, 20],
  capacity2 = 50;

let value3 = [100, 60, 100, 200],
  weight3 = [20, 10, 50, 50],
  capacity3 = 90; // 380

maximizeValue(value1, weight1, capacity1);
maximizeValue(value2, weight2, capacity2);
maximizeValue(value3, weight3, capacity3);
