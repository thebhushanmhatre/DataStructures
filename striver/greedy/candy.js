// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

// Example 1:
// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:
// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

function _minCandyRequired(ratings) {
  let candies = [1];

  // loop asc
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies.push(candies[i - 1] + 1);
    } else {
      candies.push(1);
    }
  }

  // loop desc
  let sum = candies[candies.length - 1];
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
    }
    sum += candies[i];
  }

  console.log('Minimum candies required are', sum, candies);
}
// TC: 2N
// SC: N

// using slope
function minCandyRequired(ratings) {}
// https://www.youtube.com/watch?v=IIqVFvKE6RY&list=PLgUwDviBIf0rF1w2Koyh78zafB0cz7tea&index=15

let ratings1 = [1, 0, 2];
let ratings2 = [1, 2, 2];
let ratings3 = [1, 2, 3];
let ratings4 = [0, 2, 4, 3, 2, 1, 1, 3, 5, 6, 4, 0, 0];
let ratings5 = [1, 3, 2, 1];

minCandyRequired(ratings1);
minCandyRequired(ratings2);
minCandyRequired(ratings3);
minCandyRequired(ratings4);
minCandyRequired(ratings5);
