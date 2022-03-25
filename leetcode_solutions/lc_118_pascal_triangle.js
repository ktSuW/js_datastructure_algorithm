"use Strict";
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// Approach : Add 1 to beginning and end
// Iterate from 1 to the whole row and get values from above row
// Time O(n)
// Space O(1) - pascalTriangle [] space is ignored since it is the answer
var generate = function (numRows) {
  let pascalTriangle = [];
  for (let i = 0; i < numRows; i++) {
    // Initialise for the current row
    // of the triangle
    pascalTriangle[i] = [];
    // Add element to the beginning index
    pascalTriangle[i][0] = 1;
    // Add element to the last element of the index
    for (let j = 1; j < i; j++) {
      pascalTriangle[i][j] =
        pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    }
    pascalTriangle[i][i] = 1;
  }
  return pascalTriangle;
};

let numRows = 4;
// console.log(generate(numRows));

// Approach : Better naming and stack
// Time O(n)
// Space O(n) - stack use
var generate_1 = function (numRows) {
  const pascalTriangle = [];
  for (let i = 0; i < numRows; i++) {
    // currRow as stack
    let currRow = new Array(i).fill(1);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        currRow.push(pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]);
      }
    }
    pascalTriangle.push(currRow);
  }
  return pascalTriangle;
;

console.log(generate_1(numRows));
