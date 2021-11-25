/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * Time complexity - O(n)
 * Space complexity - O(1)
 * Two Pointers approach
 */
var twoSum = function (numbers, target) {
  let low = 0;
  let high = numbers.length;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum === target) {
      return [low + 1, high + 1];
    } else if (sum < target) {
      low++;
    } else {
      high--;
    }
  }
  return [];
};

console.log(twoSum([2, 3, 4, 5, 9], 8));
