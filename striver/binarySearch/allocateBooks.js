/*
Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. 
There are a ‘m’ number of students, and the task is to allocate all the books to the students.
Allocate books in such a way that:

1. Each student gets at least one book.
2. Each book should be allocated to only one student.
3. Book allocation should be in a contiguous manner.

You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is  minimum. If the allocation of books is not possible. return -1



Example 1:
Input Format: n = 4, m = 2, arr[] = {12, 34, 67, 90}
Result: 113
Explanation: The allocation of books will be 12, 34, 67 | 90. One student will get the first 3 books and the other will get the last one.

Example 2:
Input Format: n = 5, m = 4, arr[] = {25, 46, 28, 49, 24}
Result: 71
Explanation: The allocation of books will be 25, 46 | 28 | 49 | 24.
*/

function isAllocationPossible(books, minMax, noOfStudents) {
  let sum = 0;
  for (let i = 0; i < books.length; i++) {
    // console.log({ i, minMax, noOfStudents, sum });
    sum += books[i];
    if (sum > minMax) {
      sum = books[i];
      noOfStudents--;
    }
  }

  if (noOfStudents <= 0) {
    return false;
  }
  return true;
}

function allocateBooks(books, noOfStudents) {
  if (noOfStudents > books.length) return -1;

  let min = Math.max(...books);
  let sum = books.reduce((acc, val) => acc + val, 0);
  // // brute: linear search
  // for (let i = min; i <= sum; i++) {
  //   if (isAllocationPossible(books, i, noOfStudents)) {
  //     return i;
  //   }
  // }

  // binary search
  while (min <= sum) {
    let minMax = Math.floor((min + sum) / 2);
    let isPossible = isAllocationPossible(books, minMax, noOfStudents);

    if (isPossible) {
      sum = minMax - 1;
    } else {
      min = minMax + 1;
    }
  }

  return min;
}

console.log(allocateBooks([12, 34, 67, 90], 2));
console.log(allocateBooks([25, 46, 28, 49, 24], 4));

// Similar: https://leetcode.com/problems/split-array-largest-sum/description/
