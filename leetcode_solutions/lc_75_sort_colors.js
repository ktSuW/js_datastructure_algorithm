"use Strict";
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  Approach 1: Sort the array
//  in built method - sorts the elements in place
//  Time O(n log n)
//  Space O(1)
//  Sorting is stable
const nums = [2, 0, 1, 1, 0, 2];
var sortColors_1 = function (nums) {
  return nums.sort();
};

// Approach 2: Count sort
//             Number  Count
//             0       2
//             1       2
//             2       2

//             Find 2 times and insert 0 to the array
//             Find 2 times and insert 1 to the array, etc.
//             Time O(n) + O(n)
//                 = 2 passes
var sortColors_2 = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        zero++;
        break;
      case 1:
        one++;
        break;
      case 2:
        two++;
        break;
    }
  }
  for (let i = 0; i < zero; i++) {
    nums[i] = 0;
  }

  for (let i = zero; i < zero + one; i++) {
    nums[i] = 1;
  }

  for (let i = zero + one; i < zero + one + two; i++) {
    nums[i] = 2;
  }
  return nums;
};

// Dutch national Flag algorithm
// https://users.monash.edu/~lloyd/tildeAlgDS/Sort/Flag/
// Time O(n) - one pass
// Space O(1) - in place
var sortColors_3 = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
        break;
    }
  }
  return nums;
};
console.log(sortColors_3(nums));
