/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// Time : O(m*n)
// Space : O(m+n)
var setZeroes = function (matrix) {
  // Keep track of row and cols that are 0
  // Create sets by passing an Array
  // new Set() constructor
  const zeroRow = new Set();
  const zeroCol = new Set();

  // Find 0 in the given matrix
  // add them to sets: zeroRow and zeroCol
  // This way, we mark them
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        // add() add a new element to the Set
        zeroRow.add(i);
        zeroCol.add(j);
      }
    }
  }
  // Iterate over 2D array again
  // Use zeroRow and zeroCol sets,
  // update elements to 0 where needed
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // has() return true if a value exists
      if (zeroRow.has(i) || zeroCol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log("Creating 2D array");
let twoDArray = new Array([0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]);

console.log(setZeroes(twoDArray));
