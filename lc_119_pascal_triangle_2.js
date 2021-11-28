/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function (rowIndex) {
  let ans = [1];

  for (let i = 0; i <= rowIndex; i++) {
    ans[i] = [];
    ans[i][0] = 1;
    ans[i][i] = 1;
    for (let j = 1; j < i; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
  }
  return ans[rowIndex];
};

let rowIndex = 4;
//console.log(getRow(rowIndex));

var getRow_1 = function (rowIndex) {
  var row = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) {
        row[j] = 1;
      } else {
        row[j] = row[j - 1] + row[j];
      }
    }
  }
  return row;
};

console.log(getRow(rowIndex));
console.log(getRow_1(rowIndex));
