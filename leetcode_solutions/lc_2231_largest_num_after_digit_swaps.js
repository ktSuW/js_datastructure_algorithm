/**
 * @param {number} num
 * @return {number}
 */
// Time Complexity O(n^2)
// Space - O(1)
var largestInteger = function (num) {
  const numArr = String(num)
    .split("")
    .map((n) => {
      return Number(n);
    });
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[j] > numArr[i] && (numArr[j] - numArr[i]) % 2 === 0) {
        //swap
        let temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
      }
    }
  }
  // console.log(numArr);
  return parseInt(numArr.join(""));
};

// 0    1   2   3   4   index
// 6    5   8   7   5   elements
// i
//      j  || 5 > 6 (no) && 5 - 6 = -1 % 2 !== 0. Therefore no swap

// i        j  || 8 > 6 && 8 - 6 = 2 % 2 === 0, therefore swap

// 8    5   6   7   5  <--- after first swap
// i            j       <= no swap
// i                j   <= no swap
// ----------
// increment i
//       i   j          <= no swap
//       i       7      <= 7 > 5, 7 - 5 = 2 % 2 === 0, therefore swap
//  8    7  6   5   5
//       i          j    <= no swap
// ----------
// increment i .....
