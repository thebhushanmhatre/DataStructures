//
// arr: [4, 7, 1, 1, 2, -3, -7, 17, 15, -16];
// array of aestroid sizes, negative means moving in left direction

// on collision, smaller one is destroyed
// in case of equal, both are destroyed

// result in above example: [4, 17]

function willCollide(prev, next) {
  if (prev > 0 && next < 0) {
    return true;
  }
  return false;
}

// note <- -> are not going to collide

function remainingOnes(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // not a collision case
    if (!willCollide(result[result.length - 1], nums[i])) {
      // console.log('adding', nums[i]);
      result.push(nums[i]);
    } else {
      // collision case
      let currentIsDestroyed = false;
      while (
        result.length > 0 &&
        willCollide(result[result.length - 1], nums[i])
      ) {
        let top = result[result.length - 1];
        if (Math.abs(top) == Math.abs(nums[i])) {
          // both destroyed
          // console.log(top, 'and', nums[i], 'are both destroyed');

          result.pop();
          currentIsDestroyed = true;
          break;
        } else if (Math.abs(top) < Math.abs(nums[i])) {
          // prev is destroyed
          // console.log(top, 'is destroyed');
          result.pop();
        } else {
          // current is destroyed
          // console.log(nums[i], 'is destroyed');
          currentIsDestroyed = true;
          break;
        }
      }

      if (!currentIsDestroyed) {
        result.push(nums[i]);
      }
    }
  }

  console.log('Remaining aestroids are ', result);
  return result;
}

remainingOnes([4, 7, 1, 1, 2, -3, -7, 17, 15, -16]);
remainingOnes([-4, 7, 1, 1, 2, -3, -7, 17, 15, -16]);
