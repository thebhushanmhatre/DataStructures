// Reverse an array using recursion

function reverseArrPara(arr, times = 0) {
  if (times > Math.floor(arr.length*0.5)) {
    console.log(arr);
  } else {
    let tmp = arr[times];
    arr[times] = arr[arr.length - times - 1];
    arr[arr.length - times - 1] = tmp;
    return reverseArrPara(arr, times+1);
  }
}

reverseArrPara([1, 2, 3, 4, 5, 6]);
reverseArrPara([1, 2, 3, 4, 5, 6, 7]);
reverseArrPara([3, 2, 4, 5, 6, 7, 9, 8]);

