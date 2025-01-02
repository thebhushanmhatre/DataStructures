// // find total units of water stored in between building

// // This is not optimal one

// function getRightMax(nums) {
//   const nextMaxElements = [];
//   let max = -1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] >= max) {
//       nextMaxElements.unshift(-1);
//       max = nums[i];
//     } else {
//       nextMaxElements.unshift(max);
//     }
//   }
//   return nextMaxElements;
// }

// function getLeftMax(nums) {
//   const prevMaxElements = [];
//   let max = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= max) {
//       prevMaxElements.push(-1);
//       max = nums[i];
//     } else {
//       prevMaxElements.push(max);
//     }
//   }
//   return prevMaxElements;
// }

// function calculateWaterStored(nums) {
//   let result = 0;
//   const rmax = getRightMax(nums);
//   const lmax = getLeftMax(nums);

//   for (let i = 0; i < nums.length; i++) {
//     if (rmax[i] > 0 && lmax[i] > 0) {
//       const minMax = Math.min(rmax[i], lmax[i]);
//       if (minMax > nums[i]) {
//         result += minMax - nums[i];
//       }
//     }
//   }

//   console.log('Total water stored is ', result, 'units');
//   return result;
// }

// calculateWaterStored([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6

// calculateWaterStored([2, 1, 0, 5, 3]); // 3

// // rough work (ignore)
// // arr: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// // pge: [-, -, 1, -, 2, 1, 2, -, 3, 2, 3, 2] // previous greater element
// // nge: [1, 2, 2, 3, 3, 1, 3, -, -, 2, -, -] // next greater element
// //       -  -  1  -  1  1  1  -  -  1  -  -
// // if pge and nge both exists then min of those minus current height

// // instead of GREATER, look for MAX on both side

// // Above is not optimal one

function calculateWaterStored(nums) {
  let leftMax = 0,
    rightMax = 0,
    left = 0,
    right = nums.length - 1; // two pointers
  let total = 0;

  while (right > left) {
    if (leftMax <= rightMax) { // keep the min max moving
      if (nums[left] > leftMax) {
        leftMax = nums[left];
      } else {
        total += leftMax - nums[left];
      }
      left++;
    } else {
      if (nums[right] > rightMax) {
        rightMax = nums[right];
      } else {
        total += rightMax - nums[right];
      }
      right--;
    }
  }

  console.log('Total water stored is', total, 'units');
  return total;
}

calculateWaterStored([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6

calculateWaterStored([2, 1, 0, 5, 3]); // 3
