// Find Square root of an integer (return integer value => floor)

function findSqrt(num) {
  if (num === 1) return 1;
  let low = 0;
  let high = num;
  let ans = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    // console.log([low, mid, high]);

    if (mid * mid <= num) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log('=========================');
  console.log(
    'Sqrt of ',
    num,
    ' is ',
    ans,
    ', To be exact should be',
    Math.sqrt(num)
  );
  console.log('=========================');
}

findSqrt(4);
findSqrt(8);
findSqrt(12);
findSqrt(36);
findSqrt(30);
findSqrt(49);
findSqrt(50);
findSqrt(99);
