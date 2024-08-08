// Qn: Given a number of stairs and a frog, the frog wants to climb from the 0th stair to the (N-1)th stair. At a time the frog can climb either one or two steps. A height[N] array is also given. Whenever the frog jumps from a stair i to stair j, the energy consumed in the jump is abs(height[i]- height[j]), where abs() means the absolute difference. We need to return the minimum energy that can be used by the frog to jump from stair 0 to stair N-1.

// solving for at max 2 jumps at a time

// recursive way
function _frogJump(hts, index) {
  if (index == 0) {
    return 0;
  }

  let oneStep =
    frogJump(hts, index - 1) + Math.abs(hts[index] - hts[index - 1]);
  let twoStep = Number.MAX_SAFE_INTEGER;
  if (index > 1) {
    twoStep = frogJump(hts, index - 2) + Math.abs(hts[index] - hts[index - 2]);
  }

  return Math.min(oneStep, twoStep);
}

// using memoization
function _frogJump(hts, index, mem = {}) {
  if (mem[index]) {
    return mem[index];
  }
  if (index == 0) {
    return 0;
  }

  let oneStep =
    frogJump(hts, index - 1) + Math.abs(hts[index] - hts[index - 1]);
  let twoStep = Number.MAX_SAFE_INTEGER;
  if (index > 1) {
    twoStep = frogJump(hts, index - 2) + Math.abs(hts[index] - hts[index - 2]);
  }
  mem[index] = Math.min(oneStep, twoStep);

  return mem[index];
}
// note: we could have used array here instead of object

// converting recursion to a loop (tabulation)
function _frogJump(hts, index) {
  const mem = new Array().fill(null);
  mem[0] = 0;
  mem[1] = Math.abs(hts[0] - hts[1]);

  for (let i = 2; i < hts.length; i++) {
    let oneStep = mem[i - 1] + Math.abs(hts[i - 1] - hts[i]);
    let twoStep = mem[i - 2] + Math.abs(hts[i - 2] - hts[i]);
    mem[i] = Math.min(oneStep, twoStep);
  }

  return mem[hts.length - 1];
}

// using space optimization
function frogJump(hts, index) {
  let secondLast = 0;
  let last = Math.abs(hts[1] - hts[0]);

  for (let i = 2; i < hts.length; i++) {
    let oneStep = last + Math.abs(hts[i - 1] - hts[i]);
    let twoStep = secondLast + Math.abs(hts[i - 2] - hts[i]);
    secondLast = last;
    last = Math.min(oneStep, twoStep);
  }

  return last;
}

hts = [30, 10, 60, 10, 60, 50];
console.log('frogJump: ', frogJump(hts, hts.length - 1));
