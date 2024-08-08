// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits of size N, where fruits[i]  is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow :

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick e  tree (including the start tree) while moving to the right. The picked fruits must fit in one of the baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:
// Input:
// fruits = [ 2, 1, 2 ]
// Output: 3
// Explanation: We can pick from all three trees.

// Example 2:
// Input:
// fruits = [ 0, 1, 2, 2, 2, 2 ]
// Output: 5
// Explanation: It's optimal to pick from trees(0-indexed) [1,2,3,4,5].

// brute
// generate all subarray and stop when no of unique fruits > 2

function __maxFruitsPick(arr) {
  let maxFruits = 2; // assuming there atleast 2 trees
  // brute
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let fruits = arr.slice(i, j + 1);
      let uniqueFruitsSize = new Set(fruits).size;

      if (uniqueFruitsSize > 2) {
        break;
      } else if (uniqueFruitsSize == 2) {
        if (fruits.length > maxFruits) {
          maxFruits = fruits.length;
        }
      }
    }
  }

  console.log('Max no of fruits that can be selected: ', maxFruits);
} // This takes N^2, So need to optimize it

// sliding window with two pointer

function _maxFruitsPick(arr) {
  let maxFruits = 2; // assuming there atleast 2 trees
  let left = 0,
    right = 0,
    count = 0,
    freq = {};

  while (right < arr.length && left <= right) {
    if (freq[arr[right]]) {
      freq[arr[right]] = freq[arr[right]] + 1;
    } else {
      freq[arr[right]] = 1;
    }
    right++;
    count++;

    while (Object.keys(freq).length > 2 && left <= right) {
      // console.log('in second loop');
      if (freq[arr[left]] == 1) {
        delete freq[arr[left]];
      } else {
        freq[arr[left]] = freq[arr[left]] - 1;
      }
      left++;
      count--;
    }

    if (count > maxFruits) {
      maxFruits = count;
    }
  }

  console.log('Max no of fruits that can be selected: ', maxFruits);
} // This takes 2 N = Both left and right traverse

function maxFruitsPick(arr) {
  let maxFruits = 2; // assuming there atleast 2 trees
  let left = 0,
    right = 0,
    count = 0,
    freq = {};

  while (right < arr.length && left <= right) {
    if (freq[arr[right]]) {
      freq[arr[right]] = freq[arr[right]] + 1;
    } else {
      freq[arr[right]] = 1;
    }
    right++;
    count++;

    // WHILE BECOMES IF
    if (Object.keys(freq).length > 2 && left <= right) {
      if (freq[arr[left]] == 1) {
        delete freq[arr[left]];
      } else {
        freq[arr[left]] = freq[arr[left]] - 1;
      }
      left++;
      count--;

      // ADDING right to preserve window
      if (count < maxFruits) {
        if (freq[arr[right]]) {
          freq[arr[right]] = freq[arr[right]] + 1;
        } else {
          freq[arr[right]] = 1;
        }
        right++;
        count++;
      }
    }

    if (Object.keys(freq).length <= 2 && count > maxFruits) {
      maxFruits = count;
    }
  }

  console.log('Max no of fruits that can be selected: ', maxFruits);
}

let fruits1 = [2, 1, 2];
let fruits2 = [0, 1, 2, 2, 2, 2];
let fruits3 = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
//             0  1  2 [3  4  5  6  7] 8  9  10

maxFruitsPick(fruits1);
maxFruitsPick(fruits2);
maxFruitsPick(fruits3);
