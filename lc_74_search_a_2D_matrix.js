"use Strict";
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const target = 30;

//=============================================
// Approach : Brute Force
//=============================================
// Time O(m * n)
var searchMatrix_1 = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

//=============================================
// Approach : Binary Search for each row
// Therefore, reduces time complexity on row by log m
//=============================================
var searchMatrix_2 = function (matrix, target) {
  // Iterate each row
  for (let i = 0; i < matrix.length; i++) {
    // Do binary search
    let low = 0;
    let high = matrix[0].length - 1;
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);
      let midNum = matrix[i][mid];
      if (midNum === target) return true;
      else if (midNum < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};

console.log(searchMatrix_2(matrix, target));

//=============================================
// Approach : Binary Search , 2D  -> 1D sorted array
// with Two Pointers
//=============================================
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Time O(log m*n)
// Space O(1)
// Binary Search with Two Pointers approach
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  // row size
  let m = matrix.length;
  // col size
  let n = matrix[0].length;

  //Treat the whole matrix as sorted array
  let low = 0;
  let high = m * n - 1;

  while (low <= high) {
    // mid index in the sorted array of 1D
    let mid = Math.floor(low + (high - low) / 2);
    // mid number of the matrix 2D
    // Since it is 2D, I need to get row and col indexes
    // 0    1   2   3
    // 4    5   6   7
    // 8    9   10  11
    let midNum = matrix[Math.floor(mid / n)][mid % n];

    //Do binary search
    if (midNum === target) {
      //console.log(`${target} is found!`);
      return true;
    } else if (midNum < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  //console.log(`${target} is not in the matrix!`);
  return false;
};

// console.log(searchMatrix(matrix, target));
