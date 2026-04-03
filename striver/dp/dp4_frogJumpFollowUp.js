// Qn: Given a number of stairs and a frog, the frog wants to climb from the 0th stair to the (N-1)th stair. At a time the frog can climb one, two,... or k steps. A height[N] array is also given. Whenever the frog jumps from a stair i to stair j, the energy consumed in the jump is abs(height[i]- height[j]), where abs() means the absolute difference. We need to return the minimum energy that can be used by the frog to jump from stair 0 to stair N-1.

function frogJump(hts, index, k) {
  const mem = new Array().fill(null);
  mem[0] = 0;
  mem[1] = Math.abs(hts[0] - hts[1]);

  for (let i = 2; i < hts.length; i++) {
    const possibleJumps = [];
    for (let j = 1; j <= k; j++) {
      if (i - j >= 0) {
        possibleJumps.push(mem[i - j] + Math.abs(hts[i - j] - hts[i]));
      }
    }
    mem[i] = Math.min(...possibleJumps);
  }

  return mem[hts.length - 1];
}

let hts = [10, 40, 30, 10];
console.log('frogJump: ', frogJump(hts, hts.length - 1, 2));

let hts2 = [10, 40, 50, 20, 60];
console.log('frogJump: ', frogJump(hts2, hts2.length - 1, 3));

// Picking examples from here: https://www.naukri.com/code360/problems/minimal-cost_8180930