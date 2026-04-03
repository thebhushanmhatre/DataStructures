** start of script.js **

function sym(...args) {
  let [arrA, arrB, ...rest] = args;

  let setA = new Set(arrA);
  let setB = new Set(arrB);
  let result = setA.symmetricDifference(setB);

  if (rest.length > 0) {
    return sym([...result], ...rest);
  } else {
    return [...result];
  }
}

sym([1, 2, 3], [5, 2, 1, 4]);

** end of script.js **

