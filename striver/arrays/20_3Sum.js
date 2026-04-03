// Find all three nums such that their sum is zero
// return list of unique triplets

function incrementJ(j, nums, k) {
  j++;
  while (j < k && nums[j - 1] == nums[j]) {
    j++;
  }
  return j;
}

function decrementK(k, nums, j) {
  k--;
  while (j < k && nums[k + 1] == nums[k]) {
    k--;
  }
  return k;
}

function findTriplets(nums) {
  // sorting in ascending order
  nums = nums.sort((a, b) => a - b);
  let n = nums.length - 1;

  let result = [];

  let i = 0;
  while (i <= n) {
    if (nums[i] > 0) {
      break;
    }

    // fix i, look for j and k

    let j = i + 1,
      k = n;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        result.push([nums[i], nums[j], nums[k]]);

        // after matching
        // j and k should go to next "new" number
        j = incrementJ(j, nums, k);
        k = decrementK(k, nums, j);
      } else if (sum > 0) {
        // k-- // this will also do
        k = decrementK(k, nums);
      } else {
        // j++ // this will also do
        j = incrementJ(j, nums);
      }
    }

    // i should also move to next number
    i++;
    while (i < n && nums[i] == nums[i - 1]) {
      i++;
    }
  }

  console.log('All the Triplets with sum zero are', result);
}

let nums = [-2, -2, -2, -1, -1, -1, -1, 0, 0, 0, 2, 2, 2];
//           0   1   2   3   4   5   6  7  8  9  10 11 12

findTriplets(nums);
