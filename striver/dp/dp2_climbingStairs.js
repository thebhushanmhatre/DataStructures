function _climbingStairs(num) {
  if (num < 0) return 0;
  if (num == 0) return 1;
  return climbingStairs(num - 1) + climbingStairs(num - 2);
}

// pattern is fibonacci: optimizing it
function climbingStairs(num) {
  let ans = [1, 1];
  for (let i = 2; i < num; i++) {
    ans[i] = ans[i - 1] + ans[i - 2];
  }
  return ans[num - 1] + ans[num - 2];
}

let noOfWays = climbingStairs(5);
console.log({ noOfWays });

// For 4: 5
// 1 1 1 1
// 1 1 2
// 1 2 1
// 2 1 1
// 2 2

// For 5: 8
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 1 2
// 2 2 1

// fib:  1 1 2 3 5 8 13 21
// index:0 1 2 3 4 5
