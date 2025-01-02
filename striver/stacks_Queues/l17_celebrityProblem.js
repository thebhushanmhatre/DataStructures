// Celebrity Problem
// everyone knows him but he knows no-one
// in grid, if grid[i][j] = 0 signifies i knows j
// grid[x][x] will always be zero

function _findCelebrity(grid) {
  let friendCount = new Array(grid.length).fill(0); // should be 0
  let followerCount = new Array(grid.length).fill(0); // should be n-1

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j]) {
        friendCount[i]++;
        followerCount[j]++;
      }
    }
  }

  let celebrityIndex = -1; // there can be 0 or 1 celebrity (n-1)
  for (let i = 0; i < friendCount.length; i++) {
    if (friendCount[i] == 0 && followerCount[i] == grid.length - 1) {
      celebrityIndex = i;
    }
  }

  console.log(
    celebrityIndex
      ? 'Celebrity is ' + celebrityIndex
      : 'Celebrity does not exists'
  );
}
// TC : N^2
// SC : 2N

// optimize
function findCelebrity(grid) {
  let start = 0,
    end = grid.length - 1;

  while (end > start) {
    if (!grid[start][end] && !grid[end][start]) {
      start++;
      end--;
    }

    if (grid[start][end]) {
      start++;
    }

    if (grid[end][start]) {
      end--;
    }
  }

  if (start > end) {
    console.log('Celebrity does not exists, knows');
    return -1;
  }

  // Confirming the celebrity
  let celebrityIndex = -1;
  if (start === end) {
    celebrityIndex = start;
    for (let i = 0; i < grid.length; i++) {
      if (i == celebrityIndex) continue;

      if (grid[celebrityIndex][i]) {
        celebrityIndex = -1;
        console.log('Celebrity does not exists, knows', i);
        return -1;
      }

      if (grid[i][celebrityIndex] == 0) {
        celebrityIndex = -1;
        console.log('Celebrity does not exists, ', i, ' doesnt know him');
        return -1;
      }
    }

    console.log('Celebrity is at index ', celebrityIndex);
    return celebrityIndex;
  }
}

let grid = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

findCelebrity(grid);
